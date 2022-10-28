//Modules
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useGetUrlParams } from "../../hook/useGetUrlParams";
import { getSliceData } from "../../store/slice";

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

export const Content = () => {
    const content = useGetUrlParams('content');
    const { preview } = useSelector(getSliceData);
    const contentEditable = !preview;
    
    const initContent = content || 'Escreva seu tweet aqui, toque para editar';

    return(
        <Container 
            id="content" 
            className="to-edit" 
            aria-label="Content" 
            contentEditable={contentEditable} 
            spellCheck={false}
        >{ initContent }</Container>
    )
};