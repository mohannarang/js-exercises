
function curry(func) {
  const argLen = func.length;
  const initialArgs = Array.prototype.slice.call(arguments, 1);

  return (function resolve() {
    let cachedArgs = Array.prototype.slice.call(arguments);

    return function() {
      let totalArgs = Array.prototype.concat.apply(cachedArgs, arguments);
      if (totalArgs.length >= argLen) {
        return func.apply(null, totalArgs);
      }

      return resolve.apply(null, totalArgs);
    };
  }).apply(null, initialArgs);
}
