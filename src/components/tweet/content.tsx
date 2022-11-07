//Modules
import parse from 'html-react-parser';
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useGetUrlParams } from "../../hook/useGetUrlParams";
import { getSliceData } from "../../store/slice";
import { useTranslated } from '../../hook/useTranslated';

const Container = styled.div`
    padding:.5em;
    font-size:18px;
    &:empty{
        &:after{
            color:#ddd;
            content:'...';
        }
    }
`;

export const Content = () => {
    const content = useGetUrlParams('content'),
          { preview } = useSelector(getSliceData),
          contentEditable = !preview,
          initContent = parse(content as string || useTranslated().content);

    return(
        <Container 
            id="content" 
            className="to-edit" 
            aria-label="Content" 
            contentEditable={contentEditable} 
            spellCheck={false}
        >{  initContent }</Container>
    )
};