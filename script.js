// ----------Q.1------------
// let heading = document.getElementById("title")
// heading.textContent = "Hello Javascript"
// ----------Q.2------------
// let heading = document.querySelector(".description")
// heading.textContent = "New Description"
// ----------Q.3------------
// let items = document.querySelectorAll(".item")
// items.forEach(function(item) {
//     item.style.color = "red"
// })
// ----------Q.4------------
// let text = document.querySelector("#message")
// text.textContent = "Welcome to Javascript"
// ----------Q.5------------
// let div = document.querySelector("#container")
// div.innerHTML = `<h2>My Website</h2>
// <p>Welcome to my website!</p>`;
// ----------Q.6------------
// let img = document.querySelector("#profileImage")
// img.setAttribute("src", "newsrc")
// img.setAttribute("alt", "new Image")
// ----------Q.7------------
// button = document.querySelector("#btn")
// button.classList.add("Click")
// button.classList.remove("Click")
// ----------Q.8------------
// heading = document.querySelector("#heading")
// heading.style.color = "red"
// heading.style.backgroundColor = "green"
// heading.style.fontSize = "50px"
// ----------Q.9------------
// button = document.querySelector("#productBtn")
// console.log(button.dataset.id);
// ----------Q.10------------
// body = document.querySelector("body")
// let p = document.createElement('P')
// p.textContent = `This paragraph was created using JavaScript.`
// body.append(p)
// ----------Q.11------------
// ul = document.querySelector("#skills");
// let li = document.createElement("li");
// li.textContent = "HTML, CSS, Javascript";
// ul.appendChild(li);
// ----------Q.12------------
// list = document.querySelector("#list")
// let p1 = document.createElement("p")
// let p2 = document.createElement("p")
// let p3 = document.createElement("p")
// let p4 = document.createElement("p")
// p1.textContent = "CSS"
// list.append(p1)
// p2.textContent = "JAVASCRIPT"
// list.append(p2)
// p3.textContent = "react"
// list.append(p3)
// p4.textContent = "HTML"
// list.prepend(p4)
// ----------Q.13-----------
// let list = document.querySelector("#list");
// let newItem = document.createElement("li");
// newItem.innerText = "CSS";
// list.insertBefore(newItem, list.children[1]);
// ----------Q.14-----------
// let list = document.querySelector("#list");
// list.children[1].remove();
// ----------Q.15-----------
// button = document.querySelector("#btn")
// let clone = button.cloneNode(true)
// document.body.appendChild(clone)
//<<<<<<---------------------------------------------->>>>>>>>

// Events - Handling, Bubbling & Event Delegation in JavaScript Assignment
// ----------Q.1------------
// let btn = document.querySelector("#btn")
// let p = document.querySelector("#page")
// btn.addEventListener("click", function () {
//     p.textContent = "Button Clicked"
// })
// ----------Q.2------------
// let btn = document.querySelector("#btn")
// let p = document.querySelector("#page")
// p.textContent = "Welcome to my website!"
// btn.addEventListener("click", function () {
//     p.textContent = "Thanks for visiting! "
// })
// ----------Q.3------------
// let h1 = document.querySelector("#h1")
// h1.addEventListener("mouseover", function(){
//     h1.textContent = "Mouse is over the heading! "
// })
// h1.addEventListener("mouseleave", function(){
//     h1.textContent = "JavaScript "
// })
// ----------Q.4------------
// let btn = document.querySelector("#btn")
// btn.addEventListener("click", function(e){
//     console.log(e.target.tagName);
// })
// ----------Q.5------------
// let pagex = document.querySelector("#pageX")
// let pagey = document.querySelector("#pageY")
// let body = document.querySelector("body")
// body.addEventListener("mousemove", function(e) {
//     pagex.textContent = `X: ${e.clientX}`
//     pagey.textContent = `Y: ${e.clientY}`
//     console.log(e.clientX);
// })
// ----------Q.6------------
// input = document.querySelector("#input")
// output = document.querySelector("#btn")
// output.addEventListener("click", function(){
//     console.log(input.value);
// })
// ----------Q.7------------
// let btn = document.querySelector("#btn")
// function fun1() {
//      btn.textContent = "Clicked"
// }
// btn.addEventListener("click", fun1
// )
// function fun2(){
//     btn.textContent = "Click Me"
// }
// btn.removeEventListener("click", fun2
// )
// ----------Q.8------------
// let btn = document.querySelector("#btn")
// btn.addEventListener("click", () => {
//     btn.addEventListener("click", {once: true})
//     btn.textContent = "clicked"
//     console.log(btn.textContent);
// })
// ----------Q.9------------
// let div = document.querySelector("#div")
// let btn = document.querySelector("#btn")
// div.addEventListener("click", (e) => {
//     console.log("Parent Clicked");
// })
// btn.addEventListener("click", (e) => {
//         e.stopPropagation()
//     console.log("btn Clicked");
// })
// ----------Q.10------------
// let div = document.querySelector("#parent")
// let btn = document.querySelector("#btn")
// div.addEventListener("click", (e) => {
//     console.log("Parent Clicked");
// })
// btn.addEventListener("click", (e) => {
//     console.log("btn Clicked");
// })
// ----------Q.11------------
// let div = document.querySelector("#parent")
// let btn = document.querySelector("#btn")
// div.addEventListener("click", (e) => {
//     console.log("Parent Clicked");
// }, {capture: true})
// btn.addEventListener("click", (e) => {
//     e.stopPropagation()
//     console.log("btn Clicked");
// })
// ----------Q.12-----------
// let btn = document.querySelector("#buttons")
// btn.addEventListener("click", (e) => {
//     console.log(e.target.textContent);
// })
// ----------Q.13------------
// let ul = document.querySelector("#skills");
// ul.addEventListener("click", (e) => {
//     console.log("you Clicked ", e.target.textContent);
// })














