export const setLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
export const getLocal = (key) => {
  const val = localStorage.getItem(key);
  return val ? JSON.parse(val) : null;
};
