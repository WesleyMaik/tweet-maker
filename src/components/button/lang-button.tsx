import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useTranslated } from "../../hook/useTranslated";
import { setLang } from "../../store/slice";

const Container = styled.div`
    display:flex;
    align-items:center;
    gap:.5em;

    &[data-selected="EN"]{
        .eua{
            outline:1px solid #fff;
        }
    }
    &[data-selected="PT"]{
        .brazil{
            outline:1px solid #fff;
        }
    }

    .flag{
        cursor: pointer;
        border-radius:50%;
    }
`;

export const LangButton = () => {
    const { lang } = useTranslated();
    const dispatch = useDispatch();

    return(
        <Container data-selected={lang}>
            <img 
                className="flag brazil" 
                src="./brazil.png" 
                onClick={() => dispatch(setLang('PT'))}
            />
            <img 
                className="flag eua" 
                src="./eua.png" 
                onClick={() => dispatch(setLang('EN'))}
            />
        </Container>
    )
};