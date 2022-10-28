import { FiImage } from "react-icons/fi";
import styled from "styled-components";

export const Instructions = () => {
    const Container = styled.div`
        color:#fff;
        padding:1em;
        &>*{
            margin:.5em 0;
        }

        code{
            color:#000;
            background-color:var(--secundary-color);
            padding:.5em;
            border-radius:4px;
        }
    `;
    return(
        <Container>
            <h4>Como usar:</h4>
            <p>Nesse editor você pode editar a foto de perfil, o nome, o nome de usuário, o conteúdo do tweet apenas clicando nas áreas correspondentes.</p>

            <p>Você pode adicionar ou trocar uma foto no seu tweet clicando no botão <code>Adicionar/Trocar imagem <FiImage /></code>.</p>
        </Container>
    )
};