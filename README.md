Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No Node.js or npm required!

### Installation

1. **Download or clone the project**
   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```

2. **That's it!** No installation needed.

### Running the App

#### Option 1: Double-click (Simplest)
Simply double-click `index.html` to open it in your default browser.

#### Option 2: Using a Local Server (Recommended)

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (if installed):**
```bash
npx serve
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

#### Option 3: VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

todo-app/
├── index.html             # Main HTML file
├── README.md              # Readme file
│
├── css/
│   └── styles.css         # All styles and theming
│
├── js/
│   ├── utils.js           # Utility functions
│   ├── components/        # React components
│   │   ├── Header.js
│   │   ├── ProgressBar.js
│   │   ├── TodoInput.js
│   │   ├── Controls.js
│   │   ├── Filters.js
│   │   ├── BulkActions.js
│   │   ├── TodoItem.js
│   │   ├── TodoList.js
│   │   └── Toast.js
│   └── app.js             # Main App component
│
└── assets/
    └── icons/             # icons (inline in code)