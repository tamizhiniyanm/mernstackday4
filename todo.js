let ListOfData = [];
const input = document.getElementById('input');
const todo = document.getElementById('todo');
const addButton = document.getElementById('button');
addButton.addEventListener('click', () => {
    const task = input.value.trim();
    if (task) {
        ListOfData.push(task);
        input.value = '';
        showList();
    } else {
        alert('Please enter a valid task!');
    }
});


function showList() {
    todo.innerHTML = '';
    ListOfData.forEach((task, i) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <span>
                <a href="#" class="edit-link">Edit</a>
                <a href="#" class="delete-link">Delete</a>
            </span>
        `;
        todo.appendChild(li);


        li.querySelector('.edit-link').addEventListener('click', (e) => {
            e.preventDefault();
            edit(i);
        });
        li.querySelector('.delete-link').addEventListener('click', (e) => {
            e.preventDefault();
            deleteItem(i);
        });
    });
}

function edit(index) {
    const newValue = prompt('Enter the new value:', ListOfData[index]);
    if (newValue) {
        ListOfData[index] = newValue;
        showList();
    }
}

function deleteItem(index) {
    ListOfData.splice(index, 1);
    showList();
}
