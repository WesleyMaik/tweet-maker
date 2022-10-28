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
        justify-content:${(justifyContent) || 'center'};
        align-items:${(alignItems) || 'center'};
        gap:${(gap) || '1em'};
        flex-wrap:wrap;
    `;

    return <Container children={children}/>
}