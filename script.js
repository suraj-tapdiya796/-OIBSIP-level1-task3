document.addEventListener("DOMContentLoaded", () => {
    const convertBtn = document.getElementById("convertBtn");
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const resultInput = document.getElementById("result");
  
    convertBtn.addEventListener("click", () => {
      const temperature = parseFloat(temperatureInput.value);
      const selectedUnit = unitSelect.value;
  
      if (selectedUnit === "celsius") {
        const fahrenheit = (temperature * 9/5) + 32;
        resultInput.value = fahrenheit.toFixed(2) + " °F";
      } else if (selectedUnit === "fahrenheit") {
        const celsius = (temperature - 32) * 5/9;
        resultInput.value = celsius.toFixed(2) + " °C";
      }
    });
  });
  