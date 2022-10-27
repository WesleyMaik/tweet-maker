import { HTMLAttributes } from "react";
import styled from "styled-components";

type TColorButton = "primary" | "secundary";

interface IButtonProps extends HTMLAttributes<HTMLButtonElement>{
    color?:TColorButton;
    icon?:JSX.Element;
};

export const Button = (props:IButtonProps) => {
    const Button = styled.button`
        display:flex;
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
            'background-color:var(--primary-color);'
        }
        
        &:hover{
            cursor: pointer;
            opacity:.75;
        }
        &:active{
            transform:scale(.95);
        }
    `;
    return (
        <Button {...props}>
            { props.children }
            { Boolean(props.icon) && <span className="icon">{ props.icon }</span> }
        </Button>
    );
};