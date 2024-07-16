import React from 'react';
import imgCargando from "../Imagenes/cargando.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Inicio = () => {
  const [t] = useTranslation("global");
  return (
    
    <div className='bg-cover bg-bottom bg-blend-multiply bg-gray-500 h-[53.7rem] w-full px-10' style={{backgroundImage: `url(${imgCargando})`}}>
      <div className="flex flex-col w-full pt-44 md:pl-60">
        <motion.div 
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.8,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className="grid flex-grow h-auto">
          <p className=' font-semibold md:text-6xl text-white text-4xl'>{t('home.title')}</p>
        </motion.div> 
        <motion.div 
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 3,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        className=' md:w-80 bg-[#00c08d] h-1'></motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className="grid flex-grow h-auto">
          <p className='text-2xl md:pr-20 md:text-justify text-white'>{t("home.text")}</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Inicio