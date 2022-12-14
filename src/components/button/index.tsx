//Modules
import { HTMLAttributes } from "react";
import styled from "styled-components";

interface IButtonProps extends HTMLAttributes<HTMLButtonElement>{
    color?:"primary" | "secundary";
    icon?:JSX.Element;
};

export const Button = (props:IButtonProps) => {
    const ButtonContainer = styled.button`
        user-select:none;
        display:flex;
        justify-content:center;
        align-items:center;
        gap:.5em;
        padding:.75em;
        outline:none;
        border:none;
        border-radius:4px;
        transition:all ease .75s;
        box-shadow:0 2px 4px #00000020;
        ${
            props.color == 'secundary' ?
            'background-color:var(--secundary-color);': 
            'background-color:#9ce6ff;'
        }
        
        &:hover{
            cursor: pointer;
            opacity:.75;
        }
        &:active{
            transform:scale(.95);
        }
        .icon{
            display:flex;
            justify-content:center;
            align-items:center;
        }
    `;

    return (
        <ButtonContainer {...props}>
            { props.children }
            { Boolean(props.icon) && <span className="icon">{ props.icon }</span> }
        </ButtonContainer>
    );
};