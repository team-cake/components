import React from 'react';
import './App.css';
import './components/header.js';
import header from './components/header.js';

export default function app() {
    return (
        
          <div className="row">
        {all_header.map(header => (
            <header
              link={header.link}
              icon={header.icon}
              />
              )
            }
</div>


const all_header = [
  {
    link: "https://learntocodetogether.nl/assets/icon.svg",
    icon: 90,
  },
  {
    link: "Charizard",
    icon: 90,
  },
  {
    link: "Charizard",
    icon: 90,
  },
];
