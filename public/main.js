
/**
 * @type {SocketIO}
 */
let socket = io();

document.addEventListener('keydown', (ev) => {
    if(ev.keyCode === 13){
        sendMessage();
    }
});


const sendMessage = () => {
    const input = document.getElementById('input')
    const msg = input.value;
    const fullmessage = {message: msg};
    addMessage(fullmessage);

    socket.emit('message', msg);
    input.value = "";
}:

socket.on('message', (msg) => {
    console.log(msg);
    addMessage(msg);
});

const addMessage = (msg) => {
    const msgs = document.getElementById('messages');
   
    const newMessage = document.createElement('div');
    
    newMessage.setAttribute('class','message');
    newMessage.innerHTML = msg.message;
    msgs.appendChild(newMessage);
    
}

