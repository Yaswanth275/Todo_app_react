function Filters({ activeFilter, onFilterChange, counts }) {
  return React.createElement('div', { className: 'filters' },
    ['all', 'active', 'completed'].map(filter =>
      React.createElement('button', {
        key: filter,
        className: `filter-btn ${activeFilter === filter ? 'active' : ''}`,
        onClick: () => onFilterChange(filter)
      },
        filter.charAt(0).toUpperCase() + filter.slice(1),
        React.createElement('span', { className: 'filter-count' }, `(${counts[filter]})`)
      )
    )
  );
}