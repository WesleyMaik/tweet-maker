import { FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import { useTranslated } from "../../hook/useTranslated";

export const MyTwitter = () => {
    const Container = styled.p`
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        margin:0;
        padding:1em 0;

        a{
            color:#fff;
        }
    `;
    return(
        <Container>
            <a href='https://twitter.com/euwesleymaik' target='_blank'>{ useTranslated().followMe } @euwesleymaik <FaTwitter /></a>
        </Container>
    )
};