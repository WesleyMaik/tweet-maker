//Modules
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useGetUrlParams } from "../../hook/useGetUrlParams";
import { useTranslated } from "../../hook/useTranslated";
import { getSliceData } from "../../store/slice";
import { translated } from "../../store/translate";

//Components
import { Verify } from "./verify";

const Container = styled.div`
    display:flex;
    flex-direction:column;

    .name, .username{
        margin:.25em 0;
    }

    #name ,#username{
        min-width:3em;
    }

    .name{
        max-width:300px;
        display:flex;
        align-items:center;
        gap:.25em;
    }
    .username{
        color:#c4cfd6;
        padding:0;
        span{
            padding:.25em;
            padding-left:0;
        }
    }
`;

export const Username = () => {
    const [name, username] = useGetUrlParams(['name', 'username']);
    const { preview } = useSelector(getSliceData);
    const contentEditable = !preview;

    const initialName = name ?? useTranslated().name,
          initialUsername = username ?? useTranslated().username;

    const preventEnter = (ev:any) => {
        if (ev.which === 13) {
            ev.preventDefault();
        };
    };

    return(
        <Container>
            <h3 className="name" aria-label="name">
                <span id="name" className="to-edit" contentEditable={contentEditable} spellCheck={false} onKeyDown={preventEnter}>
                    { initialName }
                </span><Verify />
            </h3>
            <p className="username" aria-label="username">
                &#64;<span id="username" className="to-edit" contentEditable={contentEditable} spellCheck={false} onKeyDown={preventEnter}>
                    { initialUsername }
                </span>
            </p>
        </Container>
    )
};