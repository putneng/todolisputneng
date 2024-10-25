document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Silakan masukkan tugas!');
        return;
    }

    const taskList = document.getElementById('taskList');

    // Buat elemen list baru
    const li = document.createElement('li');
    li.textContent = taskText;

    // Tombol hapus
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Hapus';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    // Tombol selesai
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Selesai';
    completeBtn.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Kosongkan input setelah menambah tugas
    taskInput.value = '';
});
