const categories = document.querySelector('#categories');
const categoriesItems = categories.querySelectorAll('li.item');

console.log(`Кількість категорій: ${categoriesItems.length}`);

categoriesItems.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryList = category.querySelectorAll('ul > li');
    console.log(`Category ${categoryName}\nElements: ${categoryList.length}`);
});
