//Modules
import styled from "styled-components";

interface IStackProps{
    direction?: "row" | "column" | "row-reverse" | "column-reverse";
    gap?:string;
    alignItems?: "flex-start" | "center" | "flex-end";
    justifyContent?: "flex-start" | "center" | "flex-end";
    children?:any;
};

export const Stack = ({direction, alignItems, gap, justifyContent, children}:IStackProps) => {
    const Container = styled.div`
        display:flex;
        flex-direction:${(direction) || 'row'};
        justify-content:${(justifyContent) || 'flex-start'};
        align-items:${(alignItems) || 'flex-start'};
        gap:${(gap) || '1em'};
    `;

    return <Container children={children}/>
}