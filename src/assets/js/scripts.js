document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const messagesContainer = document.getElementById('messages-container');

    sendButton.addEventListener('click', function() {
        const messageText = messageInput.value.trim();
        if (messageText) {
            addMessageToChat('You', messageText);
            messageInput.value = '';
            // Simulate a response from the bot
            setTimeout(() => {
                addMessageToChat('Bot', 'This is a response to: ' + messageText);
            }, 1000);
        }
    });

    function addMessageToChat(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
    }
});