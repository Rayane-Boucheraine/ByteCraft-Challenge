document.getElementById("caret").addEventListener("click", function() {
    document.getElementById("caret").style.display = "none"
    document.getElementById("xmark").style.display = "block"
    document.getElementById("list").style.display = "flex"
})
document.getElementById("xmark").addEventListener("click", function() {
    document.getElementById("list").style.display = "none"
    document.getElementById("caret").style.display = "block"
})