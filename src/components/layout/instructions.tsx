//Modules
import styled from "styled-components";

//Components
import { GoVerified } from 'react-icons/go';
import { RiContrastLine } from "react-icons/ri";
import { HiOutlineShare } from 'react-icons/hi';
import { FiImage, FiDownload } from "react-icons/fi";
import { useTranslated } from "../../hook/useTranslated";


export const Instructions = () => {
    const Container = styled.div`
        color:#fff;
        padding:1em;
        &>*{
            margin:.5em 0;
            line-height:2em;
        }

        code{
            color:#000;
            background-color:var(--secundary-color);
            padding:.5em;
            border-radius:4px;
            white-space: nowrap;
        }
    `;
    
    return(
        <Container>
            <h3><u>Como usar:</u></h3>
            <p dangerouslySetInnerHTML={{__html:useTranslated().instruction[0]}}/>
            <p dangerouslySetInnerHTML={{__html:useTranslated().instruction[1]}}/>
            <p dangerouslySetInnerHTML={{__html:useTranslated().instruction[2]}}/>
            <p dangerouslySetInnerHTML={{__html:useTranslated().instruction[3]}}/>
            <p dangerouslySetInnerHTML={{__html:useTranslated().instruction[4]}}/>
            <p dangerouslySetInnerHTML={{__html:useTranslated().instruction[5]}}/>
        </Container>
    )
};