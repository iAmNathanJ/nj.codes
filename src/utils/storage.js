export const PREFERENCES = '__nj_preferences__';

export function storage(id) {
  const get = (key) => {
    return (JSON.parse(localStorage.getItem(id)) || {})[key];
  };

  const set = (key, value) => {
    const data = JSON.parse(localStorage.getItem(id)) || {};
    data[key] = value;
    localStorage.setItem(id, JSON.stringify(data));
  };

  return { get, set };
};
