function TodoList({ todos, onToggle, onDelete, onEdit }) {
  if (todos.length === 0) {
    return React.createElement('div', { className: 'empty-state' },
      React.createElement('div', { className: 'empty-icon' }, '📋'),
      React.createElement('h3', null, 'No tasks yet'),
      React.createElement('p', null, 'Add your first task to get started')
    );
  }

  return React.createElement('div', { className: 'todo-list' },
    todos.map(todo =>
      React.createElement(TodoItem, {
        key: todo.id,
        todo,
        onToggle,
        onDelete,
        onEdit
      })
    )
  );
}