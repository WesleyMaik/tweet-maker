//Module
import styled from "styled-components";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { getSliceData } from "../../store/slice";
import user from "../../../public/images/default.png";

const Container = styled.div`
    --size:3em;
    cursor: pointer;
    min-width:var(--size);
    min-height:var(--size);
    width:var(--size);
    height:var(--size);
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    border-radius:50%;
`;

export const Avatar = () => {
    const [image, setImage] = useState<string | null>(null),
    handleSetImage = useCallback((file:string) => {
        setImage(file);
    }, [image]);

    const { preview } = useSelector(getSliceData);
    const handleChangeAvatar = async () => {
        if(!preview){
            const file = document.createElement('input')
            file.type = "file";
            file.accept = 'image/*'
            file.click();
            file.addEventListener('change', () => {
                const value = file.files![0];
                const fileReader = new FileReader();
                fileReader.readAsDataURL(value);
                fileReader.addEventListener("load", function(){
                    handleSetImage((this.result as string));
                })
            })
        }else{
            return null;
        }
    };
    
    return(
        <Container 
            className="to-edit" 
            onClick={handleChangeAvatar} 
            style={{backgroundImage:`${Boolean(image) ? `url('${image}')` : `url(${user})` }`}}
        />
    )
};