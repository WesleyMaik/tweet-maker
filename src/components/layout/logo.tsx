//Modules
import { HTMLAttributes } from "react";
import logo from "../../../public/images/logo.png";
import logoWhite from "../../../public/images/logo-white.png";

interface ILogoProps extends HTMLAttributes<HTMLImageElement>{
    type?:"normal" | "white"
};

export const Logo = (props:ILogoProps) => {
    return(
        <img 
            {...props} 
            src={props.type == 'white' ? logoWhite : logo} 
            width={150} 
            style={{display:'block', margin:'auto'}} 
            alt="Tweet Maker Logo" 
        />
    )
};