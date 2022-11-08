//Modules
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useTranslated } from "../../hook/useTranslated";
import { setLang } from "../../store/slice";
import brazil from "../../../public/images/brazil.png";
import eua from "../../../public/images/eua.png";

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
                src={brazil} 
                alt="Brazil Flag"
                onClick={() => dispatch(setLang('PT'))}
            />
            <img 
                className="flag eua" 
                src={eua}
                alt="Eua Flag"
                onClick={() => dispatch(setLang('EN'))}
            />
        </Container>
    )
};