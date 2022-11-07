//Modules
import styled from "styled-components";
import { setPreview, setTheme } from "../store/slice";
import { useDispatch } from "react-redux";
import { useGetUrlParams } from "../hook/useGetUrlParams";
import html2canvas from 'html2canvas'

//Components
import { Logo } from "../components/layout/logo";
import { Stack } from "../components/layout/stack";
import { Tweet } from "../components/tweet";
import { Button } from "../components/button";
import { Footer } from "../components/layout/footer";
import { MyTwitter } from "../components/layout/my-twitter";
import { ImageButton } from "../components/button/image-button";
import { ShareButton } from "../components/button/share";
import { ToggleButton } from "../components/button/toggle-theme";
import { VerifyButton } from "../components/button/verify-button";
import { PreviewButton } from "../components/button/preview-button";
import { Instructions } from "../components/layout/instructions";
import { FiArrowDown, FiDownload } from 'react-icons/fi';
import { DownloadButton } from "../components/button/download-button";
import { LangButton } from "../components/button/lang-button";

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
        bottom:-2%;
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
    
    //Preview
    const dispatch = useDispatch();
    if(preview == 'true'){        
        dispatch(setPreview(true));
    };

    //Theme
    if(theme == "light" || theme == "dim" || theme == "dark"){
        dispatch(setTheme(theme));
    };


    //Download Tweet
    const downloadTweet = async () => {
        await dispatch(setPreview(true));
        await html2canvas(document.querySelector('#tweet')!).then((result) => {
            const link = document.createElement('a');
            link.download = 'tweet.png';
            link.href = result.toDataURL();
            link.click();
        });
        dispatch(setPreview(false));
    };
    
    return(
        <>  
            <LangButton />
            <Logo type="white"/>
            <Main id="main">
                { !Boolean(preview == 'true') && <PreviewButton /> }
                <Tweet />
                <Stack>
                    <VerifyButton />
                    <ToggleButton />
                    <ImageButton />
                    <ShareButton />
                    <DownloadButton onClick={downloadTweet}/>
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
            <Footer />
        </>
    )
};

export default App;