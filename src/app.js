import ChatComponent from './components/ChatComponent.js';

document.addEventListener('DOMContentLoaded', () => {
    const appElement = document.getElementById('app');
    const chatComponent = new ChatComponent();
    appElement.appendChild(chatComponent);
});