  function generatePassword() {
  //define charset
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCase = 'abcdefghijklmonpwrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%&^*(_)+[{]}<>:|';
 
 //get all the checkbox values 
 const includeUpperCase = document.getElementById('upperCase').checked;
 const includeLowerCase = document.getElementById('lowerCase').checked;
 const includeNumbers = document.getElementById('numbers').checked;
 const includeSymbols = document.getElementById('symbols').checked;
 
 let allChars = '';
 
 if (includeUpperCase) allChars += upperCase;
 if (includeLowerCase) allChars += lowerCase;
 if (includeNumbers) allChars += numbers;
 if (includeSymbols) allChars += symbols;
 
 //check if any characters are checked
 if (allChars.length === 0) {
   alert('Pls choose an option...')
   return '';
 }
  
 //Generate password
   const passwordLength = document.getElementById('passwordLength').value;
   const lengthVal = document.getElementById('lengthVal');
   lengthVal.textContent = passwordLength;
   
   let password = '';
   for (let i =0; i < passwordLength; i++) {
     const random = Math.floor(Math.random() * allChars.length);
     password += allChars[random];
   }
   
   return password;

}

function passwordStrength(password) {
  const strengthRating = document.getElementById('strengthRating');
  const box1 = document.getElementById('box1');
  const box2 = document.getElementById('box2');
  const box3 = document.getElementById('box3');
  
  if (password.length >= 8) {
    strengthRating.textContent = 'Strong';
    strengthRating.style.color = '#15ff62';
    box1.style.backgroundColor = '#15ff62';
    box2.style.background = '#15ff62';
    box3.style.background = '#15ff62';
  } else if (password.length >= 5 && password.length <= 8) {
    strengthRating.textContent = 'Medium'
    strengthRating.style.color = 'orange';
    box1.style.background = 'orange';
    box2.style.background = 'orange';
    box3.style.background = 'transparent';
  } else {
    strengthRating.textContent = 'Weak';
    strengthRating.style.color = 'red';
    box1.style.background = 'red';
    box2.style.background = 'transparent';
    box3.style.background = 'transparent';
  }
}


document.getElementById('passwordLength').addEventListener('input', () => {
  const passwordLength = document.getElementById('passwordLength').value;
  const lengthVal = document.getElementById('lengthVal');
  lengthVal.textContent = passwordLength;
});

 //Generate password trigger
 document.getElementById('generateBtn').addEventListener('click', () => {
   const generatedPassword = generatePassword()
   console.log(generatedPassword);
   const display = document.getElementById('display');
   display.value = generatedPassword;
   passwordStrength(generatedPassword);
 });

document.getElementById('copyBtn').addEventListener('click', () => {
  const display = document.getElementById('display');
  display.select()
  document.execCommand('copy');
  alert('Password copied to clipboard');
})