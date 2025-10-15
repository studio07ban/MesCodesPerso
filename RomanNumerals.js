function toRomanNumerals (number) {
  let romanValue = ''
  // Insert your code here
  const romanNumerals = [
   {value: 1000, numeral: "M"}, 
   {value: 900, numeral: "CM"}, 
   {value: 500, numeral: "D"}, 
   {value: 400, numeral: "CD"}, 
   {value: 100, numeral: "C"}, 
   {value: 50, numeral: "L"}, 
   {value: 40, numeral: "XL"},
   {value: 10, numeral: "X"},
   {value: 5, numeral: "V"},
   {value: 4, numeral: "IV"},
   {value: 1, numeral: "I"},
   ];
   // Listing (Valeur num => chiffres romains Inchallah ça passe)
for ( let i = 0; i < romanNumerals.length; i++) {
  while (number >= romanNumerals[i].value) {
      romanValue += romanNumerals[i].numeral;
      number -= romanNumerals[i].value;
}
}
  return romanValue
}

console.log(toRomanNumerals(984)) 
// Expected: 'CMLXXXIV'
