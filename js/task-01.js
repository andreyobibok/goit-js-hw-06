console.log(`Number of categories: ${document.querySelector('#categories').getElementsByTagName('ul').length}`);
Array.from(document.querySelectorAll('.item')).forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${Array.from(element.getElementsByTagName('li')).length}`);
});