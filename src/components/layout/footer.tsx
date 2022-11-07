//Modules
import styled from "styled-components"
import { useTranslated } from "../../hook/useTranslated";

export const Footer = () => {
    const Footer = styled.footer`
        display:flex;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        gap:.5em;
        color:#fff;
        background-color:#17181a;
        padding:.5em;
        border-radius:4px 4px 0 0;
        *{color:#fff;}
    `;

    return(
        <Footer>
            <a href="https://github.com/WesleyMaik/tweet-maker" target="_blank">Tweet Maker</a>
            &#8901;
            <a href="./terms.html">{ useTranslated().serviceTerms }</a>
            &#8901;
            <a href="./policy.html">{ useTranslated().privacyPolicy }</a>
        </Footer>
    )
}