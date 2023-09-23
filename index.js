const moreButtons = document.querySelectorAll(".more_btn");

moreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setTimeout(() => {
      console.log("Hello world)");
    }, 3000);
  });
});
