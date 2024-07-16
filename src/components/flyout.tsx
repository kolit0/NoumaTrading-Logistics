import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { BiWorld } from "react-icons/bi";
import React from 'react';
import { useTranslation } from "react-i18next";

export default function Flyout() {
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang: string) =>{
    i18n.changeLanguage(lang);
  }
  const flyOutMenu = [
    { name: t("flyout.es")},
  ]
  const flyOutMenu1 = [
    { name: t("flyout.en")},
  ]
  return (
    <Popover className="relative">
      <PopoverButton className=" text-white inline-flex items-center px-5 py-2 text-2xl hover:text-[#00DFA2] duration-100 font-semibold border-l-2 border-l-white">
        <BiWorld  aria-hidden="true" />
      </PopoverButton>

      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel className="absolute z-10 mt-5 flex -translate-x-[4.5rem]">
          <div className="flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
            {flyOutMenu.map((item) => (
                
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <div>
                    <button onClick={() => handleChangeLanguage("es")} className="font-semibold text-gray-900">
                      {item.name}
                    </button>
                  </div>
                </div>
              ))}
              {flyOutMenu1.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <div>
                    <button onClick={() => handleChangeLanguage("en")} className=" font-semibold text-gray-900">
                      {item.name}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  )
}
