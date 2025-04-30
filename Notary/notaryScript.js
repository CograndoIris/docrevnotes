const outputState = {
    date: `${new Date().toLocaleDateString()}`,
    rontype: '',
    docs: '',
    email: '',
    time: '',
    notes: '',
    signature: '',
};

const updateOutput = () => {
    let contactoutput = `${outputState.date}
${outputState.rontype}
${outputState.docs}
${outputState.email}
${outputState.time}
${outputState.notes}
${outputState.signature}`.trim().replace(/  +/g, ' ');
document.querySelector('#output').textContent = contactoutput;
}

const appointmentTypeEvent = document.querySelectorAll(".rontypecheck")
appointmentTypeEvent.forEach((element) => {
    element.addEventListener("change", (event) => {
        outputState.rontype = `Appointment Type: ${event.currentTarget.value}`;
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
const documentTypeEvent = document.querySelectorAll(".docsneededcheck")
documentTypeEvent.forEach((button) => {
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
        outputState.docs = `Docs Needed: ${docs.ips} ${docs.mpoa} ${docs.lw}${docs.combined} ${docs.polstdnr}`;
        updateOutput();
    });
});

const emailEvent = document.querySelector(".emailinput")
emailEvent.addEventListener("change", (event) => {
    outputState.email = `Email: ${event.currentTarget.value}`;
    updateOutput();
});

const timeEvent = document.querySelector(".date");
timeEvent.addEventListener("change", (event) => {
    const inputValue = event.currentTarget.value; // Get the raw value from the input
    const date = new Date(inputValue); // Convert it to a Date object

    // Format the date and time
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format, with 12 instead of 0

    const formattedTime = `${hours}:${minutes} ${ampm}`;

    // Update the outputState
    outputState.time = `Date/Time: ${formattedDate} at ${formattedTime}`;
    updateOutput();
});

const notesEvent = document.querySelector(".formattingnotesbox")
notesEvent.addEventListener("change", (event) => {
    outputState.notes = `Formatting Notes: ${event.currentTarget.value}`;
    updateOutput();
});

const signatureEvent = document.querySelector(".signaturebox")
signatureEvent.addEventListener("change", (event) => {
    outputState.signature = `${event.currentTarget.value}`;
    updateOutput();
});