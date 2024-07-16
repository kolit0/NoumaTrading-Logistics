import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import Map from "./Mapa";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { useTranslation } from "react-i18next";


function Section2() {
    const [t] = useTranslation("global");

    return (
            <div className="bg-white md:h-screen w-full flex-col justify-center lg:flex gap-20 max-lg:space-y-5 max-md:pb-5">
               <div className="md:flex-row max-md:grid max-md:grid-cols-1 flex space-x-10 justify-center md:px-20 max-lg:space-y-5 lg:-mt-60 max-lg:pt-5">
                <div className="p-5 ml-10 bg-gray-100 h-auto w-auto flex-col  place-content-center flex gap-5">
                    <div className="border-b-4 w-full border-blue-800">
                        <h2 className="text-[min(4vw,2.5rem)] text-black">{t("contact.call")}</h2>
                    </div>
                    <div className="flex space-x-2 text-black">
                        <FiPhoneCall className="mt-1 text-[min(3vw,1.2rem)] inline-flex"/>
                        <p className=" text-[min(3vw,1.2rem)] inline-flex">+58-241-833-6097</p>
                    </div>
                </div>
                <div className="p-5 bg-gray-100 h-auto w-auto flex-col place-content-center flex gap-5">
                    <div className="border-b-4 w-full border-blue-800">
                        <h2 className="text-[min(4vw,2.5rem)] text-black">{t("contact.write")}</h2>
                    </div>
                    <div className="flex space-x-2 text-black">
                        <MdEmail className="mt-1 text-[min(3vw,1.2rem)] inline-flex"/>
                        <p className=" text-[min(3vw,1.2rem)] inline-flex">info@gruponouma.com</p>
                    </div>
                </div>

                <div className=" p-5 bg-gray-100 h-auto w-auto flex-col place-content-center flex gap-5 grow">
                    <div className="border-b-4 w-full border-blue-800">
                        <h2 className="text-[min(4vw,2.5rem)] text-black">{t("contact.locate")}</h2>
                    </div>
                    <div className="flex space-x-2 text-black">
                        <ImLocation className="mt-1 text-[min(3vw,1.2rem)] shrink-0"/>
                        <p className="inline-flex text-[min(3vw,1.2rem)]">{t("contact.location")}</p>
                    </div>
                </div>
    
               </div>
               <div className="flex place-items-center justify-center max-lg:hidden">
                <Map></Map>
               </div>
            </div>
    )
}

export default function ContactoInicio() {
    return (
      <>
        <Section2></Section2>
      </>
    );
  }