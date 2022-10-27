//Modules
import { useState } from "react";
import styled from "styled-components";

import { BiPencil } from 'react-icons/bi'

export const Username = () => {
    const Container = styled.div`
        display:flex;
        flex-direction:column;

        .name, .username{
            margin:0;
            padding:0;
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

    const initialName = "Name",
          initialUsername = "Username";

    return(
        <Container>
            <h3 className="name to-edit" aria-label="name" contentEditable spellCheck={false}>{ initialName }</h3>
            <p className="username" aria-label="username">&#64;<span className="to-edit" contentEditable spellCheck={false}>{ initialUsername }</span></p>
        </Container>
    )
};