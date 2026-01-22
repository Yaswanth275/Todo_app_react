function App() {
  const { useState, useEffect, useMemo, useCallback } = React;
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [theme, setTheme] = useState('light');
  const [toast, setToast] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('todos');
    const savedTheme = localStorage.getItem('theme');
    if (saved) setTodos(JSON.parse(saved));
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  const addTodo = useCallback((todo) => {
    setTodos(prev => [todo, ...prev]);
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }, []);

  const deleteTodo = useCallback((id) => {
    const deletedTodo = todos.find(t => t.id === id);
    setTodos(prev => prev.filter(todo => todo.id !== id));
    setToast({
      message: 'Task deleted',
      onUndo: () => {
        setTodos(prev => [...prev, deletedTodo]);
        setToast(null);
      }
    });
  }, [todos]);

  const editTodo = useCallback((id, newText) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  }, []);

  const completeAll = useCallback(() => {
    setTodos(prev => prev.map(todo => ({ ...todo, completed: true })));
  }, []);

  const clearCompleted = useCallback(() => {
    setTodos(prev => prev.filter(todo => !todo.completed));
    setToast({ message: 'Completed tasks cleared' });
  }, []);

  const filteredTodos = useMemo(() => {
    let result = todos;

    if (filter === 'active') {
      result = result.filter(todo => !todo.completed);
    } else if (filter === 'completed') {
      result = result.filter(todo => todo.completed);
    }

    if (searchTerm) {
      result = result.filter(todo =>
        todo.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case 'priority':
          const priorityOrder = { high: 0, medium: 1, low: 2 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        case 'dueDate':
          if (!a.dueDate && !b.dueDate) return 0;
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return new Date(a.dueDate) - new Date(b.dueDate);
        case 'completion':
          return a.completed === b.completed ? 0 : a.completed ? 1 : -1;
        default:
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

    return result;
  }, [todos, filter, searchTerm, sortBy]);

  const counts = useMemo(() => ({
    all: todos.length,
    active: todos.filter(t => !t.completed).length,
    completed: todos.filter(t => t.completed).length
  }), [todos]);

  return React.createElement('div', { className: 'app-container' },
    React.createElement(Header, {
      theme,
      onToggleTheme: () => setTheme(t => t === 'light' ? 'dark' : 'light')
    }),
    React.createElement('div', { className: 'card' },
      React.createElement(TodoInput, { onAdd: addTodo }),
      React.createElement(ProgressBar, {
        total: todos.length,
        completed: counts.completed
      }),
      React.createElement(Controls, {
        searchTerm,
        onSearchChange: setSearchTerm,
        sortBy,
        onSortChange: setSortBy
      }),
      React.createElement(Filters, {
        activeFilter: filter,
        onFilterChange: setFilter,
        counts
      }),
      React.createElement(BulkActions, {
        onCompleteAll: completeAll,
        onClearDone: clearCompleted,
        hasActive: counts.active > 0,
        hasCompleted: counts.completed > 0
      }),
      React.createElement(TodoList, {
        todos: filteredTodos,
        onToggle: toggleTodo,
        onDelete: deleteTodo,
        onEdit: editTodo
      })
    ),
    toast && React.createElement(Toast, {
      message: toast.message,
      onUndo: toast.onUndo,
      onClose: () => setToast(null)
    })
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));