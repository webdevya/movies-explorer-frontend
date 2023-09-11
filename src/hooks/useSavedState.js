export default function useSavedState(propsStorageName) {

  function getData() {
    if (localStorage.getItem(propsStorageName)) {
      const props = JSON.parse(localStorage.getItem(propsStorageName))
      return { ...props };
    }
    else {
      return {}
    }
  }

  function saveData(dataObj) {
    localStorage.setItem(propsStorageName, JSON.stringify(dataObj));
  }

  function clearData() {
    if (localStorage.getItem(propsStorageName))
      localStorage.removeItem(propsStorageName);
  }

  return { getData, saveData, clearData };
}
