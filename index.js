let name = 'Mosh';
const interestRate =.3;
//interestRate = 3;


let person = {
  name : "Mateo",
  last_name:'Acosta',
  age : 30,
  interests:['Music','Praxics']
}
person.name = 'Talia';
document.write(person.interests)

function greet(name){
  document.write(name);
}
greet('Mateo');
greet('Jimena');
greet('Noriega');
 console.log(person.name);
let lista = ['hola','mundo'];
lista.push('covid');
document.write(lista);
let h1_element = document.querySelector('.barut');
h1_element.setAttribute('style','background-color:red;');
btn = document.createElement('BUTTON');
document.body.appendChild(btn);
document.write(Math.random());
lista.sort();
document.write(lista);
//document.write(h1_element.getAttribute('class'));
//document.write();
for(let i=0;i<lista.length;i++){
  document.write(lista[i]);
}
