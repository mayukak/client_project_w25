const toggleBtn = document.getElementById("toggleBtn");
  const extraContent = document.getElementById("extraContent");

  toggleBtn.addEventListener("click", () => {
    if (extraContent.style.display === "none") {
      extraContent.style.display = "block";
      toggleBtn.textContent = "Show Less";
    } else {
      extraContent.style.display = "none";
      toggleBtn.textContent = "Show More";
    }
  });
