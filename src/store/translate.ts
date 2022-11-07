export interface ITranslated { 
    lang:"EN" | "PT";
    preview: string;
    name: string;
    username: string;
    content: string;
    verify: string;
    unverify: string;
    theme: string;
    addImage: string;
    share: string;
    modal: {
        title: string;
        heading: string;
        text: string;
        copy: string;
        close: string;
    };
    downloadTweet: string;
    followMe: string;
    howToUse: string;
    instruction: string[];
    serviceTerms: string;
    privacyPolicy: string;
};

export const translated:(lang:"PT" | "EN") => ITranslated = (lang:"PT" | "EN") => {
    if(lang === "EN"){
        return {
            lang:"EN",
            preview:"Preview",
            name:"Name",
            username:"Username",
            content:"Write your tweet here, tap to edit",
            verify:"Verify",
            unverify:"Unverify",
            theme:"Change Theme",
            addImage:"Add/Change Image",
            share:"Share",
            modal:{
                title:"Share",
                heading:"Share the link",
                text:"For privacy and storage reasons, images uploaded to the Tweet will not be uploaded at the time of sharing. If you want the images, we recommend that you download a screenshot of the Tweet from the Download Tweet button.",
                copy:"Copy",
                close:"Close"
            },
            downloadTweet:"Download Tweet",
            followMe:"Follow me on Twitter",
            howToUse:"How to Use:",
            instruction:[
                "In this editor you can edit the <u>profile</u> photo, the <u>name</u>, the <u>username</u>, the <u>tweet content</u> just by clicking on the corresponding areas.",
                "If you want to show your name as verified, click the <code>Verify</code> button.",
                "To change the theme you can click the <code>Change Theme</code> button and switch between the <u>Light</u>, <u>Dim</u> and <u>Dark</u> themes.",
                "You can add or change a photo in your tweet by clicking the <code>Add/Change Image</code> button.",
                "To share your tweet as a link just click the <code>Share</code> button.",
                "If you want to download your tweet as an image, click the <code>Download Tweet</code> button."
            ],
            serviceTerms:"Service Terms",
            privacyPolicy:"Privacy Policy"
        }
    }else{
        return {
            lang:"PT",
            preview:"Pré-visualizar",
            name:"Nome",
            username:"Usuário",
            content:"Escreva seu tweet aqui, toque para editar",
            verify:"Verificar",
            unverify:"Não Verificar",
            theme:"Mudar Tema",
            addImage:"Adicionar/Trocar Imagem",
            share:"Compartilhar",
            modal:{
                title:"Compartilhar",
                heading:"Compartilhar o Link",
                text:"Por questões de privacidade e armazenamento, imagens carregadas no Tweet não serão carregadas na hora do compartilhamento. Caso queira as imagens, recomendamos que baixe uma captura do Tweet no botão Baixar Tweet.",
                copy:"Copiar",
                close:"Fechar"
            },
            downloadTweet:"Baixar Tweet",
            followMe:"Siga me no Twitter",
            howToUse:"Como usar:",
            instruction:[
                "Nesse editor você pode editar a foto de <u>perfil</u>, o <u>nome</u>, o <u>nome de usuário</u>, o <u>conteúdo do tweet</u> apenas clicando nas áreas correspondentes.",
                "Caso você queira mostrar seu nome como verificado, clique no botão <code>Verificar</code>.",
                "Para trocar o tema você pode clicar no botão <code>Trocar Tema</code> e alternar entre os temas <u>Leve</u>, <u>Escuro</u> e <u>Sombrio</u>.",
                "Você pode adicionar ou trocar uma foto no seu tweet clicando no botão <code>Adicionar/Trocar imagem</code>.",
                "Para compartilhar seu tweet como um link basta clicar no botão <code>Compartilhar</code>.",
                "Caso você queira baixar seu tweet como uma imagem, clique no botão <code>Baixar Tweet</code>."
            ],
            serviceTerms:"Termos de Serviço",
            privacyPolicy:"Política de Privacidade"
        }
    };
};

