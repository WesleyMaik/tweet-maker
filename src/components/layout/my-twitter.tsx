import { FaTwitter } from "react-icons/fa";
import styled from "styled-components";

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
            <a href='https://twitter.com/euwesleymaik' target='_blank'>Me siga no twitter @euwesleymaik <FaTwitter /></a>
        </Container>
    )
};