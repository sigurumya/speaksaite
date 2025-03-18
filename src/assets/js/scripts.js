document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name-input');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const messagesContainer = document.getElementById('messages-container');

    const socket = new WebSocket('ws://localhost:3000');
    let messageCount = 0;

    socket.addEventListener('message', function(event) {
        const data = JSON.parse(event.data);
        addMessageToChat(data.name, data.message, data.senderClass, data.time, data.count);
    });

    sendButton.addEventListener('click', function() {
        const nameText = nameInput.value.trim();
        const messageText = messageInput.value.trim();
        if (nameText && messageText) {
            const currentTime = new Date().toLocaleTimeString();
            const messageData = {
                name: nameText,
                message: messageText,
                senderClass: 'user',
                time: currentTime,
                count: ++messageCount
            };
            socket.send(JSON.stringify(messageData));
            messageInput.value = '';
        }
    });

    function addMessageToChat(sender, text, senderClass, time, count) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', senderClass);
        messageElement.innerHTML = `<strong>${sender}:</strong> ${text} <br><small>${time} (${count}番目)</small>`;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
    }
});