
const btnmenu = document.getElementById("btnmenu");
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");
const headernav = document.getElementById("headernav");

btnmenu.addEventListener('click', () => {
    console.log("AA")
    sidebar.classList.toggle("ativa");
    main.classList.toggle("ativa");
    headernav.classList.toggle("ativa")

    if (sidebar.classList.contains("ativa")) {
        btnmenu.innerText = "✕";
    } else {
        btnmenu.innerText = "☰";
    }
})