class BadgeComponent extends HTMLElement {
    #span;

    connectedCallback() {
        if (!this.#span) {
            this.#span = Object.assign(document.createElement("span"), {
                className: "x-badge-label",
            });
        }

        this.prepend(this.#span);
        this.update();
    }

    static get observedAttributes() {
        return ["content"];
    }

    attributeChangedCallback() {
        this.update();
    }

    set content(value) {
        if (this.getAttribute("content") === value) {
            return;
        }

        this.setAttribute("content", value);
    }

    get content() {
        return this.getAttribute("content");
    }

    update() {
        if (!this.#span) {
            return;
        }

        this.#span.textContent = this.getAttribute("content");
    }
}

export const registerBadgeComponent = () => customElements.define("x-badge", BadgeComponent);
