class SantasForm extends HTMLElement {
    connectedCallback() {
        if (this.querySelector("form")) {
            return;
        }

        this.innerHTML = `
            <form>
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <label>
                    <input type="checkbox" name="isNice" value="1" />
                    Nice?
                </label>
                <button type="submit">Add</button>
            </form>
        `;

        this.querySelector("form").addEventListener("submit", (event) => {
            event.preventDefault();
            const data = new FormData(event.target);

            this.dispatchEvent(
                new CustomEvent("add", {
                    detail: { form: Object.fromEntries(data.entries()) },
                }),
            );

            event.target.reset();
        });
    }
}

export const registerSantasForm = () => customElements.define("santas-form", SantasForm);
