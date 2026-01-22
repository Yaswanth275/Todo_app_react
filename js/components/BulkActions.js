function BulkActions({ onCompleteAll, onClearDone, hasActive, hasCompleted }) {
  return React.createElement('div', { className: 'bulk-actions' },
    hasActive && React.createElement('button', {
      className: 'bulk-btn',
      onClick: onCompleteAll
    }, '✓ Complete All'),
    hasCompleted && React.createElement('button', {
      className: 'bulk-btn',
      onClick: onClearDone
    }, '🗑 Clear Done')
  );
}