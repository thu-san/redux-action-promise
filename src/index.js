export default () => next => action =>
  new Promise((resolve, reject) => {
    next({
      ...action,
      resolve,
      reject
    });
  });
