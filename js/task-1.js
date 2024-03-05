let totalCategories = document.querySelectorAll(".item");
console.log(`Categories: ${totalCategories.length}`);

totalCategories.forEach((totalCategories) => {
  nameCategories(totalCategories);
});

function nameCategories(category) {
  const categoryTitle = category.querySelector("h2").textContent;
  const categoryElementsCount = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElementsCount}`);
}
