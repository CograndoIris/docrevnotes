const version = "1.4.2";
document.addEventListener("DOMContentLoaded", () => {
    console.log("Initializing")
    const footer = document.getElementById("footer-wrapper");
    const sidebar = document.querySelector("nav");
    const openButton = document.getElementById("open-sidebar-button");
    const closeButton = document.getElementById("close-sidebar-button");
    footer.innerHTML = `
    <p>Created by Connor Grandorf</p>
    <p>Version ${version}</p>
    `;
    sidebar.classList.remove("show");
    openButton.style.display = "flex"; // Show the open button
    closeButton.style.display = "none"; // Hide the close button
    console.log("Initializing Complete")
});

const hideClass = (inclass) => {
    const elements = document.querySelectorAll(`.${inclass}`);
    elements.forEach((element) => {
        element.classList.add("hidden");
    });
}
const showClass = (inclass) => {
    const elements = document.querySelectorAll(`.${inclass}`);
    elements.forEach((element) => {
        element.classList.remove("hidden");
    });
}

const openSidebar = () => {
    document.querySelector(".navbar").classList.add("show");
    document.getElementById("open-sidebar-button").style.display = "none";
    document.getElementById("close-sidebar-button").style.display = "flex";
    console.log("openSidebar");
}

const closeSidebar = () => {
    document.querySelector(".navbar").classList.remove("show");
    document.getElementById("open-sidebar-button").style.display = "flex";
    document.getElementById("close-sidebar-button").style.display = "none";
    console.log("closeSidebar");
}

function resetForm() {
    const resetRadio = document.querySelectorAll('.reset');
    const resetText = document.querySelectorAll('.resettext');
    resetRadio.forEach((radio) => {
        return radio.checked = false;
    });
    resetText.forEach((text) => {
        return text.value = "";
    });
}

function copyToClipboard() {
    const output = document.querySelector('#output').textContent;
    navigator.clipboard.writeText(output).then(() => {
        console.log('Copied to clipboard');
    }).catch(err => {
        console.error('Error copying to clipboard: ', err);
    });
}