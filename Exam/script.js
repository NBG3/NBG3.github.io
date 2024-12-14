document.addEventListener("mouseup", () => {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
        const input = document.getElementById("textInput");
        input.value = selectedText;
    }
});