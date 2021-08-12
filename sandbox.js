// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('you clicked me');
// });





const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.querySelector('input');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = input.value;
  //ul.append(li);
  ul.prepend(li);
})

const items = document.querySelectorAll('li');

/*items.forEach(item => {
  item.addEventListener('click', e => {
    e.target.remove()
  });
});*/

ul.addEventListener('click', e => {
  if(e.target.tagName === 'LI'){
    e.target.remove();
    alert('Parabéns por Concluir Essa Tarefa.')
  }

})

