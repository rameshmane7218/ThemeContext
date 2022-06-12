/**
 *
 * @param {string} key
 * returns JSON.parse(data)
 */

function loadData(key) {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch (err) {
    return undefined;
  }
}
/**
 *
 * @param {string} key
 * @param {any} data
 */
function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export { loadData, saveData };
