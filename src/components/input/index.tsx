//Modules
import styled from "styled-components";
import { forwardRef, HTMLAttributes, useImperativeHandle, useState } from "react";

export interface IInputProps extends HTMLAttributes<HTMLInputElement>{
    icon?:JSX.Element,
    onClickIcon?:() => void,
    readOnly?:boolean,
    value?:string,
};

const InputContainer = styled.label`
    min-width:6em;
    display:flex;
    align-items:center;
    background-color:#fff;
    outline:2px solid rgba(0,0,0,0);
    border:1px solid var(--primary-color);
    border-radius:6px;
    padding:.25em;
    transition:all ease .5s;

    &:has(.input_field:focus){
        outline:2px solid #00bfff80;
    }

    .input_field{
        width:100%;
        height:2em;
        border:none;
        outline:none;
    }

    .icon{
        cursor: pointer;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:.25em;
    }
`;

export const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
    return(
        <InputContainer>
            <input {...props} className="input_field" ref={ref} />
            {
                Boolean(props.icon) &&
                <div className="icon" onClick={props.onClickIcon}>
                    { props.icon }
                </div>
            }
        </InputContainer>
    )
});

Input.displayName = 'Input';