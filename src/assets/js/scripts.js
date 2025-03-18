document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name-input');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const messagesContainer = document.getElementById('messages-container');

    function fetchMessages() {
        fetch('chat.php')
            .then(response => response.json())
            .then(data => {
                messagesContainer.innerHTML = '';
                data.forEach(message => {
                    addMessageToChat(message.name, message.message, message.senderClass, message.time, message.count);
                });
            });
    }

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
                count: Date.now()
            };
            fetch('chat.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(messageData)
            }).then(() => {
                messageInput.value = '';
                fetchMessages();
            });
        }
    });

    function addMessageToChat(sender, text, senderClass, time, count) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', senderClass);
        messageElement.innerHTML = `<strong>${sender}:</strong> ${text} <br><small>${time} (${count}番目)</small>`;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    fetchMessages();
    setInterval(fetchMessages, 3000);
});