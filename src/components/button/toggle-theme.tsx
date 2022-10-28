//Modules
import { getSliceData, setTheme } from "../../store/slice";
import { HTMLAttributes } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import { Button } from "./index";
import { RiContrastLine } from "react-icons/ri";

export const ToggleButton = (props:HTMLAttributes<HTMLButtonElement>) => {
    const { theme } = useSelector(getSliceData),
          dispatch = useDispatch();

    const dispatchTheme = (theme:"light" | "dim" | "dark") => {
        dispatch(setTheme(theme));
    };

    const handleToggleTheme = () => {
        switch(theme){
            case 'light': dispatchTheme('dim'); break;
            case 'dim': dispatchTheme('dark'); break;
            case 'dark': dispatchTheme('light'); break;
        };
    };

    return (
            <Button 
                {...props}
                color="secundary" 
                icon={<RiContrastLine />}
                onClick={handleToggleTheme}
            >Trocar Tema</Button>
        )
};