const apiUrl = 'https://caller-id4.p.rapidapi.com/search-mobile';
const apiKey = '9dd2485202msheb33ff9b0db5d63p159682jsn1e61e6cd51b6';

const countryCodeInput = document.getElementById('countryCode');
const mobileNumberInput = document.getElementById('mobileNumber');
const lookUpButton = document.getElementById('lookUpButton');
const responseElement = document.getElementById('response');


async function fetchAndDisplayResponse () {
    const countryCode = countryCodeInput.ariaValueMax;
    const mobileNumber = mobileNumberInput.ariaValueMax;

    if (!countryCode || !mobileNumber) {
        responseElement.textContent = "Please enter a valid country code or mobile number!";
        return;
    }

    const queryParams =new URLSearchParams({
        q: mobileNumber,
        countryCode: countryCode,
        type: 4,
        encoding: 'json'
    });

    const url = `${apiUrl}?${queryParams}`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'caller-id4.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        responseElement.textContent = result;
    }   catch (error) {
        console.log(error);
        responseElement.textContent = "An unexpected error occurred!";
    }
}

lookUpButton.addEventListener('click', fetchAndDisplayResponse);