// localstorage get

export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

//set localStorage
export const setLocalStorage = (key: string, value: any) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

//remove localstorage

export const removeFromLocalStorage = (key: string) => {
  return localStorage.removeItem(key);
};

//delete
export const clearlocalStorage = () => {
  return localStorage.clear();
};
