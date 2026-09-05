import { StoreType } from "../types/timeTypes";

export function renderDashboard(store: StoreType): HTMLElement {
  const section = document.createElement("section");
  section.innerHTML = "<div>Dashboard</div>";

  return section;
}
