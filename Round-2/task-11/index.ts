let slots: any[] = []
let buttons: any[] = []

export function addListenerToButtons(slots:any[],buttons:any[]) {

    function selectSlot(data:any) {
        return data
    }

    for (let i = 0; i < slots.length; i++) {
        buttons[i].addEventListener("click", () => {
            selectSlot(slots[i]);
        });
    }
}