class SantasSummary extends HTMLElement {
    update(items) {
        const niceCnt = items.filter(({ isNice }) => isNice).length;
        const badCnt = items.length - niceCnt;
        const textContent =
            items.length == 0 ? "Nobody's on the list yet." : `${niceCnt} nice, ${badCnt} bad`;

        this.innerHTML = `<p>${textContent}</p>`;
    }
}

export const registerSantasSummary = () => customElements.define("santas-summary", SantasSummary);
