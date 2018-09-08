function showWIPMessage() {
	const workInProgressMessage = document.createElement('p');
	workInProgressMessage.className = 'error';
	workInProgressMessage.id = 'workInProgressMessage';
	workInProgressMessage.innerHTML = 'Work in progress';

	const workInProgressMessageContainer = document.createElement('div');
	workInProgressMessageContainer.id = 'workInProgressMessageContainer';
	workInProgressMessageContainer.appendChild(workInProgressMessage);

	const clickableText = document.querySelector('#startClickableText');
	clickableText.parentElement.appendChild(workInProgressMessageContainer);
	clickableText.removeAttribute("onclick");

}