const outputState = {
    contact: '',
    voicemail: '',
    docsReceived: '',
    ronOffer: '',
};


const updateOutput = () => {
    const outputText = `${outputState.contact}
${outputState.voicemail}
${outputState.docsReceived}
${outputState.ronOffer}`.trim();
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
            hideClass('docsreceived-form');
            hideClass('spokewith-form');
            hideClass('discussdoctor-form');
            hideClass('additionalnotes-form');
        } 
        if (event.currentTarget.value === 'Yes') { 
            hideClass('voicemail-form');
            showClass('docsreceived-form');
            showClass('spokewith-form');
            showClass('discussdoctor-form');
            showClass('additionalnotes-form');
        }
        updateOutput();
    });
});

const voicemailEvent = document.querySelectorAll('.voicemailbutton');
voicemailEvent.forEach((button) => {
    button.addEventListener('click', (event) => {
        let output = event.currentTarget.value;
        outputState.voicemail = `Voicemail Left: ${output}`;
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
            hideClass('docscreated-form');
            hideClass('ronoffer-form');
            hideClass('vsipsoffer-form');
        } 
        if (event.currentTarget.value === 'Yes') { 
            showClass('docscreated-form');
            showClass('ronoffer-form');
            showClass('vsipsoffer-form');
        }
        updateOutput();
    });
});

const ronofferEvent = document.querySelectorAll('.ronofferbutton');
ronofferEvent.forEach((button) => {
    button.addEventListener('click', (event) => {
        let output = event.currentTarget.value;
        outputState.ronOffer = `RON/ROW Offered: ${output}`;
        if (output === 'No') {
            hideClass('ronscheduled-form');
        }
        if (event.currentTarget.value === 'Yes') { 
            showClass('ronscheduled-form');
        }
        updateOutput();
    });
});

const vsipsofferEvent = document.querySelectorAll('.vsipsofferbutton');
vsipsofferEvent.forEach((button) => {
    button.addEventListener('click', (event) => {
        let output = event.currentTarget.value;
        outputState.vsipOffer = `VSIPS offered: ${output}`;
        if (output === 'No') {
            hideClass('vsipscomplete-form');
        }
        if (event.currentTarget.value === 'Yes') { 
            showClass('vsipscomplete-form');
        }
        updateOutput();
    });
});

const vsipscompleteEvent = document.querySelectorAll('.vsipscompletebutton');
vsipscompleteEvent.forEach((button) => {
    button.addEventListener('click', (event) => {
        let output = event.currentTarget.value;
        outputState.vsipComplete = `VSIPS Complete: ${output}`;
        updateOutput();
    });
});

//const output = "hi there";
//document.querySelector('#output').textContent = output;
//document.querySelector('#output').textContent = contactoutput;