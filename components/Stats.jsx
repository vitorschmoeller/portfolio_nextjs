"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";





export const Stats = () => {
    
    const [status, setStatus] = useState([])

    useEffect(() => {

        const getData = async() => {
            try {
                await fetch("https://api.github.com/users/vitorschmoeller/repos")
                .then((res) => res.json())
                .then((res) => setStatus(res))
            }catch(error){
                console.log(error)
            }
        }
        getData()

    },[])
    
    const projects = status.length

    const stats = [
        {
            num: "1",
            text: "Computer Science Degree"
        },
        {
            num: projects,
            text: "Projects completed"
        },
        {
            num: 8,
            text: "Technologies maastered"
        },
        {
            num: 5,
            text: "Years studying"
        },
    ]
    return(
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mxauto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => {
                        return (
                        <div
                            className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                            key={index}
                            >
                            <CountUp 
                            end={item.num} 
                            duration={5} 
                            delay={2} 
                            className="text-4xl xl:text-6xl font-extrabold"
                            />
                            <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80` }>{item.text}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}