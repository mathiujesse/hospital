function showTooltip() {
            var tooltip = document.getElementById("tooltipText");
            // tooltip.style.visibility = "visible";
            // Simulate fetching the submission status from a server
            // Replace [status] with the actual submission status retrieved from the server
            tooltip.textContent = "Submission status: Submitted";
}
function alert(message) {
    console.log(message);
    message.innerHTML = "Error submitting";
}
