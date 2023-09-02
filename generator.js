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
  
 /* const setUsed = {
    upperCase: /[A-Z]/.test(password),
    lowerCase: /[a-z]/.test(password),
    numbers: /[0-9]/.test(password),
    symbols: /[!@#$%&^*(_)+[{]}<>:|]/.test(password)
  }
  
    strengthRating.textContent = 'Strong';
    strengthRating.style.color = '#15ff62';
    box1.style.backgroundColor = '#15ff62';
    box2.style.background = '#15ff62';
    box3.style.background = '#15ff62';
    
  
  const numSetUsed = Object.values(setUsed).filter((value) => value).length;*/

   const includeUpperCase = document.getElementById('upperCase').checked;
    const includeLowerCase = document.getElementById('lowerCase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;
 if (password.length >= 12) { // Password length is above 14
    let condition = includeUpperCase && includeLowerCase && includeNumbers && includeSymbols
    || includeUpperCase && includeLowerCase && includeSymbols ||
    includeUpperCase && includeLowerCase && includeNumbers || includeSymbols &&
    includeNumbers && includeLowerCase ||  includeSymbols &&
    includeNumbers && includeUpperCase;
    if (condition) {
      strengthRating.textContent = 'Strong';
      strengthRating.style.color = '#15ff62';
      box1.style.backgroundColor = '#15ff62';
      box2.style.background = '#15ff62';
      box3.style.background = '#15ff62';
      box4.style.background = '#15ff62';
    } else {
      strengthRating.textContent = 'Moderate'; // New strength level
      strengthRating.style.color = 'blue';
      box1.style.background = 'blue';
      box2.style.background = 'blue';
      box3.style.background = 'blue';
      box4.style.background = 'transparent';
    }
  } else if (password.length >= 8) {

    if (includeUpperCase && includeLowerCase && includeNumbers && includeSymbols) {
      strengthRating.textContent = 'Strong';
      strengthRating.style.color = '#15ff62';
      box1.style.backgroundColor = '#15ff62';
      box2.style.background = '#15ff62';
      box3.style.background = '#15ff62';
      box4.style.background = '#15ff62';
    } else {
      strengthRating.textContent = 'Medium';
      strengthRating.style.color = 'orange';
      box1.style.background = 'orange';
      box2.style.background = 'orange';
      box3.style.background = 'transparent';
      box4.style.background = 'transparent';
    }
    } else if (password.length >= 6 && password.length <= 8) {
    strengthRating.textContent = 'Medium'
    strengthRating.style.color = 'orange';
    box1.style.background = 'orange';
    box2.style.background = 'orange';
    box3.style.background = 'transparent';
    box4.style.background = 'transparent';
  } else {
    strengthRating.textContent = 'Weak';
    strengthRating.style.color = 'red';
    box1.style.background = 'red';
    box2.style.background = 'transparent';
    box3.style.background = 'transparent';
    box4.style.background = 'transparent';
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
  display.select();
  display.setSelectionRange(0,99999);
  document.execCommand('copy');
  console.log(display)
 navigator.clipboard.writeText(display.value);
  alert('Password copied to clipboard');
})