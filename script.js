function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    
    let resultElement = document.getElementById("result");
    let result;
    if (operation === "+") {
        let num3 = parseFloat(document.getElementById("num3").value);
        if (!isNaN(num3)) {
        result = num1 + num2 + num3;
    } else {
        result = num1 + num2;
    }
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        let num3 = parseFloat(document.getElementById("num3").value);
        if (!isNaN(num3)) {
            result = num1 * num2 * num3;
        } else {
            result = num1 * num2;
        }
    } else if (operation === "/") {
        if (num2 === 0) {
            result = "Division par zéro impossible";
        } else {
            result = num1 / num2;
        }
    }

    resultElement.textContent = "Résultat : " + result;
}
