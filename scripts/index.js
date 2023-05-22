window.onload = () => {
  console.log('La pagina ha cargado');
  // const specialParagraph = document.getElementById('special-paragraph');
  // // console.log(specialParagraph);
  
  // const redParagraphs = document.getElementsByClassName('red');
  // // console.log(redParagraphs);
  
  // const paragraphs = document.getElementsByTagName('p');
  // // console.log(paragraphs);
  
  // // document.getElementsByName('first-name');
  
  // const querySelectorAll = document.querySelectorAll('div#important > p#special-paragraph2.red');
  // // console.log(querySelectorAll);
  
  // const querySelectorElement = document.querySelector('p');
  // console.log('innerText', querySelectorElement.innerText);
  // console.log('textContent', querySelectorElement.textContent);
  // console.log('innerHTML', querySelectorElement.innerHTML);
  
  // querySelectorElement.innerHTML = '<span>Hola</span> que tal';
  // querySelectorElement.classList.add('red', 'blue');
  // querySelectorElement.classList.remove('blue');
  // querySelectorElement.classList.toggle('yellow');
  // querySelectorElement.classList.toggle('yellow');
  
  // // querySelectorElement.className = 'patata'
  
  // querySelectorElement.style.color = 'white';
  // querySelectorElement.style.backgroundColor = 'blue';
  // querySelectorElement.style.padding = '20px';
  
  // const firstNameInput = document.getElementById('first-name');
  
  // console.log(firstNameInput.value);
  // firstNameInput.value = 'hola';
  // console.log(firstNameInput.value);
  
  // firstNameInput.setAttribute('patata', 'valor'); // Solo para los custom attributes
  // console.log(firstNameInput.getAttribute('patata'));
  
  // const important = document.getElementById('body-section');
  
  // console.log(important.lastElementChild);
  // console.log([...important.children]);
  // console.log(Array.from(important.children).filter(node => node.tagName === 'P'));
  
  const table = document.getElementById('ages-table');
  
  const firstAge = table.querySelector('.age');
  console.log(firstAge.innerText);
  
  const tableBody = table.querySelector('tbody');
  
  console.log(tableBody.children[1].querySelector('.age').textContent);
  
  
  // Manipulacion del dom
  const content = document.getElementById('content');
  
  const newElement = document.createElement('h2');
  const text = document.createTextNode('Hello DOM');
  
  newElement.appendChild(text);
  content.appendChild(newElement); // append a algo que ya esté en el DOM
  
  const h3Element = document.createElement('h3');
  h3Element.textContent = 'This is a h3';
  
  content.appendChild(h3Element);
  
  const h4Element = document.createElement('h4');
  h4Element.innerHTML = '<span>This</span> is a h4';
  
  content.appendChild(h4Element);
  
  
  // DEMO LAB

  document.addEventListener('scroll', (event) => {
    const title = document.getElementById('title');
    if (document.documentElement.scrollTop > 20) {
      title.classList.add('animated');
    } else {
      title.classList.remove('animated');
    }
    console.log(document.documentElement.scrollTop);
  })

  // Trabajar con la tabla
  
  const namesTable = document.getElementById('names-table');
  const namesTableBody = namesTable.querySelector('tbody');

  function addDeleteBehaviour(buttonElement) {
    buttonElement.addEventListener('click', (event) => {
      console.log('clicked', event.target.parentElement.parentElement); // para localizar quien lo lanza
      event.target.closest('tr').remove();
    })
  }
  
  function addNewPerson(name, surname) {
    const newRow = document.createElement('tr');
    
    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    nameCell.classList.add('name');
    
    const surnameCell = document.createElement('td');
    surnameCell.textContent = surname;
    
    const actionCell = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-delete');
    deleteBtn.textContent = 'Delete';
    addDeleteBehaviour(deleteBtn);
    actionCell.appendChild(deleteBtn);
    
    // newRow.appendChild(nameCell);
    // newRow.appendChild(surnameCell);
    newRow.append(nameCell, surnameCell, actionCell);
    namesTableBody.appendChild(newRow);
  }

  // A los que estan en el HTML les pongo la capacidad de borrar la fila
  const deleteBtns = document.getElementsByClassName('btn-delete');

  Array.from(deleteBtns).forEach(button => {
    addDeleteBehaviour(button);
  })

  // Me creo dos a mano

  addNewPerson('Carlos', 'de la Torre');
  addNewPerson('Marcos', 'Monzón');

  // Poner click listener al create-btn

  const createPersonBtn = document.getElementById('create-person');
  createPersonBtn.onclick = (event) => {
    onCreate();
  }

  function onCreate() {
    // Encontrar los inputs
    const personForm = document.getElementById('person-form');

    const nameInput = document.getElementById('name');
    const nameInputValue = nameInput.value; // Capturo el valor en X momento

    const surnameInput = document.getElementById('surname');
    const surnameInputValue = surnameInput.value;

    const errorFeedback = document.querySelector('.error-feedback');

    if (surnameInputValue && surnameInputValue) {
      addNewPerson(nameInputValue, surnameInputValue);

      // Resetear los valores de los inputs
      nameInput.value = '';
      surnameInput.value = '';

      nameInput.style.borderColor = '';
      surnameInput.style.borderColor = '';

      if (errorFeedback) {
        errorFeedback.remove();
      }
    } else {
      if (!errorFeedback) {
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error-feedback');
        errorMessage.textContent = 'Formulario inválido';
        errorMessage.style.color = 'red';
        errorMessage.style.marginTop = '8px';
  
        personForm.appendChild(errorMessage);
      }

      if (!nameInputValue) {
        nameInput.style.borderColor = 'red';
      }
      if (!surnameInputValue) {
        surnameInput.style.borderColor = 'red';
      }
    }
  }
}

