document.addEventListener("DOMContentLoaded", function () {
    const lines = [
        { id: "line1", text: "Xin chào! Tôi là Natsume Kafka" },
        { id: "line2", text: "Tôi là một lập trình viên top 1 thế giới" },
        { id: "line3", text: 'Hãy ghé thăm <a href="https://www.youtube.com/@KafkaNatsume" target="_blank">Youtube</a> để xem video.' }
    ];

    let lineIndex = 0;
    let charIndex = 0;
    let currentElement = document.getElementById(lines[lineIndex].id);
    let currentText = lines[lineIndex].text;

    function typeEffect() {
        if (charIndex < currentText.length) {
            currentElement.innerHTML += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 50); // Tốc độ gõ chữ
        } else {
            lineIndex++;
            if (lineIndex < lines.length) {
                charIndex = 0;
                currentElement = document.getElementById(lines[lineIndex].id);
                currentText = lines[lineIndex].text;
                setTimeout(typeEffect, 500); // Khoảng dừng giữa các dòng
            }
        }
    }

    typeEffect();
});
