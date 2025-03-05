document.addEventListener("DOMContentLoaded", function () {
    const lines = [
        { id: "line1", text: "Xin chào! Tôi là Natsume Kafka" },
        { id: "line2", text: "Tôi là một lập trình viên top 1 thế giới" },
        { id: "line3", text: 'Hãy ghé thăm <a href="https://www.youtube.com/@KafkaNatsume" target="_blank">Youtube</a> để xem video.' }
    ];

    let lineIndex = 0;
    let charIndex = 0;

    function typeEffect() {
        if (lineIndex >= lines.length) return; // Kết thúc nếu hết dòng

        let currentElement = document.getElementById(lines[lineIndex].id);
        if (!currentElement) return; // Kiểm tra nếu phần tử không tồn tại

        currentElement.innerHTML = lines[lineIndex].text.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex < lines[lineIndex].text.length) {
            setTimeout(typeEffect, 50);
        } else {
            lineIndex++;
            charIndex = 0;
            setTimeout(typeEffect, 500);
        }
    }

    typeEffect();
});
