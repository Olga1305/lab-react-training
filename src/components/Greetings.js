import React from 'react';
import './Greetings.css';


const Greetings = (props) => {

    let lang;
    switch (props.lang) {
      case 'de':
        lang = "Hallo";
        break;
      case 'en':
        lang = "Hello";
        break;
      case 'fr':
        lang = "Bonjour";
        break;
      case 'es':
        lang = "Hola";
        break;   
  }

  
    return (    
      <div className="Greetings">        
            <p>{lang} {props.children}</p>        
        
     </div>
    );
};


export default Greetings;