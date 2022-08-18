import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'
import './styles.css'; // estilo global

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <GifExpertApp></GifExpertApp>

  </React.StrictMode>
);

// styles: https://gist.github.com/Klerith/e4fca6ac127ccb9abd1e8ad77fcd52f1

/* 

RUTA DE FUNCIONAMIENTO:
main.jsx > GifExpertApp.jsx > GifGrid.jsx > useFetch.js > getGifs.js

luego:

GifGrid.jsx > GifItem.jsx

 */