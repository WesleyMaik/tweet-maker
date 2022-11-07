//Modules
import { useDispatch } from "react-redux";
import { setImage } from "../../store/slice";

//Components
import { Button } from "./index";
import { FiImage} from 'react-icons/fi'
import { HTMLAttributes } from "react";
import { useTranslated } from "../../hook/useTranslated";

export const ImageButton = (props:HTMLAttributes<HTMLButtonElement>) => {
    const dispatch = useDispatch();
    const handleImage = () => {
        const file = document.createElement('input')
        file.type = "file";
        file.accept = "image/*";
        file.click();
        file.addEventListener('change', () => {
            const value = file.files![0];
            const fileReader = new FileReader();
            fileReader.readAsDataURL(value);
            fileReader.addEventListener("load", function(){
                dispatch(setImage((this.result as string)))
            })
        });
    };

    return(
        <Button 
            {...props}
            color="secundary" 
            icon={<FiImage/>}
            onClick={handleImage}
        >{ useTranslated().addImage }</Button>
    )
};