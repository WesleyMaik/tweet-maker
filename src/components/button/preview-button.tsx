//Modules
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getSliceData, setPreview } from "../../store/slice";

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
    const { preview } = useSelector(getSliceData);

    const handleTogglePreview = () => {
        dispatch(setPreview(!preview));
    };

    return(
        <Container onChange={handleTogglePreview}>
            <span>Pré-visualizar</span>
            <input type="checkbox" />
        </Container>
    )
};