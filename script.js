

const showVoiceMail = () => {
    const voiceMail = document.querySelector('#voice-mail');
    voiceMail.classList.style.display = "";
}

const hideVoiceMail = () => {
    const voiceMail = document.querySelector('#voice-mail');
    voiceMail.classList.style.display = "none";
}

const contactedEvent = document.querySelector('#contact');
contactedEvent.addEventListener('click', (event) => {
    const voiceMail = document.querySelector('#voice-mail');
    if (voiceMail.classList.value('contact') === 'No') {
        showVoiceMail();
    } else { 
        hideVoiceMail();
    }
});