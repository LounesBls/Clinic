const mapBG = document.querySelector(".map");
const closeBTN = document.querySelector('.X-btn');
const filterBtn = document.querySelector('.fliterBTN');
const collapse = document.querySelector('.collBtn');

const radioHospital = document.querySelector('#radioHospital')
const radioClinic = document.querySelector('#radioClinic')
const radioEmergency = document.querySelector('#radioEmergency')

// Close Pop-Up
closeBTN.addEventListener('click', ()=>{
    filterBtn.classList.toggle('collapsed');
    filterBtn.setAttribute( 'aria-expanded', 'false');
    collapse.classList.toggle('show');
})

// Set and Remove 'checked' Attribute.
radioHospital.addEventListener('click', ()=>{
    radioHospital.toggleAttribute("checked");
    radioClinic.removeAttribute('checked');
    radioEmergency.removeAttribute('checked');

    // Check if radioHospital Contains checked Attribute To change Map BackGround;
    if(radioHospital.hasAttribute('checked')) {
        mapBG.style.backgroundImage="url('Hospital.png')";
    }
});

// Set and Remove 'checked' Attribute.
radioClinic.addEventListener('click', ()=>{
    radioClinic.toggleAttribute('checked');
    radioHospital.removeAttribute('checked');
    radioEmergency.removeAttribute('checked');

    // Check if radioHospital Contains checked Attribute To change Map BackGround;
    if(radioClinic.hasAttribute('checked')) {
        mapBG.style.backgroundImage="url('clinic.png')"
    }
});

// Set and Remove 'checked' Attribute.
radioEmergency.addEventListener('click', ()=>{
    radioEmergency.toggleAttribute('checked');
    radioHospital.removeAttribute('checked');
    radioClinic.removeAttribute('checked');
    // Check if radioHospital Contains checked Attribute To change Map BackGround;
    if(radioEmergency.hasAttribute('checked')) {
        mapBG.style.backgroundImage="url('map.png')"
    }
});