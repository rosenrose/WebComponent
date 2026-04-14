class SantasList extends HTMLElement {
    #currentItems = [];

    set items(newItems) {
        this.#currentItems = newItems;
        this.update();
    }

    update() {
        this.innerHTML = `
            <ul>
                ${this.#currentItems
                    .map(({ name, isNice }) => `<li>${name} is ${isNice ? "nice" : "bad"}</li>`)
                    .join("\n")}
            </ul>
        `;
    }
}

export const registerSantasList = () => customElements.define("santas-list", SantasList);
