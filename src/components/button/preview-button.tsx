//Modules
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setPreview } from "../../store/slice";
import { useTranslated } from "../../hook/useTranslated";

const Container = styled.label`
    cursor: pointer;
    width:fit-content;
    display:flex;
    align-items:center;
    user-select:none;
    input{
        all:unset;
        width:1em;
        height:1em;
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:#fff;
        border-radius:50%;
        position:relative;
        margin:.25em;

        &:after{
            content:'';
            width:50%;
            height:50%;
            border-radius:50%;
            position:absolute;
            background-color:var(--primary-color);
            transition:all ease .125s;
            transform:scale(0);
        }

        &:checked{
            &:after{
                transform:scale(1);
            }
        }
    }
`;

export const PreviewButton = () => {
    const dispatch = useDispatch();
    const handleTogglePreview = (e:any) => {
        dispatch(setPreview(e.target?.checked));
    };

    return(
        <Container onChange={handleTogglePreview}>
            <span>{ useTranslated().preview }</span>
            <input type="checkbox" />
        </Container>
    )
};