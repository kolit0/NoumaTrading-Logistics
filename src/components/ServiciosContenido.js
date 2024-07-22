import React from "react";
import avion from "../Imagenes/avion.png";
import { useTranslation } from "react-i18next";

function Section() {
  const [t] = useTranslation("global");

    return (
        <div className="bg-[#dadff1] h-[50%] w-full flex flex-row">
          <div className='bg-cover bg-left-center h-[50.7rem] w-full md:px-10 content-center flex justify-end' style={{backgroundImage: `url(${avion})`}}>      
                <div className="bg-gray-200 md:bg-opacity-40 bg-opacity-50 md:backdrop-blur-md md:p-12 p-2 flex flex-col justify-center my-5 w-auto">
                    <ul className=" list-disc list-inside space-y-2 lg:text-3xl text-xl font-semibold text-[#0e1852]">{t("services.h3.1")}
                        <li className="lg:text-xl max-md:text-base text-lg font-normal text-black">{t("services.pt1")}</li>
                        <li className="lg:text-xl max-md:text-base text-lg font-normal text-black">{t("services.pt2")}</li>
                        <li className="lg:text-xl max-md:text-base text-lg font-normal text-black">{t("services.pt3")}</li>
                        <li className="lg:text-xl max-md:text-base text-lg font-normal text-black">{t("services.pt4")}</li>
                        <li className="lg:text-xl max-md:text-base text-lg font-normal text-black">{t("services.pt13")}</li>
                        <li className="lg:text-xl max-md:text-base text-lg font-normal text-black">{t("services.pt14")}</li>
                        <li className="lg:text-xl max-md:text-base text-lg font-normal text-black">{t("services.pt15")}</li>
                        <li className="lg:text-xl max-md:text-base text-lg font-normal text-black">{t("services.pt16")}</li>
                    </ul>
                    <h2 className="pt-3 lg:text-3xl text-lg font-bold text-[#0e1852]">{t("services.h3.2")}</h2>
                    <ul className="pt-2 list-disc list-inside md:space-y-2 lg:text-2xl text-xl font-semibold text-[#0e1852]">{t("services.h3.3")}
                        <li className="lg:text-xl max-md:text-base text-lg font-normal text-black">{t("services.pt5")}</li>
                        <li className="lg:text-xl max-md:text-base text-lg font-normal text-black">{t("services.pt6")}</li>
                        <li className="lg:text-xl max-md:text-base text-lg font-normal text-black">{t("services.pt7")}</li>
                        <li className="lg:text-xl max-md:text-base text-lg font-normal text-black">{t("services.pt8")}</li>
                        <li className="lg:text-xl max-md:text-base text-lg font-normal text-black">{t("services.pt9")}</li>
                    </ul>
                    <ul className=" pt-3 list-disc list-inside md:space-y-2 lg:text-2xl text-xl font-semibold text-[#0e1852]">{t("services.h3.4")}
                        <li className="lg:text-xl max-md:text-base text-lg font-normal text-black">{t("services.pt10")}</li>
                        <li className="lg:text-xl max-md:text-base text-lg font-normal text-black">{t("services.pt11")}</li>
                        <li className="lg:text-xl max-md:text-base text-lg font-normal text-black">{t("services.pt12")}</li>
                    </ul>
                </div>
          </div>
          
        </div>
    )
}

export default function ContactoInicio() {
    return (
      <>
        <Section></Section>
      </>
    );
  }