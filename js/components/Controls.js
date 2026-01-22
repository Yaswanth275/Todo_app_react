function Controls({ searchTerm, onSearchChange, sortBy, onSortChange }) {
  return React.createElement('div', { className: 'controls' },
    React.createElement('div', { className: 'search-wrapper' },
      React.createElement('span', { className: 'search-icon' }, '🔍'),
      React.createElement('input', {
        type: 'text',
        className: 'search-input',
        placeholder: 'Search todos...',
        value: searchTerm,
        onChange: (e) => onSearchChange(e.target.value)
      })
    ),
    React.createElement('div', { className: 'sort-wrapper' },
      React.createElement('select', {
        value: sortBy,
        onChange: (e) => onSortChange(e.target.value)
      },
        React.createElement('option', { value: 'date' }, 'Date Created'),
        React.createElement('option', { value: 'priority' }, 'Priority'),
        React.createElement('option', { value: 'dueDate' }, 'Due Date'),
        React.createElement('option', { value: 'completion' }, 'Completion')
      )
    )
  );
}