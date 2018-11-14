// Global variables
var titleTip = 'Character limit: ';
var titleMax = 'Max limit reached!';
var showTooltip = false;

// Utility functions
function get(element) {
  return document.getElementById(element);
}

// Event handler functions
function showPosition (event) {
  var screenX = get('screenX'),
      screenY = get('screenY'),
      pageX = get('pageX'),
      pageY = get('pageY'),
      clientX = get('clientX'),
      clientY = get('clientY'),
      tooltip = get('tooltip');

  screenX.textContent = event.screenX;
  screenY.textContent = event.screenY;
  pageX.textContent = event.pageX;
  pageY.textContent = event.pageY;
  clientX.textContent = event.clientX;
  clientY.textContent = event.clientY;

  if (showTooltip) {
    tooltip.style.left = event.clientX + 10 + 'px';
    tooltip.style.top = event.clientY - 20 + 'px';
  }
}

function showModal (event) {
  var modal = get('modal-dialog');
  var backdrop = get('modal-backdrop');

  modal.classList.add('visible');
  backdrop.classList.add('visible');
}

function closeModal (event) {
  var title = get('edit-title-text');
  var text = get('edit-content-text');
  var modal = get('modal-dialog');
  var backdrop = get('modal-backdrop');

  // Clear text
  title.value = '';
  text.value = '';

  // Hide modal
  modal.classList.remove('visible');
  backdrop.classList.remove('visible');
}

function saveContent (event) {
  var title = get('edit-title-text');
  var text = get('edit-content-text');
  var content = get('display-content');

  // Create content elements
  var newTitle = document.createElement('h2');
  var newTitleText = document.createTextNode(title.value);
  var newContent = document.createElement('p');
  var newContentText = document.createTextNode(text.value);

  // Add elements
  newTitle.appendChild(newTitleText);
  newContent.appendChild(newContentText);
  content.appendChild(newTitle);
  content.appendChild(newContent);

  closeModal();
}

function showEditTitleMessage (event, limit) {
  var message = get('edit-title-message');
  message.textContent = titleTip + limit;
}

function countTitleChars (event, limit) {
  var title = get('edit-title-text');
  var message = get('edit-title-message');

  if (title.value.length >= limit) {
    title.value = title.value.slice(0, limit-1);
    message.textContent = titleMax;
  }
  else {
    message.textContent = titleTip + limit;
  }
}

// Wire up event handlers
window.addEventListener('load', function () {
  // Set up
  var newButton = get('new-button');
  var cancelButton = get('cancel-button');
  var saveButton = get('save-button');
  var editTitle = get('edit-title-text');
  var tooltipChk = get('show-tooltip');

  newButton.addEventListener('click', showModal);
  cancelButton.addEventListener('click', closeModal);
  saveButton.addEventListener('click', saveContent);

  editTitle.addEventListener('focus', function (event) {
    showEditTitleMessage(event, 20);
  });

  editTitle.addEventListener('keypress', function (event) {
    countTitleChars(event, 20);
  });

  tooltipChk.addEventListener('change', function () {
    var tooltip = get('tooltip');

    if (this.checked) {
      showTooltip = true;
      tooltip.classList.add('visible');
    }
    else {
      showTooltip = false;
      tooltip.classList.remove('visible');
    }
  });
});

window.addEventListener('mousemove', function (event) {
  showPosition(event);
});
