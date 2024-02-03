let tasks = [];
let tasksChecked = [];

function saveTasksStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(listTask) {
    tasks.push(listTask);
    saveTasksStorage();
}

const task= document.querySelectorAll('.task');
task.forEach(task => {
    if ("checked" in task.classList) {
        tasksChecked.push(task);
    }
    console.log(tasksChecked);
    saveTasksStorage();
}
);

function loadTasks(taskContainer) {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        for (const task of tasksChecked) {
            if (task in tasks) {
                tasks= tasks.filter(task => task !== task);
            }
        }
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
                    <div class="title text-xl font-medium ">${task.title}</div>
                </div>
                <div class="w-full flex justify-between">
                    <div class="due-date flex">${task.dueDate}</div>
                    <div class="priority right-0 flex ">${task.priority}</div>
                </div>
            </div>
        </div>
        `;
    // Add the event listener to the checkbox
    // make a delay when the task is checked to get smooth animation

    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
    task.querySelector('#checked').addEventListener('change', () => {
        task.classList.toggle('checked');
        setTimeout(() => {
            task.remove();
        }, 500);
        });
    });
    tasksChecked.forEach(task => {
        task.remove();
    });
    saveTasksStorage();

    }
};

export { saveTasksStorage, loadTasks, tasks, addTask};