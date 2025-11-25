document.getElementById("btn").addEventListener("click", function() {
    const name = document.getElementById("uname").value;
    const greeting = document.getElementById("greeting");
    if (name.trim() === "") {
        greeting.textContent = "Hello";
    } else {
        greeting.textContent = "Hello, " + name;
    }
});

// Color boxes functionality
document.getElementById("red").addEventListener("click", function() {
    this.style.background = "red";
    this.style.color = "white";
});

document.getElementById("blue").addEventListener("click", function() {
    this.style.background = "blue";
    this.style.color = "white";
});

document.getElementById("green").addEventListener("click", function() {
    this.style.background = "green";
    this.style.color = "black";
});

document.getElementById("yellow").addEventListener("click", function() {
    this.style.background = "yellow";
    this.style.color = "black";
});



