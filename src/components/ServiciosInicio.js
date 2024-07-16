import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

function Section2({children}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [t] = useTranslation("global");

    return (
        <div className="bg-white md:h-80 h-28 w-full flex-col md:justify-end justify-center flex gap-20 md:place-items-end place-items-center px-5 md:pr-40">
          <div className="flex">
            <div className='bg-[#0e1852] text-gray-300 w-auto md:max-w-[30rem] max-w-[20rem] md:h-60 md:py-5 h-20 content-center place-items-center' style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }} ref={ref}>
            {children}
              <h2 className='md:text-5xl text-2xl text-end border-b-2 border-[#00c08d] mx-4'>{t("services.h2")}</h2>
            </div>
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