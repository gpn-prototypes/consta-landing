import { withNaming } from '@bem-react/classname';
import {
  ActionCreator,
  declareAction as reatomDeclareAction,
  declareAtom as reatomDeclareAtom,
  Store,
} from '@reatom/core';

export function declareAction<T>(moduleName: string, actionName: string, postfix?: string) {
  return reatomDeclareAction<T>(`${moduleName}/${actionName}_${postfix}`);
}

type AsyncActionCreator = {
  start: ActionCreator<string>;
  success: ActionCreator<string>;
  failure: ActionCreator<string>;
  finally: ActionCreator<string>;
};

export function declareAsyncAction(actionName: string): AsyncActionCreator {
  return {
    start: reatomDeclareAction(`${actionName}_start`),
    success: reatomDeclareAction(`${actionName}_success`),
    failure: reatomDeclareAction(`${actionName}_failure`),
    finally: reatomDeclareAction(`${actionName}_finally`),
  };
}

export function declareLoadingAtom(asyncActionCreator: AsyncActionCreator) {
  return reatomDeclareAtom<boolean>(false, (on) => [
    on(asyncActionCreator.start, () => true),
    on(asyncActionCreator.finally, () => false),
  ]);
}

export function createAsyncAction(actionName: string, f: () => Promise<undefined>) {
  const asyncActionCreator = declareAsyncAction(actionName);
  return async (payload: undefined, store: Store) => {
    try {
      store.dispatch(asyncActionCreator.start());
      const response = await f();
      store.dispatch(asyncActionCreator.success());
      return response;
    } catch (error) {
      store.dispatch(asyncActionCreator.failure());
    } finally {
      store.dispatch(asyncActionCreator.finally());
    }
  };
}

export const n = withNaming({ n: '', e: '/', m: '_' });
