# Chatbot App

A rule-based chatbot built with React and JavaScript.

The chatbot responds to predefined keywords, performs basic calculations, tells jokes, returns the current date and time, simulates dice rolls and coin flips, and uses string similarity matching to handle user messages that are close to known commands.

## 🚀 Live Demo

https://chat-bot-app-rho.vercel.app/

## 📸 Preview

![Preview](./src/assets/demo.png)

## ✨ Features

* Keyword-based responses
* Greeting detection
* Current date and time responses
* Built-in calculator
* Random dice rolls
* Coin flip simulation
* Random programming jokes
* String similarity matching for typo tolerance
* Asynchronous message responses with simulated delay
* Responsive user interface

## 🛠️ Technologies Used

* React
* JavaScript (ES6+)
* Vite
* CSS

## 🧠 How It Works

The chatbot processes messages in several steps:

1. Converts user input to lowercase.
2. Checks if the input is a mathematical expression.
3. Searches predefined keyword-response pairs.
4. Executes dynamic responses when needed.
5. Uses a custom string similarity algorithm to find the closest matching response.
6. Returns a fallback message when no match is found.

### Example Commands

| User Input | Response                     |
| ---------- | ---------------------------- |
| hello      | Greeting                     |
| react      | Information about React      |
| javascript | Information about JavaScript |
| time       | Current time                 |
| date       | Current date                 |
| joke       | Random programming joke      |
| dice       | Random number between 1–6    |
| coin       | Heads or tails               |
| 5 + 10 * 2 | Calculator result            |

## 📂 Installation

Clone the repository:

```bash
git clone https://github.com/oussama-dalhi/chat-bot-app.git
```

Navigate into the project:

```bash
cd chatbot
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## 🎯 What I Learned

* React component architecture
* State management with hooks
* Building a rule-based chatbot
* Working with asynchronous JavaScript
* String similarity algorithms
* Dynamic function-based responses
* User input processing and validation

## 🔮 Future Improvements

* User-defined custom responses
* Conversation history persistence
* More commands and categories
* Theme switching
* Export chat history
* Multi-language support

## 👨‍💻 Author

Oussama Dalhi

GitHub:
https://github.com/oussama-dalhi

Repository:
https://github.com/oussama-dalhi/chat-bot-app

