import React from 'react';
import wsIcon from "../Imagenes/whatsapp.png";

export default function wsBtn () {
  return (
    <div className='sticky'>
      <div className='fixed bottom-0 right-0'>
        <a href='https://wa.me/+584127652493?text=Buen día, estoy solicitando información'>
          <img src={wsIcon} alt="Whatsapp" className='size-12 m-3'/>
        </a>
      </div>
    </div>
  )
}
