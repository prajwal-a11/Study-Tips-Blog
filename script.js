function saveTasks() 
{
const tasks = Array. from(document.querySelectorAll('#taskList li')).map(li =>li.textContent);
localStorage.setItem('tasks',JSON.stringify(tasks));
}
function loadTasks() {
const tasks = JSON.parse(localStorage.getItem('tasks') || "[]");
tasks. forEach(task =>{
const li = document.createElement('li');
li.textContent = task;
document.getElementById('taskList').ap 
pendChild(li);
});
}
function toggleDarkMode() 
{
document.body.classList.toggle('dark');
}
window.onload = loadTasks;
document.getElementById('taskList').ap 
pendChild(li); 
saveTasks();
