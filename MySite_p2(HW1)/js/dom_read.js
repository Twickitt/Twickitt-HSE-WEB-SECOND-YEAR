const passport = document.getElementById('passport');
const paragraphs = passport.getElementsByTagName('p');

const surname = paragraphs[0].childNodes[1].innerText; 
const name = paragraphs[1].childNodes[1].innerText;    
const birthYear = paragraphs[2].childNodes[1].innerText; 

console.log("Фамилия:", surname);
console.log("Имя:", name);
console.log("Год рождения:", birthYear);

// для наглядного вывода на странице
const resultDiv = document.createElement('div');
resultDiv.innerHTML = `<p>Фамилия: ${surname}</p>
                       <p>Имя: ${name}</p>
                       <p>Год рождения: ${birthYear}</p>`;
document.body.appendChild(resultDiv);