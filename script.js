
const btnmenu = document.getElementById("btnmenu");
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");

btnmenu.addEventListener('click', () => {
    console.log("AA")
    sidebar.classList.toggle("ativa");
    main.classList.toggle("ativa");

    if (sidebar.classList.contains("ativa")) {
        btnmenu.innerText = "✕";
    } else {
        btnmenu.innerText = "☰";
    }
})