import { loadTasks, addTask, tasksChecked, removeTask } from "./localStorage.js";

const sideNav = document.querySelector('.Side');
const taskContainer = document.querySelector('.task-container');
const modalTriggers = document.querySelectorAll('.modal-trigger');
const formContainer = document.querySelector('.form-container');
const form = document.querySelector('.form');
const modalTask = document.querySelector('.modal-task');
const modalFolder = document.querySelector('.modal-folder');

const menuButton = document.querySelector('#menu-button');
const sideButtons = document.querySelectorAll('.side-button');
const addFolderButton = document.querySelector('.add-folder');
const addTaskButton = document.querySelector('.add-task');

const taskTitle = document.querySelector('#title');
const dueDate = document.querySelector('#due-date');
const priority = document.querySelector('#priority');
const folder = document.querySelector('#folder');
const tasks = document.querySelectorAll('.task');
let selectModal = 0;

// Add the event listener to side buttons
sideButtons.forEach(button => {
    button.addEventListener('click', () => {
        sideButtons.forEach(button => {
            button.classList.remove('active');
        }
        );
        button.classList.add('active');
    }
    );
});

// Add the event listener to the menu button
menuButton.addEventListener('click', () => {
    sideNav.classList.toggle('active');
}
);

// Add the event listener to the add folder button
addFolderButton.addEventListener('click', () => {
    selectModal = modalFolder;
    console.log(selectModal);
}
);

// Add the event listener to the add task button
addTaskButton.addEventListener('click', () => {
    selectModal = modalTask;
    console.log(selectModal);
}
);

// Add the event listener to the modal triggers
modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        formContainer.classList.toggle('active');
        selectModal.classList.toggle('active');
    });
});


// Make function to delete task that had been checked

formContainer.addEventListener('submit', (e) => {
    e.preventDefault();
    if (taskTitle.value === '') {
    }else{
        const listTask = {
            title: taskTitle.value,
            dueDate: dueDate.value,
            priority: priority.value,
            folder: folder.value
        };
    taskContainer.innerHTML += `
    <div class="task flex ">
        <div class="check my-auto pr-3 ">
            <input type="checkbox" name="checked" id="checked" class="w-4 h-4 my-auto cursor-pointer">
        </div>

        <div class="details w-full text-wrap">
            <div class="top flex">
                <div class="title text-xl font-medium ">${taskTitle.value}</div>
            </div>
            <div class="w-full flex justify-between">
                <div class="due-date flex">${dueDate.value}</div>
                <div class="priority right-0 flex ">${priority.value}</div>
            </div>
        </div>
    </div>
    `;
    formContainer.classList.toggle('active');
    const task= document.querySelectorAll('.task');
    task.forEach(task => {
        task.addEventListener('change', () => {
            task.classList.toggle('checked');
            setTimeout(() => {
                task.remove();
            }, 500);
            removeTask(task);
        });
    }
    );
    addTask(listTask);
    }
    form.reset();
});



loadTasks(taskContainer);