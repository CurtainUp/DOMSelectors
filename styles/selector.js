const firstHeader = document.querySelector(".article__header");
const allHeaders = document.querySelectorAll(".article__header");
const dashed = document.querySelector(".dashed");
const articleFooter = document.querySelector(".article__footer");

firstHeader.textContent = "Welcome to the Elyse Blog";
allHeaders.classList = ("article__header important");
dashed.classList.remove("dashed");
articleFooter.classList.add("goldenrod");

console.log(allHeaders);
console.log(dashed);
console.log(articleFooter.classList);
