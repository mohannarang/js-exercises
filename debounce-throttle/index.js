function debounce(func, interval) {
    let timer = 0;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func(...args);
        }, interval);
    }
}

function throttle(func, interval) {
  let timer = 0;
  let latestArgs = null;
  let shouldFire = false;

  function execute() {
      timer = setTimeout(() => {
        timer = 0;
        if (shouldFire) {
            shouldFire = false;
            execute();
        }
      }, interval);
      func(...latestArgs);
  }

  return function(...args) {
    latestArgs = args;
    if (timer) {
        shouldFire = true;
    } else {
      execute();
    }
  }
}


function init() {
  console.log('Init');
  const debounceInput = document.getElementById('debounce-input');
  const debounceText = document.getElementById('debounce-text');

  debounceInput.addEventListener('input', debounce(function(event) {
    console.log('Change Event Fired');
    debounceText.textContent = event.target.value;
  }, 300));

  const throttleInput = document.getElementById('throttle-input');
  const throttleText = document.getElementById('throttle-text');

  throttleInput.addEventListener('input', throttle(function(event) {
    throttleText.textContent = event.target.value;
  }, 3000));
}

window.onload = function() {
    init();
}