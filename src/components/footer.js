import React from 'react';
import logo from "../Imagenes/NOUMA - logo color transparente.png";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t] = useTranslation("global");
  
  return (
    <footer className="footer items-center md:p-4 bg-neutral text-neutral-content">
  <aside className="items-center md:grid-flow-col grid grid-cols-1 md:pl-52 p-2">
  <img src={logo} className='h-auto w-52' alt="Logo Quimica Nouma"></img>
  <p className=''>{t("footer.text")}
  <p className=''>Made by Otniel Jimenez / kolo03057@gmail.com</p> 
  </p>
  
  </aside> 
  <nav className="grid-flow-col pb-4 pl-5 gap-4 md:place-self-center md:justify-self-end">
    <a href='https://x.com/NoumaLogistics' className=' '>
    <FaXTwitter className='md:size-7 size-5'/>
    </a>
    <a href='https://www.instagram.com/quimicanouma/?hl=es' >
      <FaInstagram className='md:size-7 size-5'/>
    </a>
  </nav>
</footer>
  )
}

export default Footer