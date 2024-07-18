import imgBarco from "../Imagenes/barcoCarga.jpg";
import { FaChevronRight } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";
import React from "react";
import { useTranslation } from "react-i18next";


export default function Section() {
    const [t] = useTranslation("global");

    return (
            <div className="bg-cover bg-center bg-blend-multiply bg-gray-500 md:h-96 h-52 w-full place-items-center flex" style={{backgroundImage: `url(${imgBarco})`}}>
                <div className=" w-full space-y-2">
                    <div className="bg-gray-300 bg-opacity-40 backdrop-blur-md text-white w-auto h-20 place-items-center flex">
                        <h1 className="md:text-7xl text-3xl md:pl-60 pl-10 font-semibold">{t("services.title")}</h1>
                    </div>
                    <div className="place-items-center flex space-x-3">
                        <div className="md:pl-60 pl-10">
                            <TfiMenu className="text-white"/>
                        </div>
                        <div>
                            <a href="../Home" className="md:text-xl text-white font-extralight underline hover:text-blue-500">{t("services.subtitle")}</a>
                        </div>
                        <div className="flex place-items-center">
                            <FaChevronRight className="text-white"/>

                        </div>
                        <div>
                            <h2 className="md:text-xl text-white font-extralight">{t("services.title")}</h2>
                        </div>
                    </div>
                </div>
            </div>
    )
}