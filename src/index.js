import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.css";
import "./global.css"
import Badge from './components/Badge';
import BadgeNew from './pages/BadgeNew';

const container = document.getElementById('app');

// ReactDOM.render(que, donde)
// ReactDOM.render(
//     <Badge 
//         firstName="David"
//         lastName="Chandzul" 
//         avatarUrl="https://secure.gravatar.com/avatar/9a01546f13f3ac1f91dd46af99a7e800?s=128"
//         jobTitle="Frontend Enginier" 
//         twitter="dchandzul"
//     />, 
//     container
// );

ReactDOM.render(<BadgeNew />, container)