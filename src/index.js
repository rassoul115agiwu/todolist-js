/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/

/*function repete(){
  for (let i=0;i<=10;i++){
    console.log(i)
  }
}
repete();*/


/*const apprenant = {
  nom: " fatou ndiole",
  age: 20,
  passeExem: function(){
    console.log("fatou ndiole", "passe un exemen")
  }
}
apprenant.passeExem();*/




let mouton ={
  nom :'balla gaye2',
  race :'ladoum',
  couleur : 'blanc',
  position : {
    x : 1,
    y: 1,
  },
  manger : function(){
           console.log('le mouton mange de lherbe')
           console.log ('le mouton de race',mouton.race,'est de couleur',mouton.couleur,'manger')
  },
   marcher : function(){
            console . log('le mouton marche ')
            console.log ('le mouton de race',mouton.race,'est de couleur',mouton.couleur,'marcher')
   },
  deplacer :function(a,b){
    this.position.x+=a
    this.position.y+=b
    console.log()
  },
}
mouton.marcher();