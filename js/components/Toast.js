function Toast({ message, onUndo, onClose }) {
  const { useEffect } = React;
  
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return React.createElement('div', { className: 'toast' },
    React.createElement('span', null, message),
    onUndo && React.createElement('button', {
      className: 'toast-btn',
      onClick: onUndo
    }, 'Undo')
  );
}