const infoBtn = document.querySelector("#info-btn")
infoBtn.addEventListener("click", function() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.classList.toggle("active")
})