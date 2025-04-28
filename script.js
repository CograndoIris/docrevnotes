const outputState = {
    date: `${new Date().toLocaleDateString()}`,
    mpoas: '',
    alos: '',
    contact: '',
    voicemail: '',
    spokeWith: '',
    docsReceived: '',
    docsCreated: '',
    ronOffer: '',
    ronScheduled: '',
    vsipsOffer: '',
    vsipsComplete: '',
    discDoctor: '',
    encounterNotes: '',
    nextSteps: '',
    signature: '',
};


const updateOutput = () => {
    let contactoutput = `empty`;
    if (outputState.contact === 'Contacted: No') {
        contactoutput = `${outputState.date}
${outputState.mpoas}
${outputState.alos}
${outputState.docsCreated}
${outputState.contact}
${outputState.voicemail}
${outputState.nextSteps}
${outputState.signature}
    `.trim();}
    if (outputState.contact === 'Contacted: Yes') {
        contactoutput = `${outputState.date}
${outputState.mpoas}
${outputState.alos}
${outputState.docsCreated}
${outputState.contact}
${outputState.spokeWith}
${outputState.docsReceived}
${outputState.ronOffer}
${outputState.ronScheduled}
${outputState.vsipsOffer}
${outputState.vsipsComplete}
${outputState.discDoctor}
${outputState.encounterNotes}
${outputState.nextSteps}
${outputState.signature}
    `.trim();
    }
    if (outputState.contact === '') {
        contactoutput = `${outputState.date}
${outputState.mpoas}
${outputState.alos}
${outputState.docsCreated}
${outputState.signature}`.trim();
    }
    console.log(contactoutput);
    document.querySelector('#output').textContent = contactoutput;
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


const MPOAevent = document.querySelectorAll('.MPOAcheck');
MPOAevent.forEach((button) => {
    button.addEventListener('click', (event) => {
        let output = event.currentTarget.checked;
        if (output === true) {
            showClass(`${event.currentTarget.value}name`);
        }
        if (output === false) {
            hideClass(`${event.currentTarget.value}name`);
            document.querySelector(`.${event.currentTarget.value}name`).value = '';
        }
        updateOutput();
    });
});

const MPOAtype = document.querySelectorAll('.MPOAname');
MPOAtype.forEach((box) => {
    box.addEventListener('input', (event) => {
        let output = event.currentTarget.value;
        if (document.querySelector('.MPOA3name').value !== '') {
            outputState.mpoas = `MPOAs: 1. ${document.querySelector('.MPOA1name').value}, 2. ${document.querySelector('.MPOA2name').value}, 3. ${document.querySelector('.MPOA3name').value}`;
        }
        if (document.querySelector('.MPOA2name').value !== '' && document.querySelector('.MPOA3name').value === '') {
            outputState.mpoas = `MPOAs: 1. ${document.querySelector('.MPOA1name').value}, 2. ${document.querySelector('.MPOA2name').value}`;
        }
        if (document.querySelector('.MPOA1name').value !== '' && document.querySelector('.MPOA2name').value === '' && document.querySelector('.MPOA3name').value === '') {
            outputState.mpoas = `MPOA: 1. ${document.querySelector('.MPOA1name').value}`;
        }
        if (document.querySelector('.MPOA1name').value === '' && document.querySelector('.MPOA2name').value === '' && document.querySelector('.MPOA3name').value === '') {
            outputState.mpoas = '';
        }
        updateOutput();
    });
});

const ALOSevent = document.querySelectorAll('.alo');
ALOSevent.forEach((box) => {
    box.addEventListener('input', (event) => {
        let output = event.currentTarget.value;
        if (document.querySelector('.alo3').value !== '') {
            outputState.alos = `ALOS: 1. ${document.querySelector('.alo1').value}, 2. ${document.querySelector('.alo2').value}, 3. ${document.querySelector('.alo3').value}`;
        }
        if (document.querySelector('.alo2').value !== '' && document.querySelector('.alo3').value === '') {
            outputState.alos = `ALOS: 1. ${document.querySelector('.alo1').value}, 2. ${document.querySelector('.alo2').value}`;
        }
        if (document.querySelector('.alo1').value !== '' && document.querySelector('.alo2').value === '' && document.querySelector('.alo3').value === '') {
            outputState.alos = `ALOS: 1. ${document.querySelector('.alo1').value}`;
        }
        if (document.querySelector('.alo1').value === '' && document.querySelector('.alo2').value === '' && document.querySelector('.alo3').value === '') {
            outputState.alos = '';
        }
        updateOutput();
    });
});


let docs = {
    ips: '',
    mpoa: '',
    lw: '',
    combined: '',
    polstdnr: ''
}
const docsCreatedEvent = document.querySelectorAll('.docscreatedcheck');
docsCreatedEvent.forEach((button) => {
    button.addEventListener('click', (event) => {
        let output = event.currentTarget.value;
        if (output === 'IPS') {
            docs.ips = 'IPS';
        }
        if (output === 'MPOA' && event.currentTarget.checked === true) {
            docs.mpoa = 'MPOA';
            hideClass('combineddoc')
        }
        if (output === 'MPOA' && event.currentTarget.checked === false) {
            docs.mpoa = '';
            showClass('combineddoc')
        }
        if (output === 'LW' && event.currentTarget.checked === true) { 
            docs.lw = 'LW';
            hideClass('combineddoc')
        }
        if (output === 'LW' && event.currentTarget.checked === false) {
            docs.lw = '';
            showClass('combineddoc')
        }
        if (output === 'Combined MPOA/LW/5W' && event.currentTarget.checked === true) {
            docs.combined = 'Combined MPOA/LW/5W';
            hideClass('mpoadoc');
            hideClass('lwdoc');
        }
        if (output === 'Combined MPOA/LW/5W' && event.currentTarget.checked === false) {
            docs.combined = '';
            showClass('mpoadoc');
            showClass('lwdoc');
        }
        if (output === 'POLST/DNR') {
            docs.polstdnr = 'POLST/DNR';
        }
        outputState.docsCreated = `Docs Created: ${docs.ips} ${docs.mpoa} ${docs.lw}${docs.combined} ${docs.polstdnr}`;
        updateOutput();
    });
});

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

const spokeWithEvent = document.querySelector('.spokewithbox');
spokeWithEvent.addEventListener('input', (event) => {
    let output = event.currentTarget.value;
    outputState.spokeWith = `Spoke with: ${output}`;
    updateOutput();
});

const docsreceivedEvent = document.querySelectorAll('.docsreceivedbutton');
docsreceivedEvent.forEach((button) => {
    button.addEventListener('click', (event) => {
        let output = event.currentTarget.value;
        outputState.docsReceived = `Docs Received: ${output}`;
        if (output === 'No') {
            hideClass('ronoffer-form');
            hideClass('vsipsoffer-form');
        } 
        if (event.currentTarget.value === 'Yes') {
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
            outputState.ronScheduled = 'RON/ROW Scheduled: N/A';
        }
        if (event.currentTarget.value === 'Yes') { 
            showClass('ronscheduled-form');
        }
        updateOutput();
    });
});

const ronscheduledEvent = document.querySelectorAll('.ronscheduledbutton');
ronscheduledEvent.forEach((button) => {
    button.addEventListener('click', (event) => {
        let output = event.currentTarget.value;
        outputState.ronScheduled = `RON/ROW Scheduled: ${output}`;
        updateOutput();
    });
});

const vsipsofferEvent = document.querySelectorAll('.vsipsofferbutton');
vsipsofferEvent.forEach((button) => {
    button.addEventListener('click', (event) => {
        let output = event.currentTarget.value;
        outputState.vsipsOffer = `VSIPS Offered: ${output}`;
        if (output === 'No') {
            hideClass('vsipscomplete-form');
            outputState.vsipsComplete = 'VSIPS Complete: N/A';
        }
        if (event.currentTarget.value === 'Yes') { 
            showClass('vsipscomplete-form');
        }
        if (event.currentTarget.value === 'N/A') { 
            hideClass('vsipscomplete-form');
            outputState.vsipsComplete = 'VSIPS Complete: N/A';
        }
        updateOutput();
    });
});

const vsipscompleteEvent = document.querySelectorAll('.vsipscompletebutton');
vsipscompleteEvent.forEach((button) => {
    button.addEventListener('click', (event) => {
        let output = event.currentTarget.value;
        outputState.vsipsComplete = `VSIPS Complete: ${output}`;
        updateOutput();
    });
});

const discDoctorEvent = document.querySelectorAll('.discussdoctorbutton');
discDoctorEvent.forEach((button) => {
    button.addEventListener('click', (event) => {
        let output = event.currentTarget.value;
        outputState.discDoctor = `Discussed with Doctor: ${output}`;
        updateOutput();
    });
});

const encounterNotesEvent = document.querySelector('.encounternotesbox');
encounterNotesEvent.addEventListener('input', (event) => {
    let output = event.currentTarget.value;
    outputState.encounterNotes = `Encounter Notes: ${output}`;
    updateOutput();
});

const nextStepsEvent = document.querySelector('.nextstepbox');
nextStepsEvent.addEventListener('input', (event) => {
    let output = event.currentTarget.value;
    outputState.nextSteps = `Next Steps: ${output}`;
    updateOutput();
});

const signatureEvent = document.querySelector('.signaturebox');
signatureEvent.addEventListener('input', (event) => {
    let output = event.currentTarget.value;
    outputState.signature = `Signature: ${output}`;
    updateOutput();
});

//const output = "hi there";
//document.querySelector('#output').textContent = output;
//document.querySelector('#output').textContent = contactoutput;