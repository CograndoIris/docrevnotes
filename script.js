const outputState = {
    contact: '',
    docsReceived: ''
};


const updateOutput = () => {
    const outputText = `${outputState.contact}
${outputState.docsReceived}`.trim();
    document.querySelector('#output').textContent = outputText;
}
const hideClass = (inclass) => {
    const elements = document.querySelectorAll(`.${inclass}`);
    elements.forEach((element) => {
        element.classList.add("hidden");
    });
}
const showClass = (inclass) => {
    const elements = document.querySelectorAll(`.${inclass}`);
    elements.forEach((element) => {
        element.classList.remove("hidden");
    });
}

const contactedEvent = document.querySelectorAll('.contactbutton');
contactedEvent.forEach((button) => {
    button.addEventListener('click', (event) => {
        let output = event.currentTarget.value;
        outputState.contact = `Contacted: ${output}`;
        if (output === 'No') {
            showClass('voicemail-form');
        } 
        if (event.currentTarget.value === 'Yes') { 
            hideClass('voicemail-form');
        }
        updateOutput();
    });
});

//Need Logic for Spoke With

const docsreceivedEvent = document.querySelectorAll('.docsreceivedbutton');
docsreceivedEvent.forEach((button) => {
    button.addEventListener('click', (event) => {
        let output = event.currentTarget.value;
        outputState.docsReceived = `Docs Received: ${output}`;
        if (output === 'No') {
            showClass('docscreated-form');
        } 
        if (event.currentTarget.value === 'Yes') { 
            hideClass('docscreated-form');
        }
        updateOutput();
    });
});

//const output = "hi there";
//document.querySelector('#output').textContent = output;
//document.querySelector('#output').textContent = contactoutput;