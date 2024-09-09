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
const countrySelect = document.getElementById("c");
const stateSelect = document.getElementById("s2");
const citySelect = document.getElementById("s3");
const names = document.getElementById("name")
const age = document.getElementById("age");
const phnum = document.getElementById("phnum");
const submitbtn = document.getElementById("submitbtn");

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

submitbtn.addEventListener('click', (e) => {
    if (names.value == "" || age.value == "" || phnum.value == "" || countrySelect.value == "" || stateSelect.value == "" || citySelect.value == "") {
        e.preventDefault
        alert("Enter All Values....")
    } else {
        alert(`You Entered Values Are
        Name: ${names.value}
        Age:${age.value}
        Phone Number:${phnum.value}
        Country:${countrySelect.value}
        State:${stateSelect.value}
        City:${citySelect.value}`)
        names.value = ""
        age.value = ""
        phnum.value = ""
        countrySelect.value = ""
        stateSelect.disabled = true
        citySelect.disabled = true
    }

})
selectCountry()
