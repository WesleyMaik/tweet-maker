//Modules
import { useRef } from "react";
import styled from "styled-components";
import { setPreview, setTheme } from "../store/slice";
import { useDispatch } from "react-redux";
import { useGetUrlParams } from "../hook/useGetUrlParams";

//Components
import { Logo } from "../components/layout/logo";
import { Stack } from "../components/layout/stack";
import { Tweet } from "../components/tweet";
import { Button } from "../components/button";
import { MyTwitter } from "../components/layout/my-twitter";
import { ImageButton } from "../components/button/image-button";
import { ShareButton } from "../components/button/share";
import { ToggleButton } from "../components/button/toggle-theme";
import { VerifyButton } from "../components/button/verify-button";
import { PreviewButton } from "../components/button/preview-button";
import { Instructions } from "../components/layout/instructions";
import { FiArrowDown, FiDownload } from 'react-icons/fi';

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
    position:relative;
    margin:auto;

    .arrow{
        --size:24px;
        position:absolute;
        bottom:0;
        transform:translateY(-150%);
        
        svg{
            width:var(--size);
            height:var(--size);
            animation:scroll ease 2s infinite;
        }

        @keyframes scroll{
            0%, 100%{ transform: translateY(0);}
            50%{ transform: translateY(-50%); }
        }
    }
`;

const App = () => {
    //Preview statement
    const [preview, theme] = useGetUrlParams(['preview','theme']);
    
    const dispatch = useDispatch();
    if(preview == 'true'){        
        dispatch(setPreview(true));
    };

    if(theme == "light" || theme == "dim" || theme == "dark"){
        dispatch(setTheme(theme));
    };

    return(
        <>
            <Logo type="white"/>
            <Main>
                { !Boolean(preview == 'true') && <PreviewButton /> }
                <Tweet />
                <Stack>
                    <VerifyButton />
                    <ToggleButton />
                    <ImageButton />
                    <ShareButton />
                    <Button color="secundary" icon={<FiDownload/>}>Baixar Tweet</Button>
                </Stack>
                { 
                    !Boolean(preview == 'true') &&
                    <div className="arrow">
                        <FiArrowDown color="#fff"/>
                    </div>
                }
            </Main>
            { 
                !Boolean(preview == 'true') &&
                <>
                    <MyTwitter />
                    <Instructions />
                </>
            }
        </>
    )
};

export default App;