const categoriesTotal = document.querySelector("#categories");
const categoriesCount = categoriesTotal.children.length;
console.log(`Number of categories: ${categoriesCount}`);

const listByClass = document.querySelectorAll(".item");
listByClass.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent); 
  console.log("Elements: ", item.lastElementChild.children.length);
});