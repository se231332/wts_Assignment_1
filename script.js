document.addEventListener("DOMContentLoaded", () => {
    // Funktion 1: Ändert den Inhalt eines Absatzes bei Button-Klick
    const button = document.getElementById("changeContent");
    if (button) {
        button.addEventListener("click", () => {
            document.getElementById("content").textContent = "Hier kann der gewünschte Text in der .js Datei hinterlegt werden der angezeigt wird beim betätigen vom Button!";
        });
    }

    // Funktion 2: Ändert den Hintergrund eines Elements bei Hover
    const hoverElement = document.getElementById("hoverChange");
    if (hoverElement) {
        hoverElement.addEventListener("mouseover", () => {
            hoverElement.style.backgroundColor = "#ffffff";
            document.getElementById("content").textContent = "Der Hintergrund wurde geändert!";
        });
        hoverElement.addEventListener("mouseout", () => {
            hoverElement.style.backgroundColor = "";
            document.getElementById("content").textContent = "Der Hintergrund wurde zurückgesetzt!";
        });
    }

    // Funktion 3: Ändert den Inhalt eines Absatzes basierend auf Benutzereingabe
    const inputField = document.getElementById("userInput");
    const updateButton = document.getElementById("updateContent");
    if (inputField && updateButton) {
        updateButton.addEventListener("click", () => {
            const inputValue = inputField.value;
            document.getElementById("inputContent").textContent = inputValue
                ? `Sie haben eingegeben: ${inputValue}`
                : "Bitte geben Sie etwas ein.";
        });
    }
});