//Modules
import { HTMLAttributes } from "react";

interface ILogoProps extends HTMLAttributes<HTMLImageElement>{
    type?:"normal" | "white"
};

export const Logo = (props:ILogoProps) => {
    return(<img src={props.type == 'white' ? "/logo-white.png" : "/logo.png"} width={150} style={{display:'block', margin:'auto'}} {...props} />)
};