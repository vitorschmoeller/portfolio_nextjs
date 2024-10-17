"use client"
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"
import { useSelector } from "react-redux";
import { useState } from "react";
import { Social } from "@/components/Social";
import { Photo } from "@/components/Photo";
import { Stats } from "@/components/Stats";


const portugueseText = {
  text: `Sou um especialista em transformar conceitos em realidade digital, 
  criando interfaces intuitivas e experiências de usuário cativantes. Utilizo minha 
  proficiência em diversas linguagens de programação e tecnologias de ponta 
  para dar vida a soluções digitais elegantes e funcionais.`,
  title: `Desenvolvedor de Software`,
  presentation: "Olá eu sou"
}

const englishText = {
  text: `I am an expert in transforming concepts into digital reality, 
  crafting intuitive interfaces and captivating user experiences. 
  `,
  title: "Software Developer",
  presentation: "Hello I'm"
}

export default function Home() {

  const isPortuguese = useSelector((state) => state.language.isPortuguese)
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleText = () => {
      setIsExpanded(!isExpanded);
  }

  const maxCharacters = 150;

  const currentText = isPortuguese ? portugueseText.text: englishText.text;

  const displayedText = isExpanded ? currentText : currentText.slice(0, maxCharacters) + '...'

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {isPortuguese ? (
            <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-2xl">{portugueseText.title}</span>
            <h1 className="h1 mb-6">
              {portugueseText.presentation} <br /> <span className="text-accent">Vitor Schmoeller</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {displayedText}
              <button onClick={toggleText} className="text-accent underline ml-2">
                {isExpanded ? "Mostrar menos": "Leia mais"}
              </button>
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2" >
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center 
                  items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          ): (
            <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-2xl">{englishText.title}</span>
            <h1 className="h1 mb-6">
              {englishText.presentation} <br /> <span className="text-accent">Vitor Schmoeller</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {displayedText}
              <button onClick={toggleText} className="text-accent underline ml-2">
                {isExpanded ? "Show less": "Read more"}

              </button>
              </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2" >
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center 
                  items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          )}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
