# Digital Timer App

A sleek, functional **Digital Timer** built with **React** that allows users to set a custom countdown, start/pause the timer, and reset it back to the initial state. This project focuses on managing complex component states and handling JavaScript intervals efficiently.

## 🚀 Features

* **Dynamic Countdown:** Accurately tracks remaining time in `MM:SS` format.
* **Stateful Controls:** Toggle between **Start** and **Pause** with dynamic icon and text updates.
* **Custom Timer Limit:** Users can increment or decrement the timer limit (e.g., from 25 minutes to 30 minutes) before starting.
* **Smart Locking:** The "Set Timer Limit" buttons are automatically disabled once the timer has started or is in a paused state to prevent logic conflicts.
* **Reset Functionality:** Instantly stops the timer and restores the default settings.
* **Responsive UI:** Clean, modern design with a circular progress display.

## 🛠️ Tech Stack

* **Frontend:** React.js
* **State Management:** Component State (Class-based)
* **Styling:** CSS3 (Flexbox for layout, Background images for the timer ring)
* **Icons:** Provided by CCBP Assets

## 📸 Preview



## 💡 What I Learned

While building this project, I strengthened my understanding of:
1.  **`setInterval` & `clearInterval`:** Managing time-based side effects within the React lifecycle.
2.  **Conditional Rendering:** Changing button icons and text labels based on the `isTimerRunning` state.
3.  **String Formatting:** Using logic to ensure minutes and seconds always display two digits (e.g., `09:05` instead of `9:5`).
4.  **Component Architecture:** Organizing logic and UI into a clean, maintainable structure.

## 🏁 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/digital-timer-app.git
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the app:**
    ```bash
    npm start
    ```

<img width="807" height="625" alt="image" src="https://github.com/user-attachments/assets/0d05df29-615b-41f3-b1e0-4ad7b27b56d8" />


This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
