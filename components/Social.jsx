import Link from "next/link"
import {FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: "https://github.com/vitorschmoeller"},
    {icon: <FaLinkedin />, path: "https://linkedin.com/in/vitorschmoeller"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/_vitorschmoeller/profilecard/?igsh=MTIxeDNteWRkcTdmZw=="},
]

export const Social = ({containerStyles, iconStyles}) => {
    return(
        <div className={containerStyles}>
            {socials.map((social,index) => (
                <Link target="_blank" key={index} href={social.path} className={iconStyles}>
                    {social.icon}
                </Link>
            ))}
        </div>
    )
}