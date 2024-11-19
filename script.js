const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Generate a unique user ID (for demo purposes, a random ID)
const userId = "User" + Math.floor(Math.random() * 1000);

// Telegram Bot Information
const botToken 
yesBtn.addEventListener("click", () => {
  // Update the text and GIF
  question.innerHTML = "I love you too! 😘";
  gif.src = "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";

  // Send data to Telegram bot
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const message = `${userId} clicked on Yes ❤️`;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Message sent to Telegram!");
      } else {
        console.error("Failed to send message.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
