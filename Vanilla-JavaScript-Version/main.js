function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//return string with the random number; String is necessary for use in URL
function getRandomPokemonNumber(min, max) {
	let randomNumber = getRandomInt(min, max);
	
	if (randomNumber < 10) {
		return `00${randomNumber}`
	}
	else if (randomNumber < 100) {
		return `0${randomNumber}`
	}

	return randomNumber.toString();
}

function showWIPMessage(selector, parentSelector) {
	const workInProgressMessage = document.createElement('p');
	workInProgressMessage.className = 'error';
	workInProgressMessage.id = 'workInProgressMessage';
	workInProgressMessage.innerHTML = 'Work in progress';

	const workInProgressMessageContainer = document.createElement('div');
	workInProgressMessageContainer.id = 'workInProgressMessageContainer';
	workInProgressMessageContainer.appendChild(workInProgressMessage);

	const clickableElement = document.querySelector(selector);
	clickableElement.removeAttribute("onclick");
	if (parentSelector) 
		document.querySelector(parentSelector).appendChild(workInProgressMessageContainer);
	else 
		clickableElement.parentElement.appendChild(workInProgressMessageContainer);
}


function hideLoading() {
	const loadingDiv = document.querySelector('#loadingDiv');
	loadingDiv.style.opacity = 0;
	setTimeout(() => { loadingDiv.style.display = 'none' }, 1500);
}
