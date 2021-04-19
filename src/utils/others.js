function setLocalStorage(key, value) {
  if (typeof value === "object") {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
}

function getLocalStorage(key) {
  try {
    let obj = JSON.parse(localStorage.getItem(key) || null);
    return obj;
  } catch (err) {
    return localStorage.getItem(key);
  }
}

export { setLocalStorage, getLocalStorage };
