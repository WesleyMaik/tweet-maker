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

const App = () => {
    const Main = styled.main`
        max-width:768px;
        width:100%;
        min-height:600px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:1em;
        margin:auto;
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
        <Main>
            <Button icon={<GoVerified />}>Verificado</Button>
            <Tweet ref={tweetRef}/>
            <Stack>
                <ToggleButton onClick={handleToggleTheme}/>
                <ImageButton />
                <Button color="secundary" icon={<FiDownload/>}>Baixar Tweet</Button>
            </Stack>
        </Main>
    )
};

export default App;