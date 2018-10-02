let firstRadio;
let secondRadio;
let thirdRadio;
let commentbox;
let storage;
let toastDismissed;
let clearToast;

let messageObject = {
    VALUES_NOT_FILLED: 'FILL THE VALUES',
    CHOOSE_ONE_TYPE: 'PLEASE CHOOSE ONE OF THE TYPE',
    SUCCESSFULL_ENTRY: 'SUCCESSFULL'
}

window.addEventListener('load', () => {
    firstRadio = document.getElementById('radiobox1');
    secondRadio = document.getElementById('radiobox2');
    thirdRadio = document.getElementById('radiobox3');
    commentbox = document.getElementById('comments');
    toast = document.querySelector('.toast');
    toastMessage = document.querySelector('#message');
    toastDismissed = true;
    storage = storageFactory();
    storage.init();
})

function dismissToast() {
    if (toastDismissed) {
        toggleDissmiss = false;
        clearToast = window.setTimeout(() => {
            toast.style.transitionDelay = '1s';
            toast.style.visibility = 'hidden';
            toggleDissmiss = true;
        },2000)
    }
}

function processToast(message) {
    console.log('processing toast');
    if (toastDismissed) {
        toastMessage.textContent = message;
        toast.style.transitionDelay = '0.5s';
        toast.style.visibility = 'visible';
        dismissToast();
    }
}

/* include any js files here */
function addToTheList() {
    if ((firstRadio.checked || secondRadio.checked || thirdRadio.checked) && commentbox.value !== '' && commentbox.value !== null) {
        if (firstRadio.checked) {
            storage.storeData(firstRadio.value, commentbox.value);
        }
        else if (secondRadio.checked) {
            storage.storeData(secondRadio.value, commentbox.value);
        }
        else if (thirdRadio.checked) {
            storage.storeData(thirdRadio.value, commentbox.value);
        }
        processToast(messageObject.SUCCESSFULL_ENTRY);
    } else {
        processToast(messageObject.VALUES_NOT_FILLED);
    }
}