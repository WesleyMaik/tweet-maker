//Modules
import { useRef } from "react";
import styled from "styled-components";

//Components
import { Stack } from "../components/layout/stack";
import { Tweet } from "../components/tweet";
import { Button } from "../components/button";
import { FiDownload } from 'react-icons/fi';
import { GoVerified } from 'react-icons/go';
import { ImageButton } from "../components/button/image-button";
import { ToggleButton } from "../components/button/toggle-theme";
import { ShareButton } from "../components/button/share";
import { Logo } from "../components/layout/logo";
import { Instructions } from "../components/layout/instructions";
import { MyTwitter } from "../components/layout/my-twitter";

const App = () => {
    const Main = styled.main`
        max-width:768px;
        width:100%;
        min-height:600px;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:1em;
        margin:auto;

        .logo{
            margin-bottom:auto;
        }
    `;

    const tweetRef = useRef<HTMLDivElement>(null);
    let theme = 0;
    const handleToggleTheme = () => {
        theme++;
        if(theme > 2) theme = 0;
        console.log(theme);
        
        if(tweetRef.current){
            switch(theme){
                case 0: (tweetRef.current.dataset.color = 'light'); break;
                case 1: (tweetRef.current.dataset.color = 'dim'); break;
                case 2: (tweetRef.current.dataset.color = 'dark'); break;
            };
        };
    };

    return(
        <>
            <Logo className="logo" type="white"/>
            <Main>
                <Tweet ref={tweetRef}/>
                <Stack>
                    <Button icon={<GoVerified />}>Verificado</Button>
                    <ToggleButton onClick={handleToggleTheme}/>
                    <ImageButton />
                    <ShareButton />
                    <Button color="secundary" icon={<FiDownload/>}>Baixar Tweet</Button>
                </Stack>
            </Main>
            <MyTwitter />
            <Instructions />
        </>
    )
};

export default App;