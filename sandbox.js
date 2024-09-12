const para = document.querySelector('p');
const para = document.querySelector('.error');
const para = document.querySelector('div.error');
const para = document.querySelector('body > h1');

console.log(para);

const paras = document.querySelectorAll('p');

console.log(paras);
console.log(paras[2]);

paras.forEach(para => {
    console.log(para);
})

