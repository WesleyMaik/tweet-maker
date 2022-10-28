//Modules
import styled from "styled-components";

//Components
import { GoVerified } from 'react-icons/go';
import { RiContrastLine } from "react-icons/ri";
import { HiOutlineShare } from 'react-icons/hi';
import { FiImage, FiDownload } from "react-icons/fi";


export const Instructions = () => {
    const Container = styled.div`
        color:#fff;
        padding:1em;
        &>*{
            margin:.5em 0;
            line-height:2em;
        }

        code{
            color:#000;
            background-color:var(--secundary-color);
            padding:.5em;
            border-radius:4px;
            white-space: nowrap;
        }
    `;
    return(
        <Container>
            <h3><u>Como usar:</u></h3>
            <p>Nesse editor você pode editar a foto de <u>perfil</u>, o <u>nome</u>, o <u>nome de usuário</u>, o <u>conteúdo do tweet</u> apenas clicando nas áreas correspondentes.</p>
            <p>Caso você queira mostrar seu nome como verificado, clique no botão <code>Verificar <GoVerified/></code>.</p>
            <p>Para trocar o tema você pode clicar no botão <code>Trocar Tema <RiContrastLine /></code> e alternar entre os temas <u>Leve</u>, <u>Escuro</u> e <u>Sombrio</u>.</p>
            <p>Você pode adicionar ou trocar uma foto no seu tweet clicando no botão <code>Adicionar/Trocar imagem <FiImage /></code>.</p>
            <p>Para compartilhar seu tweet como um link basta clicar no botão <code>Compartilhar <HiOutlineShare /></code>.</p>
            <p>Caso você queira baixar seu tweet como uma imagem, clique no botão <code>Baixar Tweet <FiDownload/></code>.</p>
        </Container>
    )
};