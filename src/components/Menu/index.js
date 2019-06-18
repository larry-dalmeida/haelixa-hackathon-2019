import React from 'react';
import './style.css';

const menu = [
  'My Dashboard',
  'Home',
  'Inbox',
  'Products',
]

const categories = [
  'T-Shirts',
  'Jackets',
  'Shorts',
  'Pullover'
]

const Menu = ({ icon, height, width }) => {
  return (
    <div className={'Menu'}>
      {menu.map(item => <p key={item}>{item}</p>)}
      <div className={'Menu-subitems'}>
        {categories.map(item => <p key={item}>{item}</p>)}
      </div>
    </div>
  )
}

export default Menu;
