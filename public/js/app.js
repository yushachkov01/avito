const container = querySelector('.container')
const removeBtn = querySelectorAll('.removeBtn')

if(container){
  console.log(container);
  container.addEventListener('submit', async (e) => {
  e.preventDefault();
  const res = await fetch(`/articles/${e.target.dataset.id}`);
  
  if (res.status === 200) {
    // ---- определить элемент с записью на странице и удалить его через [element].remove()
    const myElement = document.querySelector('removeBtn')
    
    myElement.remove()
  }
});
}