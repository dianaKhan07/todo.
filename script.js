const todoList = {
    trigger(e) {
        console.log(e)
        const target = e.target
        if (target.classList.contains('addBtn')) {
            this.add()
        } else if (target.classList.contains('active')) {
            target.classList.add('done')
            target.classList.remove('active')
        } else if (target.classList.contains('done')) {
            target.classList.add('active')
            target.classList.remove('done')
        } else if (target.classList.contains('deleteTodo')) {
            target.parentElement.remove()
        } else if (target.classList.contains('saveBtn')) {
            this.save()
        }
    },
    add() {
        let text = document.querySelector('input[type="text"]')
        let todo = document.querySelector('.todo-list')
        todo.insertAdjacentHTML('afterbegin',
            `<div class = 'active todo-item'>
         ${text.value}
        <button class='deleteTodo'></button>
        </div>
        `)
    },
    changeStatus(e) {
        alert(e)
    },
    save() {
        let todo = document.querySelector('.todo-list')
        const arr = Array.from(todo.children)
        const todosArray = arr.map(element => element.outerText)
        localStorage.setItem('todos', JSON.stringify(todosArray))
    },
    init() {
        const todos = localStorage.getItem('todos')
        let todo = document.querySelector('.todo-list');
        if (todos) {
            const convertedTodo = JSON.parse(todos);
            for (let i = 0; i < convertedTodo.length; i++) {
                todo.insertAdjacentHTML('afterbegin', `
                <div class='active todo-item'>
                ${convertedTodo[i]}
                <button class='deleteTodo'></button>
                </div>
                `)
            }
        }
        document.addEventListener('click', this.trigger.bind(this))
    }
}
todoList.init();