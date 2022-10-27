//Modules
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getSliceData, setImage } from "../../store/slice";

//Components
import { SlClose } from "react-icons/sl";

export const Image = () => {
    const dispatch = useDispatch();
    const { image } = useSelector(getSliceData);
    const Container = styled.div`
        width:100%;
        height:26em;
        background-image:url('${image}');
        background-position:center;
        background-repeat:no-repeat;
        background-size:cover;
        padding:1em;
        border-radius:4px;
        
        &:hover{
            .close{
                visibility:visible;
            }
        }

        .close{
            cursor: pointer;
            display:block;
            color:#fff;
            font-size:3em;
            margin-left:auto;
            visibility:hidden;
            background-color:#00000020;
            border-radius:50%;
        }
    `;

    const handleCloseImage = () => {
        dispatch(setImage(null));
    };
    
    return(
        <>
            { 
                Boolean(image) && 
                <Container>
                    <SlClose className="close" onClick={handleCloseImage}/>
                </Container>
            }
        </>
    )
};