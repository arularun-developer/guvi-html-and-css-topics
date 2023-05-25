 const prevNext = document.querySelectorAll(".prevNext")

 const numbers = document.querySelectorAll(".link");

 numbers.forEach((number, numIndex) => {
  number.addEventListener("click", (e) => {
    e.preventDefault();
        // Set the current step to the clicked number link
    currentStep = numIndex;
    document.querySelector(".active").classList.remove("active");
    // Add the "active" class to the clicked number link
    number.classList.add("active");
  
  });
});

prevNext.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Increment or decrement the current step based on the button clicked
    currentStep += e.target.id === "next" ? 1 : -1;
    numbers.forEach((number, numIndex) => {
      // Toggle the "active" class on the number links based on the current step
      number.classList.toggle("active", numIndex === currentStep);
    });
  });
})