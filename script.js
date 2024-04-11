const queue = [];
const queueContainer = document.getElementById('queueContainer');

function enqueue() {
    const inputValue = document.getElementById('queueInput').value;
    const colorValue = document.getElementById('colorPicker').value;

    if (inputValue.trim() !== '') {
        queue.push({ value: inputValue, color: colorValue });
        renderQueue();
        document.getElementById('queueInput').value = ''; 
    }
}

function renderQueue() {
    queueContainer.innerHTML = ''; 

    queue.forEach((item, index) => {
        const queueItem = document.createElement('div');
        queueItem.classList.add('queue-item');
        queueItem.style.backgroundColor = item.color;
        queueItem.textContent = `${index + 1}. ${item.value}`;
        queueContainer.appendChild(queueItem);
    });
}
