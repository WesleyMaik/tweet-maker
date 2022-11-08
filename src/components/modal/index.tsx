//Modules
import styled from "styled-components";
import { useTranslated } from "../../hook/useTranslated";
import { forwardRef, HTMLAttributes, useCallback, useImperativeHandle, useState } from "react";


//Components
import { Button } from "../button";
import { RiCloseCircleFill } from "react-icons/ri";

export interface IModalProps extends HTMLAttributes<HTMLDivElement>{
    footerButtons?:JSX.Element,
    closeText?:string
};

export interface IModalRef{
    handleOpen: () => void,
    handleClose: () => void,
    isOpen: boolean
};

const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    top:0;
    left:0;
    padding:1em;
    background-color:#00000080;
    backdrop-filter:blur(4px);
    z-index:999;
    animation:fade ease .5s forwards;

    .container_modal{
        max-width:600px;
        max-height:95%;
        width:100%;
        position:relative;
        background-color:#fff;
        padding:1em;
        border-radius:8px;
        animation:appear ease .5s forwards;

        .close_modal{
            cursor: pointer;
            display:flex;
            justify-content:center;
            align-items:center;
            position:absolute;
            top:0;
            right:0;
            transform:translate(25%, -25%);
            background-color:#fff;
            border-radius:50%;
        }

        .footer_modal{
            display:flex;
            flex-direction:row;
            justify-content:flex-end;
            align-items:center;
            gap:.5em;
        }
    }
`;

export const Modal = forwardRef<IModalRef, IModalProps>((props, ref) => {
    const [isOpen, setOpen] = useState(false),
    handleOpen = useCallback(() => {
        document.querySelector('html')!.style.overflow = 'hidden';
        setOpen(true)
    }, [isOpen]),
    handleClose = useCallback(() => {
        document.querySelector('html')!.style.overflow = 'auto';
        setOpen(false)
    }, [isOpen]);

    useImperativeHandle(ref, () => ({
        handleOpen, 
        handleClose,
        isOpen
    }));


    document.addEventListener('keyup', (e) => {
        if(e.key === "Escape") {
            handleClose();
        };
    });

    return(
        <>
            {
                isOpen ?
                <Container>
                    <div className="container_modal">
                        <div className="close_modal" onClick={handleClose}>
                            <RiCloseCircleFill size={28}/>
                        </div>  
                        <div className="head_modal">
                            { props.title }
                        </div>
                        <hr/>
                        <div className="content_modal">
                            { props.children }
                        </div>
                        <hr/>
                        <div className="footer_modal">
                            { props.footerButtons }
                            <Button 
                                style={{
                                    backgroundColor:"#000", 
                                    color:"#fff"
                                }} 
                                onClick={handleClose}
                            >{ props.closeText || "Fechar" }</Button>
                        </div>
                    </div>
                </Container>
                : null
            }
        </>
    )
});

Modal.displayName = 'Modal';