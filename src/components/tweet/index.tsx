//Modules
import styled from "styled-components"
import { useGetUrlParams } from "../../hook/useGetUrlParams";
import { forwardRef, RefObject, useRef } from "react";

//Components
import { Image } from "./image";
import { Avatar } from "../user/avatar";
import { Content } from "./content";
import { Username } from "../user/username";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Comment, Like, Reply, Share } from "../button/twitter-buttons";
import { useSelector } from "react-redux";
import { getSliceData } from "../../store/slice";

const Container = styled.div`
    width:100%;
    min-height:18em;

    display:flex;
    flex-direction:column;
    gap:.5em;

    font-family:'Twitter Chirp';

    padding:1em;
    overflow:hidden;

    &:not([data-color]), &[data-color='light']{
        color:#000;
        background-color:var(--light-mode) !important;
    }
    &[data-color='dim']{
        color:#fff;

        background-color:var(--dim-mode) !important;
    }
    &[data-color='dark']{
        color:#fff;
        background-color:var(--dark-mode) !important;
    }
    &[data-preview='true']{
        #content{
            &:after{
                display:none;
            }
        }
        .to-edit{
            border:none;
            outline:none;
        }
    }

    .header{
        display:flex;
        align-items:center;
        gap:1em;

        .options{
            margin-left:auto;
        }
    }

    .content{
        min-height:6em;
    }

    .action{
        margin-top:auto;
        .buttons{
            display:flex;
            justify-content:space-around;
            align-items:center;
            gap:1em;
            padding:.5em;
            
            .tweet-button{
                cursor: pointer;

                &.active{
                    &.reply{
                        svg{
                            fill:#00e193;
                        }
                    }
                    &.like{
                        svg{
                            fill:#e10040;
                        }
                    }
                }

                svg{
                    fill:#5b7083;
                    width:1.5em;
                    transition:all ease .25s;
                }
            }
        }
    }
`;

export const Tweet = forwardRef<HTMLDivElement, any>((props, ref) => {
    const preview = useGetUrlParams('preview') || useSelector(getSliceData).preview;
    const { theme } = useSelector(getSliceData);
    
    //Refs
    const replyRef = useRef<HTMLDivElement>(null),
          likeRef = useRef<HTMLDivElement>(null);

    //Toggle active
    const handleActiveToggle = (element:RefObject<HTMLDivElement>) => {
        element.current?.classList.toggle('active');
    };

    return(
        <Container id="tweet" ref={ref} data-preview={preview} data-color={theme}>
            <div className="header">
                <Avatar />
                <Username />
                <HiOutlineDotsVertical className="options"/>
            </div>
            <div className="content" >
                <Content />
                <Image />
            </div>
            <div className="action">
                <hr/>
                <div className="buttons">
                    <div className="tweet-button">
                        <Comment />
                    </div>
                    <div className="tweet-button reply" ref={replyRef} onClick={() => handleActiveToggle(replyRef)}>
                        <Reply />
                    </div>
                    <div className="tweet-button like" ref={likeRef} onClick={() => handleActiveToggle(likeRef)}>
                        <Like />
                    </div>
                    <div className="tweet-button">
                        <Share />
                    </div>
                </div>
            </div>
        </Container>
    )
}); 

Tweet.displayName = 'Tweet';