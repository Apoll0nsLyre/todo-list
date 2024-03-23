let tasks = [];
let tasksChecked = [];

function saveTasksStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(listTask) {
    tasks.push(listTask);
    saveTasksStorage();
}

function removeTask(task) {
    const taskTitle = task.querySelector('.title').textContent;
    tasks = tasks.filter((task) => task.title !== taskTitle);
    saveTasksStorage();
}

function loadTasks(taskContainer) {
    
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        console.log(tasks);
    }
    for (const task of tasks) {
        // Ajouter le contenu HTML à l'élément
        taskContainer.innerHTML += `
        <div class="task flex ">
            <div class="check my-auto pr-3 ">
                <input type="checkbox" name="checked" id="checked" class="w-4 h-4 my-auto cursor-pointer">
            </div>

            <div class="details w-full text-wrap">
                <div class="top flex">
                    <div class="title text-xl font-normal ">${task.title}</div>
                </div>
                <div class="w-full flex justify-between">
                    <div class="due-date flex font-normal">${task.dueDate}</div>
                    <div class="priority right-0 flex font-normal">${task.priority}</div>
                </div>
            </div>
        </div>
        `;
        
    }
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
    saveTasksStorage();
};

export { saveTasksStorage, loadTasks, tasks, addTask, tasksChecked, removeTask};