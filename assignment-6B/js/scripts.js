// Array to hold messages
var messages = [];

// Message type dictionary object
var messageType = {
  out: 'out',
  in: 'in',
  unknown: 'unknown'
};

// Seed data
var data = [
  {
    type: messageType.out,
    user: 'Mike',
    message: 'Hey, you have lunch plans?'
  },
  {
    type: messageType.in,
    user: 'Joe',
    message: 'Hi Mike! No, how about QDoba'
  },
  {
    type: messageType.out,
    user: 'Mike',
    message: 'Ok, let\'s go!'
  }
];

// Message constructor function
function Message(type, user, message) {
  this.type = type;
  this.user = user;
  this.message = message;
}
// 
function createMessageElement(theMessage) {
  // Build message elements
  var messageText = document.createTextNode(theMessage.message);
  var messageEl = document.createElement('div');
  messageEl.appendChild(messageText);

  return messageEl;
}

// Message click handler
function addMessage(event) {
  var user, type, className;
  var messageInputEl = document.getElementById('message-input');
  var messageContainerEl = document.getElementById('message-container');
  
  // Determine message type.
  switch (event.target.id) {
    case 'send-button':
      user = 'Mike';
      type = messageType.out;
      break;
    case 'reply-button':
      user = 'Joe';
      type = messageType.in;
      break;
    default:
      user = 'unknown';
      type = messageType.unknown;
      break;
  }

  // Create new message
  if (messageInputEl.value != '') {
    // Construct the message and add to messages array
    var message = new Message(type, user, messageInputEl.value);
    messages.push(message);

    // Create the element.
    var el = createMessageElement(message);

    // Set the element classname
    if (message.type === messageType.out) {
      el.className = 'out-message';
    }
    else {
      el.className = 'in-message';
    }

    // Add to DOM
    messageContainerEl.appendChild(el);

    // Reset input
    messageInputEl.value = '';
  }
}

function init() { 
  // Wire event handlers
  document.getElementById('send-button').onclick = addMessage;
  document.getElementById('reply-button').onclick = addMessage;
}

init();