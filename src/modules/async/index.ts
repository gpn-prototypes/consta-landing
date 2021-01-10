import { declareAction, Store } from '@reatom/core';

import { createAsyncAction, declareAsyncAction, declareLoadingAtom, n } from '@/utils/reatom';

const nForm = n('form');

const getList = createAsyncAction(nForm('getList'), () => new Promise((r) => setTimeout(r, 600)));

const getFormDataAsyncAction = declareAsyncAction(nForm('getFormData'));

const getFormData = async (input: undefined, store: Store) => {
  try {
    store.dispatch(getFormDataAsyncAction.start());

    await getList(undefined, store);
    await getList(undefined, store);
    await getList(undefined, store);
    await getList(undefined, store);
    await getList(undefined, store);

    store.dispatch(getFormDataAsyncAction.success());
  } catch (error) {
    store.dispatch(getFormDataAsyncAction.failure());
  } finally {
    store.dispatch(getFormDataAsyncAction.finally());
  }
};

export const getFormDataAction = declareAction(getFormData);

export const isLoadingFormDataAtom = declareLoadingAtom(getFormDataAsyncAction);
