

## Todo App with Local Storage

This is a simple and responsive **React-based Todo App** that allows users to create, view, and delete todos. The application features seamless local storage integration to persist todos even after a page refresh.

### Features:
- **Add Todos:** Quickly add tasks by typing in the input field and pressing "Submit" or the "Enter" key.
- **Delete Todos:** Remove tasks with a single click.
- **Persistent Storage:** Todos are saved in the browser's `localStorage` and automatically loaded when the app is reopened.
- **Responsive Design:** Optimized for both mobile and desktop views using Tailwind CSS.
- **Unique Identifiers:** Each todo item is assigned a unique ID using the `nanoid` library to ensure efficient management.

### Technologies Used:
- **React.js** for building the UI components.
- **Tailwind CSS** for styling.
- **nanoid** for generating unique IDs.
- **localStorage** for persisting data.

### How It Works:
1. **Input Field:** Users can type their tasks in the input field and submit using the "Submit" button or "Enter" key.
2. **Display Todos:** Tasks are displayed in a list with a delete button for each item.
3. **Local Storage Integration:** All todos are saved to `localStorage` automatically whenever they are added or removed, ensuring they persist across sessions.

### Setup Instructions:
1. Clone the repository:
   ```bash
   git clone https://github.com/iamaswinth/React-Todo
   ```
2. Navigate to the project folder:
   ```bash
   cd React-Todo
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   npm start
   ```
5. Open the app in your browser:
   ```
   http://localhost:5173/
   ```

### Preview:
A lightweight, easy-to-use Todo app that helps you stay organized and productive. 🎯

Feel free to fork the repository and make improvements! Contributions are always welcome. 😊

