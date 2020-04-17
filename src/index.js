// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react'
import ReactDOM from 'react-dom'

// const element = <h1>Hello, Platzi Badges!!</h1>
// const element = React.createElement(
//     'a', 
//     { href: 'https://platzi.com' }, 
//     'Ir a Platzi!'
// )

// const name = 'Stephanie'
// const element = React.createElement('h1', {}, `Hola, soy ${name}`)
// const jsx = <h1>Hola, soy {name}</h1>
const element = <div>
    <h1>Hola, Soy David</h1>
    <p>Soy ingeniero Frontend</p>
    <a href="#">Test emmet</a>
</div> 

const container = document.getElementById('app')

// ReactDOM.render(que, donde)
ReactDOM.render(element, container)
