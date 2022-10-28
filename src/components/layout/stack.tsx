//Modules
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getSliceData } from "../../store/slice";
import { HTMLAttributes } from "react";

interface IStackProps{
    direction?: "row" | "column" | "row-reverse" | "column-reverse";
    gap?:string;
    alignItems?: "flex-start" | "center" | "flex-end";
    justifyContent?: "flex-start" | "center" | "flex-end";
    children?:any;
};

const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    gap:1em;
    flex-wrap:wrap;
`;

export const Stack = (props:HTMLAttributes<HTMLDivElement>) => {
    const { preview } = useSelector(getSliceData);

    return (
       <>
        {
            !Boolean(preview) &&
            <Container>{props.children}</Container>
        }
       </>
    )
}