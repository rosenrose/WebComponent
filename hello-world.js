class HelloWorldComponent extends HTMLElement {
    connectedCallback() {
        this.textContent = "Hello, world!";
    }
}

customElements.define("x-hello-world", HelloWorldComponent);
