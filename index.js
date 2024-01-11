fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(todos)

function todos(arr) {
    const itemBox = document.querySelector('.item-box')
    arr.forEach(todo => {
        const item = document.createElement('div')
        const itemCheckbox = document.createElement('div')
        const label = document.createElement('label')
        const input = document.createElement('input')
        const customCheckbox = document.createElement('div')
        const taskInfo = document.createElement('div')
        const taskName = document.createElement('h2')
        const paragraph = document.createElement('p')
        const today = document.createElement('span')

        item.classList.add('item')
        itemCheckbox.classList.add('item-checkbox')

        input.type = 'checkbox'
        if (todo.completed) {
            input.checked = true
        }

        customCheckbox.classList.add('custom-checkbox')
        taskInfo.classList.add('task-info')
        taskName.classList.add('task-name')

        taskName.innerHTML = todo.title

        paragraph.classList.add('paragraph')
        paragraph.innerHTML = todo.completed ? 'Completed' : 'Not completed'

        today.classList.add('today')
        today.innerHTML = 'Today'

        itemBox.append(item)
        item.append(itemCheckbox, taskInfo)
        itemCheckbox.append(label)
        label.append(input, customCheckbox)

        taskInfo.append(taskName, paragraph, today)
    })
}

