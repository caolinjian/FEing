var Todos = React.createClass({
    getInitialState: function() {
        return {
            name: "todos",
            todos: [
                {
                    completed: false,
                    title: 'finish exercise'
                }, {
                    completed: false,
                    title: 'lean jsx'
                }, {
                    completed: true,
                    title: 'lean react'
                }
            ]
        };
    },
    newTodo: function(e) {
        this.state.todos[0].title = e.target.value;
        this.setState({'todos': this.state.todos})
    },
    render: function() {
        var self = this;
        var TodoItem = function(it, key) {
            var dsa = function() {
                self.state.todos[key].completed = !self.state.todos[key].completed
                self.setState({'todos': self.state.todos})
            };
            return <li className={it.completed
                ? 'completed'
                : ''} key={key}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={it.completed} onChange={dsa}/>
                    <label>{it.title}</label>
                    <button className="destroy"></button>
                </div>
                <input className="edit" defaultValue={it.title}/>
            </li>
        }
        var lefted = this.state.todos.reduce(function(acc, todo) {
            return todo.completed
                ? acc
                : acc + 1;
        }, 0);
        return <div>
            <header id="header">
                <h1>{this.state.name + this.props.name}</h1>
                <input id="new-todo" onChange={this.newTodo} placeholder="What needs to be done?" autofocus/>
            </header>
            <section id="main">
                <input id="toggle-all" type="checkbox"/>
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul id="todo-list">
                    {this.state.todos.map(TodoItem)}
                </ul>
            </section>
            <footer id="footer">
                <span id="todo-count">
                    <strong>
                        {lefted}
                    </strong>
                    <span></span>
                    <span>
                        items
                    </span>
                    <span>
                        left
                    </span>
                </span>
                <ul id="filters">
                    <li>
                        <a href="#/" className="selected">
                            All
                        </a>
                    </li>
                    <li>
                        <a href="#/active" className="">
                            Active
                        </a>
                    </li>
                    <li>
                        <a href="#/completed" className="">
                            Completed
                        </a>
                    </li>
                </ul>
                <button id="clear-completed">
                    Clear completed
                </button>
            </footer>
        </div>
    }
});
ReactDOM.render(
    <Todos name="World"/>, document.getElementById('todoapp'));
