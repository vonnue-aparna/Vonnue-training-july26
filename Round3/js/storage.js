const STORAGE_KEY = "timer-tracker-state";

export function saveState(state) {
  return localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function loadState() {
  const savedState = localStorage.getItem(STORAGE_KEY);

  if (!saveState) {
    return;
  }

  return JSON.parse(savedState);
}
