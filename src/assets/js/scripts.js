document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name-input');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const messagesContainer = document.getElementById('messages-container');

    sendButton.addEventListener('click', function() {
        const nameText = nameInput.value.trim();
        const messageText = messageInput.value.trim();
        if (nameText && messageText) {
            addMessageToChat(nameText, messageText, 'user');
            messageInput.value = '';
            // Simulate a response from the bot
            setTimeout(() => {
                addMessageToChat('Bot', 'これは ' + nameText + ' さんへの応答です: ' + messageText, 'bot');
            }, 1000);
        }
    });

    function addMessageToChat(sender, text, senderClass) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', senderClass);
        messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
    }
});