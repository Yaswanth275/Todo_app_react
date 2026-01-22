function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const { useState } = React;
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return React.createElement('div', {
    className: `todo-item ${todo.completed ? 'completed' : ''} ${isEditing ? 'editing' : ''}`
  },
    React.createElement('div', {
      className: `checkbox ${todo.completed ? 'checked' : ''}`,
      onClick: () => onToggle(todo.id)
    }),
    React.createElement('div', { className: 'todo-content' },
      isEditing
        ? React.createElement('input', {
            type: 'text',
            className: 'edit-input',
            value: editText,
            onChange: (e) => setEditText(e.target.value),
            onKeyDown: handleKeyPress,
            onBlur: handleSave,
            autoFocus: true
          })
        : React.createElement('div', { className: 'todo-text' }, todo.text),
      React.createElement('div', { className: 'todo-meta' },
        React.createElement('span', {
          className: `priority-badge ${todo.priority}`
        }, todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)),
        todo.dueDate && React.createElement('span', {
          className: `due-date ${isOverdue(todo.dueDate) && !todo.completed ? 'overdue' : ''}`
        },
          '📅 ',
          formatDate(todo.dueDate),
          isOverdue(todo.dueDate) && !todo.completed ? ' (Overdue)' : ''
        )
      )
    ),
    React.createElement('div', { className: 'todo-actions' },
      React.createElement('button', {
        className: 'icon-btn',
        onClick: () => setIsEditing(true),
        'aria-label': 'Edit'
      }, '✏️'),
      React.createElement('button', {
        className: 'icon-btn delete',
        onClick: () => onDelete(todo.id),
        'aria-label': 'Delete'
      }, '🗑')
    )
  );
}