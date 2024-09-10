var countryStateCityInfo = {
    India: {
        Maharashtra: {
            Mumbai: [],
            Pune: []
        },
        Karnataka: {
            Bangalore: [],
            Mysore: []
        },
        Tamilnadu: {
            Salem: [],
            Erode: []
        },
    },
    UnitedStates: {
        California: {
            LosAngeles: [],
            SanFrancisco: []
        },
        Texas: {
            Houston: [],
            Dallas: []
        }
    },
    Japan: {
        Tokyo: {
            Shinjuku: [],
            Shibuya: []
        },
        Osaka: {
            Naniwa: [],
            Kita: []
        }
    }
};
const names = document.getElementById("name");
const age = document.getElementById("age");
const phnum = document.getElementById("phnum");
const mail = document.getElementById("emailid");
const countrySelect = document.getElementById("c");
const stateSelect = document.getElementById("s2");
const citySelect = document.getElementById("s3");
const form = document.getElementById('form')

function Seterror(element, err) {
    let singleElement = document.getElementById(element);
    singleElement.innerHTML = err
    singleElement.style.color = 'Red'
}

function Solveerr(element) {
    let singleElement = document.getElementById(element);
    singleElement.innerHTML = ""
}

function selectCountry() {
    stateSelect.disabled = true;
    citySelect.disabled = true;
    for (let country in countryStateCityInfo) {
        const option = document.createElement("option");
        option.value = country
        option.text = country
        countrySelect.appendChild(option)
    }
}

countrySelect.addEventListener('change', function (e) {
    stateSelect.disabled = false;
    stateSelect.innerHTML = "<option>Select The State</option>"
    const selectedCountry = e.target.value;
    if (selectedCountry) {
        state = countryStateCityInfo[selectedCountry]
        for (let states in state) {
            const option = document.createElement("option");
            option.value = states
            option.text = states
            stateSelect.appendChild(option)
        }
    }
})

stateSelect.addEventListener('change', function (e) {
    stateSelect.disabled = false;
    citySelect.disabled = false;
    citySelect.innerHTML = "<option>Select The City</option>"
    const country = countrySelect.value;
    const state = e.target.value
    if (country && state) {
        cities = countryStateCityInfo[country][state];
        for (let city in cities) {
            const option = document.createElement("option");
            option.value = city
            option.text = city
            citySelect.appendChild(option)
        }
    }
})

const validateName = (name) => {
    return String(name)
        .toLowerCase()
        .match(
            /^[A-Za-z]+(?: [A-Za-z]+)*$/
        )
}

const validateAge = (age) => {
    return age.match(
        /^(?:[1-9]|[1-9][0-9]|100)$/
    )
}

const validatePhone = (phone) => {
    return (phone).match(
        /^\+?(\d{1,3})?[\s\-]?(\(?\d{1,4}\)?)?[\s\-]?(\d{1,4})[\s\-]?(\d{1,4})[\s\-]?(\d{1,9})$/
    )
}
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

};

var nameError = AgeError = phError = mailError = true
function validateForm() {
    if (names.value == "") {
        Seterror("nameErr", "Enter The Name");
    } else if (!validateName(names.value)) {
        Seterror("nameErr", "Enter Valid Name");
    } else {
        Solveerr("nameErr")
        nameError = false
    }

    if (age.value == "") {
        Seterror("ageErr", "Enter The Age");
    } else if (!validateAge(age.value)) {
        Seterror("ageErr", "Enter Valid Age");
    } else {
        Solveerr("ageErr")
        AgeError = false

    }

    if (phnum.value == "") {
        Seterror("phErr", "Enter The Phone Number");
    } else if (!validatePhone(phnum.value)) {
        Seterror("phErr", "Enter Valid Phone Number");
    } else {
        Solveerr("phErr")
        phError = false
    }


    if (mail.value == "") {
        Seterror("emailErr", "Enter The Mail");
    } else if (!validateEmail(mail.value)) {
        Seterror("emailErr", "Enter Valid Mail");
    } else {
        Solveerr("emailErr");
        mailError = false
    }

}
selectCountry()
form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateForm()
    if ((nameError || AgeError || phError || mailError) == true) {
        return false
    } else {
        alert(`You Entered Values Are
                    Name: ${names.value}
                    Age:${age.value}
                    Phone Number:${phnum.value}
                    Mail ID:${mail.value}
                    Country:${countrySelect.value}
                    State:${stateSelect.value}
                    City:${citySelect.value}`)
        names.value = ""
        age.value = ""
        phnum.value = ""
        mail.value = ""
        countrySelect.value = ""
        stateSelect.disabled = true
        citySelect.disabled = true
    }
})



