function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputTemperatureElement = document.getElementById('outputTemperature');
  
    if (inputUnit === 'celsius') {
      const fahrenheit = (inputTemperature * 9/5) + 32;
      outputTemperatureElement.textContent = `${inputTemperature}°C is ${fahrenheit.toFixed(2)}°F`;
    } else if (inputUnit === 'fahrenheit') {
      const celsius = (inputTemperature - 32) * 5/9;
      outputTemperatureElement.textContent = `${inputTemperature}°F is ${celsius.toFixed(2)}°C`;
    }
  }
  