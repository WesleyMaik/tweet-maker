//Modules
import styled from "styled-components";

export const Content = () => {
    const initContent = 'Your tweet here, tap to edit';

    const Container = styled.div`
        padding:.5em;
        font-size:18px;
        &:empty{
            &:after{
                color:#ddd;
                content:'Your tweet here, tap to edit';
            }
        }
    `;

    return(
        <Container className="to-edit" aria-label="Content" contentEditable spellCheck={false}>{ initContent }</Container>
    )
};