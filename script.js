const gridElement = document.querySelector('#grid');
const buttonElement = document.querySelector('#button');

buttonElement.addEventListener('click', function(){

    gridElement.innerHTML = '';
    
    for(i = 1; i <= 100; i++){
        const newCell = document.createElement('div');
        newCell.classList.add('cell');
        newCell.innerHTML = i;
        gridElement.append(newCell);
    }
})




