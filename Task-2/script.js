function convertToFahrenheit() {
    var celsiusInput = document.getElementById("celsius");
var fahrenheitResult = document.getElementById("result");
    var celsius = parseFloat(celsiusInput.value);
    
    if (!isNaN(celsius)) {
        var fahrenheit = celsius * 9 / 5 + 32;
        fahrenheitResult.textContent = "Temperature in Fahrenheit: " + fahrenheit.toFixed(2);
    } else {
        fahrenheitResult.textContent = "Please enter a valid temperature in Celsius.";
    }
}

function convertToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var celsiusResult = document.getElementById("result");
    var fahrenheit = parseFloat(fahrenheitInput.value);
    
    if (!isNaN(fahrenheit)) {
        var celsius = (fahrenheit - 32) * 5 / 9;
        celsiusResult.textContent = "Temperature in Celsius: " + celsius.toFixed(2);
    } else {
        celsiusResult.textContent = "Please enter a valid temperature in Fahrenheit.";
    }
}