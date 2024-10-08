const throttle = (callback, delay) => {
  let timer;

  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
};

export default throttle;
