function ProgressBar({ total, completed }) {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return React.createElement('div', { className: 'progress-section' },
    React.createElement('div', { className: 'progress-header' },
      React.createElement('span', { className: 'progress-label' }, 'Progress'),
      React.createElement('span', { className: 'progress-text' },
        `${completed} of ${total} completed (${percentage}%)`
      )
    ),
    React.createElement('div', { className: 'progress-bar-container' },
      React.createElement('div', {
        className: 'progress-bar-fill',
        style: { width: `${percentage}%` }
      })
    )
  );
}