let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const fromDropDown = document.getElementById("from-currency-select");

const toDropDown = document.getElementById("to-currency-select");

// Create dropdown from the currencies array
currencies.forEach((currency) =>{
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  fromDropDown.add(option);
})

//Same for the other dropdown
currencies.forEach((currency) =>{
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  toDropDown.add(option);
});

//Setting default values
fromDropDown.value = "USD";
toDropDown.value = "CLP";

let convertCurrency = () => {
  //Create References
  const amount = document.querySelector("#amount").value;
  const fromCurrency = fromDropDown.value;
  const toCurrency = toDropDown.value;

  //If amount input field isn't empty
  if (amount.lenght != 0) {
    alert("Here is the result");
  } else {
    alert("Please fill in the amount");
  }
};

document.querySelector("#convert-button").addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);
