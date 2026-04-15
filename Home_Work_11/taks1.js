function delayedLog(text, delay) {
  setTimeout(() => {
    console.log(text);
  }, delay);
}

delayedLog('Привіт, світ!', 2000);
