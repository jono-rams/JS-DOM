const para = document.querySelector('p');

console.log(para.innerText);

para.innerText = 'Ninjas are awesome';

const paras = document.querySelectorAll('p');

paras.forEach((p) => {
    console.log(p.innerText);
    p.innerText += ' new text';
});

const content = document.querySelector('.content');

console.log(content.innerHTML);

content.innerHTML += '<h2>New Heading</h2>';

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});