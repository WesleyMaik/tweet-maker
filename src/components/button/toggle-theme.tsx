//Components
import { Button } from "./index";
import { RiContrastLine } from "react-icons/ri";
import { HTMLAttributes } from "react";

export const ToggleButton = (props:HTMLAttributes<HTMLButtonElement>) => {
    return (
            <Button 
                {...props}
                color="secundary" 
                icon={<RiContrastLine />}
            >Trocar Tema</Button>
        )
};