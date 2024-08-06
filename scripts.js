// Blog Section
const blogList = document.getElementById('blog-list');
const blogs = [
    { title: "My first post", url: "https://note.com/yourblog1" },
    { title: "Another post", url: "https://note.com/yourblog2" }
];

blogs.forEach(blog => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = blog.url;
    a.textContent = blog.title;
    li.appendChild(a);
    blogList.appendChild(li);
});

// TO DO List Section
function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const taskText = newTaskInput.value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });
    li.appendChild(deleteBtn);

    document.getElementById('todo-list').appendChild(li);
    newTaskInput.value = '';
}

// Mind Map Section (例：MindElixirライブラリを使用)
const mindmapContainer = document.getElementById('mindmap-container');
const mindmap = new MindElixir({
    el: mindmapContainer,
    direction: MindElixir.LEFT,
    data: MindElixir.new('new topic')
});
mindmap.init();
