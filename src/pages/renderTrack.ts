import { StoreType } from "../types/timeTypes";

export function renderTrack(store: StoreType): HTMLElement {
  const section = document.createElement("section");
  section.innerHTML = "<div>Track</div>";

  return section;
}
