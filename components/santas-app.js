class SantasApp extends HTMLElement {
    #items = [];

    connectedCallback() {
        if (this.querySelector("h1")) {
            return;
        }

        this.innerHTML = `
            <h1>Santa's List</h1>
            <santas-form></santas-form>
            <santas-list></santas-list>
            <santas-summary></santas-summary>
        `;

        this.querySelector("santas-form").addEventListener("add", (event) => {
            this.#items.push(event.detail.form);
            this.update();
        });
    }

    update() {
        this.querySelector("santas-list").items = [...this.#items];
        this.querySelector("santas-summary").update([...this.#items]);
    }
}

export const registerSantasApp = () => customElements.define("santas-app", SantasApp);
