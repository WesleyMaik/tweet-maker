//Modules
import styled from "styled-components";

export const Content = () => {
    const initContent = 'Escreva seu tweet aqui, toque para editar';

    const Container = styled.div`
        padding:.5em;
        font-size:18px;
        &:empty{
            &:after{
                color:#ddd;
                content:'Escreva seu tweet aqui, toque para editar';
            }
        }
    `;

    return(
        <Container className="to-edit" aria-label="Content" contentEditable spellCheck={false}>{ initContent }</Container>
    )
};