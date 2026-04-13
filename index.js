import { registerAvatarComponent } from "./components/avatar.js";
import { registerBadgeComponent } from "./components/badge.js";

const app = () => {
    registerAvatarComponent();
    registerBadgeComponent();
}

document.addEventListener("DOMContentLoaded", app);

document.querySelector("#badge-input").addEventListener("input", (event) => {
    const num = parseInt(event.target.value);
    const min = parseInt(event.target.min);
    const max = parseInt(event.target.max);

    if (isNaN(num)) {
        event.target.value = "";
    }
    else if (num < min) {
        event.target.value = min;
    }
    else if (num > max) {
        event.target.value = max;
    }

    document.querySelector("#live-badge").content = event.target.value;
});
