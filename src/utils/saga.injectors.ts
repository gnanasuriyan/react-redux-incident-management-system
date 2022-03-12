import invariant from 'invariant';
import { isEmpty, isFunction, isString, conformsTo } from 'lodash';

import checkStore from './check.store';
import { DAEMON, ONCE_TILL_UNMOUNT, RESTART_ON_REMOUNT } from './constants';

const allowedModes = [RESTART_ON_REMOUNT, DAEMON, ONCE_TILL_UNMOUNT];

const checkKey = (key: any) =>
  invariant(
    isString(key) && !isEmpty(key),
    '(src/utils...) injectSaga: Expected `key` to be a non empty string',
  );

const checkDescriptor = (descriptor: any) => {
  const shape = {
    saga: isFunction,
    mode: (mode: any) => isString(mode) && allowedModes.includes(mode),
  };
  invariant(
    conformsTo(descriptor, shape),
    '(src/utils...) injectSaga: Expected a valid saga descriptor',
  );
};

export const injectSagaFactory = (store: any, isValid: any) => {
  const injectSaga = (key: any, descriptor: any, args: any) => {
    if (!descriptor) {
      descriptor = {};
    }
    if (!isValid) checkStore(store);
    const newDescriptor = {
      ...descriptor,
      mode: descriptor.mode || DAEMON,
    };
    const { saga, mode } = newDescriptor;
    checkKey(key);
    checkDescriptor(newDescriptor);

    let hasSaga = Reflect.has(store.injectedSagas, key);

    if (process.env.NODE_ENV !== 'production') {
      const oldDescriptor = store.injectedSagas[key];
      if (hasSaga && oldDescriptor.saga !== saga) {
        oldDescriptor.task.cancel();
        hasSaga = false;
      }
    }

    if (
      !hasSaga ||
      (hasSaga && mode !== DAEMON && mode !== ONCE_TILL_UNMOUNT)
    ) {
      store.injectedSagas[key] = {
        ...newDescriptor,
        task: store.runSaga(saga, args),
      };
    }
  };
  return injectSaga;
}

export function ejectSagaFactory(store: any, isValid: any) {
  const ejectSaga = (key: any) => {
    if (!isValid) checkStore(store);

    checkKey(key);

    if (Reflect.has(store.injectedSagas, key)) {
      const descriptor = store.injectedSagas[key];
      if (descriptor.mode && descriptor.mode !== DAEMON) {
        descriptor.task.cancel();
        if (process.env.NODE_ENV === 'production') {
          store.injectedSagas[key] = 'done';
        }
      }
    }
  };
  return ejectSaga;
}


const getInjectors = (store: any): any => {
  checkStore(store);

  return {
    injectSaga: injectSagaFactory(store, true),
    ejectSaga: ejectSagaFactory(store, true),
  };
}

export default getInjectors;
