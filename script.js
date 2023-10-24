
const themeRadios = document.querySelectorAll('input[name="theme"]');
const head = document.querySelector("head");

themeRadios.forEach(themeRadio => {
    themeRadio.addEventListener("change", () => {
        const selectedTheme = themeRadio.value;
        switchTheme(selectedTheme);
    });
});

function switchTheme(theme) {
    const newLink = document.createElement("link");
    newLink.rel = "stylesheet";
    newLink.type = "text/css";

    if (theme === "light") {
        newLink.href = "styles-light.css";
    } else if (theme === "dark") {
        newLink.href = "styles-dark.css";
    } else if (theme === "custom") {
        newLink.href = "styles-custom.css";
    }

    // Remove the old theme CSS link (if any)
    const oldLink = head.querySelector("link[data-theme]");
    if (oldLink) {
        head.removeChild(oldLink);
    }

    // Set a data-theme attribute to identify the link
    newLink.setAttribute("data-theme", theme);

    // Append the new theme CSS link to the head
    head.appendChild(newLink);
}

// Initial theme selection
switchTheme("light"); // Set an initial theme (e.g., "light") here.

