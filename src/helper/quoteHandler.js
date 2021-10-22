export async function fetchAndSetParagraph() {
    let display = document.getElementById("display");
    display.innerHTML = "<p class='loading_text'>Loading New Paragraph...🚀</p>";
    document.getElementById("userInput").disabled = true;

    let response = await fetch("https://api.quotable.io/random");
    let paragraph = await response.json();

    display.innerHTML = "";
    paragraph.content.split("").forEach((letter) => {
        let textSpan = document.createElement("span");
        textSpan.className = 'letter';
        textSpan.innerText = letter;
        display.appendChild(textSpan);
    });

    document.getElementById("userInput").disabled = false;
}
