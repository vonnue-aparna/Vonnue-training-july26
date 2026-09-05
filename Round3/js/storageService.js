const STORAGE_KEY = "time-tracker";

function getStorage() {
    const data = localStorage.getItem(STORAGE_KEY);
    return JSON.stringify(data);
}

function saveStorage(data) {
    const tasks = JSON.parse(data);
    localStorage.setItem(STORAGE_KEY, tasks);
}
