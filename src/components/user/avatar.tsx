//Module
import { useCallback, useState } from "react";
import styled from "styled-components";

export const Avatar = () => {
    const [image, setImage] = useState<string | null>(null),
    handleSetImage = useCallback((file:string) => {
        setImage(file);
    }, [image]);

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
        background-image:${Boolean(image) ? `url('${image}')` : 'url("/default.png")' };
        border-radius:50%;
    `;

    const handleChangeAvatar = async () => {
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
    };
    
    return(
        <Container className="to-edit" onClick={handleChangeAvatar}/>
    )
};