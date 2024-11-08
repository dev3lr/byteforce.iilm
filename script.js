function showPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "block";
    setTimeout(closePopup, 5000);
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Show popup 2 seconds after page load only if the view isn't desktop
window.onload = function () {
    if (window.innerWidth < 1024) { // Only show popup for non-desktop views
        setTimeout(showPopup, 2000);
    }
};
