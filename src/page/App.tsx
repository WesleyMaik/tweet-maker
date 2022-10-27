//Modules
import { useRef } from "react";
import styled from "styled-components";
import { Button } from "../components/button";
import { Tweet } from "../components/tweet";

const App = () => {
    const Main = styled.main`
        max-width:768px;
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        margin:auto;
    `;


    return(
        <Main>
            <Button color="secundary">Teste</Button>
            <div style={{maxWidth:300}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore laborum ullam a aspernatur perspiciatis officiis soluta! Sed ex unde pariatur odio suscipit, alias, ut assumenda nulla provident voluptas tempora dolorem!
            </div>
            {/*<Tweet/>*/}
        </Main>
    )
};

export default App;