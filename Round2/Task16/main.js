const STORAGE_KEY = "appointments";

function saveState(state) {
  return localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const savedState = loadState.getItem(STORAGE_KEY);

  if (!savedState) {
    return [];
  }

  return JSON.parse(savedState);
}

function loadAppointments() {
  return loadState();
}
