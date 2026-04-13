const template = Object.assign(document.createElement("template"), {
    innerHTML: `
        <link rel="stylesheet" href="${import.meta.resolve('./header.css')}">
        <header>
            <h1></h1>
            <slot></slot>
        </header>
    `
});

class HeaderComponent extends HTMLElement {
    constructor() {
        super();

        if (!this.shadowRoot) {
            this.attachShadow({ mode: "open" });
            this.shadowRoot.append(template.content.cloneNode(true));
        }

        this.update();
    }

    static get observedAttributes() {
        return ["title"];
    }

    attributeChangedCallback() {
        this.update();
    }

    update() {
        this.shadowRoot.querySelector("h1").textContent = this.getAttribute("title");
    }
}

export const registerHeaderComponent = () => customElements.define("x-header", HeaderComponent);
