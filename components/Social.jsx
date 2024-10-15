import Link from "next/link"
import {FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: "https://github.com/vitorschmoeller"},
    {icon: <FaLinkedin />, path: "https://github.com/vitorschmoeller"},
    {icon: <FaInstagram />, path: "https://github.com/vitorschmoeller"},
]

export const Social = ({containerStyles, iconStyles}) => {
    return(
        <div className={containerStyles}>
            {socials.map((social,index) => (
                <Link key={index} href={social.path} className={iconStyles}>
                    {social.icon}
                </Link>
            ))}
        </div>
    )
}