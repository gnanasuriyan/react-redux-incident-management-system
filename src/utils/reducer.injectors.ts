import invariant from 'invariant';
import { isEmpty, isFunction, isString } from 'lodash';

import checkStore from './check.store';
import createReducer from '../reducers';

export const injectReducerFactory = (store: any, isValid: any) => {
  const injectReducer = (key: any, reducer: any) => {
    if (!isValid) checkStore(store);
    invariant(
      isString(key) && !isEmpty(key) && isFunction(reducer),
      '(src/utils...) injectReducer: Expected `reducer` to be a reducer function',
    );
    if (
      Reflect.has(store.injectedReducers, key) &&
      store.injectedReducers[key] === reducer
    )
    return;
    store.injectedReducers[key] = reducer;
    store.replaceReducer(createReducer(store.injectedReducers));
  };
  return injectReducer;
}

const getInjectors = (store: any) => {
  checkStore(store);
  return {
    injectReducer: injectReducerFactory(store, true),
  };
}

export default getInjectors;
