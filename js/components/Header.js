function Header({ theme, onToggleTheme }) {
  return React.createElement('div', { className: 'header' },
    React.createElement('div', { className: 'header-content' },
      React.createElement('div', { className: 'logo' }, '✓'),
      React.createElement('div', { className: 'header-text' },
        React.createElement('h1', null, 'Todo'),
        React.createElement('p', null, 'Stay organized, get things done')
      )
    ),
    React.createElement('button', {
      className: 'theme-toggle',
      onClick: onToggleTheme,
      'aria-label': 'Toggle theme'
    }, theme === 'light' ? '🌙' : '☀️')
  );
}