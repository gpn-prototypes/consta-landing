import { createStore } from '@reatom/core';

export const store = createStore();

store.subscribe((action) => console.warn(action));
