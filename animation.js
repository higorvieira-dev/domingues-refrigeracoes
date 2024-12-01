function myFunction(){
    document.getElementById("myDialog").showModal();
}


document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".bar");
  
    bars.forEach(bar => {
      const value = bar.getAttribute("data-value");
      bar.style.height = `${value}%`;
  
      const valueDisplay = bar.querySelector(".value");
      let current = 0;
  
      // Animação para exibir o valor gradualmente
      const interval = setInterval(() => {
        if (current >= value) {
          clearInterval(interval);
        } else {
          current++;
          valueDisplay.textContent = `${current}%`;
        }
      }, 10);
    });
  });
  