const buttons = document.querySelectorAll(".moods button");
const message = document.getElementById("message");

const messages = [
    "You're having a happy day! 😊✨",
    "It's an okay day. Keep going! 🌸",
    "It's okay to have a sad day. 💜",
    "Take a deep breath and relax. 🌿"
];

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("selected"));

        button.classList.add("selected");

        message.textContent = messages[index];

        message.style.transform = "scale(1.1)";

        setTimeout(() => {
            message.style.transform = "scale(1)";
        }, 200);
    });
});