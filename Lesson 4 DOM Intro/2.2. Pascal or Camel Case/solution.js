function solve() {
  const text = document.getElementById('text').value;
  const type = document.getElementById('naming-convention').value;
  let textToLowerCase = text.toLowerCase();
  let result ='';
  if(type === 'Camel Case'){
    result = textToLowerCase.replace(/\b\s[a-zA-z]/gi, char => char.toUpperCase());
  }else if (type === 'Pascal Case'){
    result = textToLowerCase.replace(/\b[a-zA-z]/gi, char => char.toUpperCase());
  }else{
    result = 'Error!';
  };
  document.getElementById('result').textContent = result.split(' ').join('');
};