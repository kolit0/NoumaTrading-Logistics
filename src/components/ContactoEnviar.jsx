import React from "react";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import imgMaersk from "../Imagenes/maersk.jpg";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from 'framer-motion';


function Contactar({children}) {
    const [t] = useTranslation("global");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [formState, setFormState] = useState({});
    const [showAlert, setShowAlert] = useState(false); // New state variable for alert visibility
    
    const changeHandler = (event) => {
        setFormState({...formState, [event.target.name]: event.target.value});
    };
    const submitHandler = (event) =>{
        event.preventDefault();
        const config = {
            Host : "smtp.elasticemail.com",
            Username : "kolo03057@gmail.com",
            Password : "4FDDE9D2843B625E6F9CAA1D3E063054305C",
            Port: 2525,
            To: 'kolo03057@gmail.com',
            From: 'kolo03057@gmail.com',
            Subject: `Nuevo mensaje de: ${formState.company}`,
            Body: `Telefono: ${formState.phone} Nombre:${formState.name} Mensaje:${formState.msg} Email:${formState.email}`
        };
        if(window.Email){
            window.Email.send(config).then(() => {
                setShowAlert(true); // Show alert when email is sent successfully
                
                setTimeout(() => {
                    setShowAlert(false);
                }, 4000);
            });
        };
    }

    return(
        <div className="w-full h-auto bg-gray-100 flex max-md:justify-center max-md:pt-3">
            <div className="max-md:hidden bg-cover bg-blend-multiply bg-gray-300 bg-center h-auto w-96" style={{backgroundImage: `url(${imgMaersk})`}}>

            </div>
            <div className=" flex flex-col px-5 w-full">
                <div className='bg-[#0e1852] text-gray-300 w-full md:h-[8rem]  md:py-5 h-auto py-2 content-center place-items-center' style={{
                transform: isInView ? "none" : "translateY(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }} ref={ref}>
                {children}
                    <h2 className='md:text-5xl text-xl text-center border-b-2 border-[#00c08d] mx-4'>{t("contact.title")}</h2>
                </div>
            
                <form onSubmit={submitHandler} className="mt-2 md:mx-10 mx-5 h-auto  flex flex-col bg-white] gap-y-[0.10rem] rounded-md">
                <label className="input input-bordered flex items-center gap-2 bg-gray-300">
                        <input type="text" name="name" value={formState.name || ''} required className="grow text-[#0e1852] placeholder-[#0e1852]" placeholder={t("contact.name")} onChange={changeHandler} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 bg-gray-300">
                        <input type="text" name="company" value={formState.company} className="grow text-[#0e1852] placeholder-[#0e1852]" placeholder={t("contact.company")} onChange={changeHandler} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 bg-gray-300">
                        <input type="email" name="email" value={formState.email || ''} required className="grow text-[#0e1852] placeholder-[#0e1852]" placeholder={t("contact.email")} onChange={changeHandler} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 bg-gray-300">
                        <input type="tel" name="phone" value={formState.phone} required className="grow text-[#0e1852] placeholder-[#0e1852]" placeholder={t("contact.phone")} onChange={changeHandler} />
                    </label>
                    <label className="input input-bordered flex items-start gap-2 h-40 bg-gray-300">
                        <input type="text" name="msg" value={formState.msg}  className="grow text-[#0e1852] placeholder-[#0e1852]" placeholder={t("contact.msg")} onChange={changeHandler} />
                    </label>
                    <div className="flex place-content-center py-2">
                        <input type="submit" value={t("contact.btn")} className="text-black px-6 py-2 bg-[#00c08d] rounded-xl hover:bg-[#F6FA70] hover:text-black font-semibold duration-300 ease-in-out mx-2 flex"></input>
                    </div>
                </form>

                {showAlert && ( // Show div when showAlert is true
                <div className="flex justify-center">
                    <AnimatePresence>
                        <motion.div className="fixed top-20 z-50"
                        initial={{ y: -250, opacity: 0 }}
                        animate={{ y: -10, opacity: 1}}
                        exit={{ y: 250, opacity: 0 }}
                        transition={{
                        delay: 0.6,
                        type: 'spring',
                        stiffness: 200,
                        damping: 20,
                        mass: 0.5
                        }}>
                            <div className="bg-[#00c08d] md:w-80 text-center text-black font-bold md:text-2xl text-lg p-4 rounded-md mt-4">
                                {t("email.send")}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
                )}
            </div>
        </div>
    )
}

export default function Enviar(){
    return(
        <>
            <Contactar/>
        </>
    )
}
