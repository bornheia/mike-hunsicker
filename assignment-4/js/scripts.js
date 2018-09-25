var user = 'Mike';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest Atom reviews.'
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;
