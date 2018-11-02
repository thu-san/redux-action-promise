export const reduxActionPromise = () => next => action =>
  new Promise((resolve, reject) => {
    next({
      ...action,
      resolve,
      reject
    });
  });

export const rfSubmitPromise = (handleSubmit, type, onError = () => {}) =>
  new Promise((resolve, reject) => {
    handleSubmit(async (payload, dispatch) => {
      try {
        const result = await dispatch({
          type,
          payload
        });

        resolve(result);
      } catch (e) {
        reject(e);
        onError(e);
        throw e;
      }
    })();
  });
