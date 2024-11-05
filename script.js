function showPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "block";

    // Hide the popup automatically after 5 seconds
    setTimeout(closePopup, 5000);
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Show popup 2 seconds after page load
window.onload = function () {
    setTimeout(showPopup, 2000);
};
