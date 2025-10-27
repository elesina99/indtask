const greetings = [
    "Сьогодні зірки пророкують: день буде добрим, а кава — смачною.",
    "Так добре, що ти є.",
    "Втома — не слабкість. Це знак того, що ти багато зробив.",
    "Щоб бути героєм, достатньо лишатися собою.",
    "Не приховуй почуттів, адже твої почуття важливі.",
    "Зроби маленький крок сьогодні — і ти відчуєш, скільки маєш сили.",
    "Самотність — це пауза перед гармонією.",
    "Усміхнись у відповідь, щоб відчути магію.",
    "Цілеспрямованість — компас, який вказує тобі правильний напрямок.",
    "Дружба — це унікальний зв’язок, який робить життя кращим.",
    "Відпочинок — це не лінь, а самоповага.",
    "Не зраджуй своїй мрії. Здійсни її."
];

document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("welcome-modal");
    const text = document.getElementById("welcome-text");
    const closeBtn = document.getElementById("close-popup");
    const container = document.querySelector(".games-container");

    text.textContent = greetings[Math.floor(Math.random() * greetings.length)];

    setTimeout(() => {
        popup.classList.add("show");
    }, 400);

    closeBtn.addEventListener("click", () => {
        popup.classList.remove("show");
        container.classList.add("show");
    });

    const colors = [
        "linear-gradient(135deg, #f08d86, #f0c986)",
        "linear-gradient(135deg, #e9f086, #86f08d)",
        "linear-gradient(135deg, #86f0e5, #868df0)",
        "linear-gradient(135deg, #be86f0, #f086e5)"
    ];
    let current = 0;

    setInterval(() => {
        current = (current + 1) % colors.length;
        document.body.style.background = colors[current];
    }, 30000);
});




