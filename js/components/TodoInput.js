function TodoInput({ onAdd }) {
  const { useState } = React;
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = () => {
    if (!text.trim()) return;

    onAdd({
      id: generateId(),
      text: text.trim(),
      completed: false,
      priority,
      dueDate,
      createdAt: new Date().toISOString()
    });

    setText('');
    setPriority('medium');
    setDueDate('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return React.createElement('div', { className: 'input-section' },
    React.createElement('div', { className: 'input-wrapper', style: { flex: 2 } },
      React.createElement('input', {
        type: 'text',
        placeholder: 'Add a new task...',
        value: text,
        onChange: (e) => setText(e.target.value),
        onKeyPress: handleKeyPress
      })
    ),
    React.createElement('div', { className: 'priority-selector' },
      ['low', 'medium', 'high'].map(p =>
        React.createElement('button', {
          key: p,
          className: `priority-btn ${p} ${priority === p ? 'active' : ''}`,
          onClick: () => setPriority(p)
        }, p.charAt(0).toUpperCase() + p.slice(1))
      )
    ),
    React.createElement('input', {
      type: 'date',
      value: dueDate,
      onChange: (e) => setDueDate(e.target.value),
      style: { width: '150px' }
    }),
    React.createElement('button', {
      className: 'btn btn-primary',
      onClick: handleSubmit
    }, '+ Add')
  );
}