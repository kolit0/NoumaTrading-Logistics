import {Fragment} from "react";
import Flyout from "./flyout.tsx";
import React from "react";
import { useTranslation } from "react-i18next";
import nouma from "../Imagenes/NOUMA - logo color transparente.png";

function email() {
  window.location.href=`mailto:contacto@noumatrading.com.ve`
}

const Navbar = () => {
  const [t] = useTranslation("global");
    return(

  <nav className="flex items-center">
    <img id="Nouma" src={nouma} className={`w-auto md:hidden h-24`}alt="Nouma Icono"/>
    <ul className="md:text-xl text-sm text-gray-300 flex justify-between mr-5">
      <li>
        <button id="correo" className="text-black px-3 md:px-6 py-2 bg-[#00c08d] rounded-xl hover:bg-[#F6FA70] hover:text-black font-semibold duration-300 ease-in-out mr-1" onClick={email}>{t("navbar.btn")}</button>
      </li>
      <li>
        <Fragment>
          <Flyout />
        </Fragment>
      </li>
    </ul>

  </nav>
    )
}

export default Navbar;