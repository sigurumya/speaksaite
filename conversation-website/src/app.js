// This file is the entry point of the application. It initializes the chat component and sets up necessary event listeners.

import ChatComponent from './components/ChatComponent.js';

document.addEventListener('DOMContentLoaded', () => {
    const chat = new ChatComponent();
    chat.init();
});