"use client";
import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { useDispatch, useSelector } from "react-redux";
import { GiBrazilFlag } from "react-icons/gi";
import { CiGlobe } from "react-icons/ci";
import { handlePortuguese, handleEnglish } from "@/store/reducers/languageSlice";
import { Nav } from "./Nav";
import { Button } from "./ui/button";

export const Header = () => {
    const { isPortuguese } = useSelector((state) => state.language);
    const dispatch = useDispatch();
    console.log(isPortuguese);

    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Vitor<span className="text-accent">.</span>
                        </h1>
                    </Link>
                    <div className="flex items-center ml-4 space-x-3"> {/* Adiciona espaço entre os botões */}
                        <button
                            title="Change language"
                            type="button"
                            onClick={() => dispatch(handlePortuguese())}
                            className={`py-1 px-2 border-2 border-white rounded-full flex items-center  
                                hover:bg-green-600 hover:text-yellow-400 hover:scale-110 duration-300`}
                        >
                            <GiBrazilFlag size={24} />
                        </button>
                        <button
                            title="Change language"
                            type="button"
                            onClick={() => dispatch(handleEnglish())}
                            className={`py-1 px-2 border-2 border-white rounded-full flex items-center 
                                hover:bg-blue-600 hover:text-yellow-400 hover:scale-110 duration-300`}
                        >
                            <CiGlobe size={24} />
                        </button>
                    </div>
                </div>
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};