function TempConverter() {
    const input = document.getElementById("input");
    const temp_diff = document.getElementById("temp_diff");
    const temp_result = document.getElementById("result");
    const value = parseFloat(input.value);

    function roundNumber(num) {
        return num.toFixed(2);
      }

    function celToFaren(value) {
        let fahrenheit = roundNumber((value * 9) / 5 + 32);
      return fahrenheit;
    }

    
    function farenToCel(value) {

        let celsius =roundNumber(((value - 32) * 5) / 9);
      return celsius;

    }
    

     if(input.value === ""){
alert("Input should not be empty");
}

    else if (temp_diff.value === "Celsius") {
const result = celToFaren(value);
      temp_result.innerHTML = `${result} Fahrenheight`;
      
    }


     else {
      const result = farenToCel(value);
      temp_result.innerHTML = `${result} Celsius`;
    }

  }
