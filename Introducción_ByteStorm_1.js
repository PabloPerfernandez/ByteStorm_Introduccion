
/*Pop-up*/
document.addEventListener("DOMContentLoaded", function() {
  var isDisabled = localStorage.getItem("popupDisabled");
  if (true) {
    /* popup.style.display = "block"; */
    /*var modal = new bootstrap.Modal(document.getElementById("popup"));*/
    var modal = new bootstrap.Modal("#popup");
    console.log(modal);
    modal.show();
  }
});

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

function disablePopup() {
  localStorage.setItem("popupDisabled", "true");
  closePopup();
}

/* Dark Theme*/
var icon = document.getElementById("Boton");
var isDarkMode = localStorage.getItem("darkMode");

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("darkTheme");
    if (document.body.classList.contains("darkTheme")) {
        icon.src = "moon-regular.png";
        localStorage.setItem("darkMode", "enabled");
    } else {
        icon.src = "sun-regular.png";
        localStorage.removeItem("darkMode");
    }
}

// Check if dark mode is enabled in local storage
if (isDarkMode === "enabled") {
    toggleDarkMode();
}

// Toggle dark mode on button click
icon.onclick = toggleDarkMode;

/*Menu*/
function scrollToDescripcion() {
  const targetElement = document.getElementById('descripcion');
  if (targetElement) {
    const targetPosition = targetElement.getBoundingClientRect().top;
    const offset = 70;
    window.scrollTo({
      top: window.pageYOffset + targetPosition - offset, behavior: 'smooth'
    });
  }
}

function scrollToMision() {
  const targetElement = document.getElementById('mision');
  if (targetElement) {
    const targetPosition = targetElement.getBoundingClientRect().top;
    const offset = 70;
    window.scrollTo({
      top: window.pageYOffset + targetPosition - offset, behavior: 'smooth'
    });
  }
}

function scrollToVision() {
  const targetElement = document.getElementById('vision');
  if (targetElement) {
    const targetPosition = targetElement.getBoundingClientRect().top;
    const offset = 70;
    window.scrollTo({
      top: window.pageYOffset + targetPosition - offset, behavior: 'smooth'
    });
  }
}

function scrollToNoticias() {
  const targetElement = document.getElementById('noticias');
  if (targetElement) {
    const targetPosition = targetElement.getBoundingClientRect().top;
    const offset = 100;
    window.scrollTo({
      top: window.pageYOffset + targetPosition - offset, behavior: 'smooth'
    });
  }
}