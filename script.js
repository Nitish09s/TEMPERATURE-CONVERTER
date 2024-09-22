function convertTemperature() {
    const temperature = document.getElementById('inputTemperature').value;
    const unit = document.getElementById('inputUnit').value;
    let result = 0;

    if (unit === 'Celsius') {
        result = (temperature * 9/5) + 32;
        document.getElementById('result').innerText = `${temperature}°C is ${result.toFixed(2)}°F`;
    } else if (unit === 'Fahrenheit') {
        result = (temperature - 32) * 5/9;
        document.getElementById('result').innerText = `${temperature}°F is ${result.toFixed(2)}°C`;
    }
}
