function changeBg(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if (scrollValue < 600) {
        navbar.classList.remove('mainColor')
    } else {
        navbar.classList.add('mainColor')
    }
    
}
window.addEventListener('scroll', changeBg)







































































// const cursor = document.querySelector(".cursor");
// var timeout;

// document.addEventListener("mousemove", (e) => {
// let x = e.pageX;
// let y = e.pageY

// cursor.style.top = y + "px";
// cursor.style.left = x + "px";
// cursor.style.display = "block";

// function mouseStopped(){
//     cursor.style.display = "none";
// }
// clearTimeout(timeout);
// timeout = setTime(mouseStopped, 10);
// })

// document.addEventListener("mouseout", () => {
// cursor.style.display = "none";
// })
