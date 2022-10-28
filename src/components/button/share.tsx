//Modules
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import { Input } from "../input";
import { Button } from "./index";
import { FiCopy } from 'react-icons/fi';
import { HiOutlineShare } from 'react-icons/hi';
import { IModalRef, Modal } from "../modal";
import { getSliceData, setUrl } from "../../store/slice";

export const ShareButton = () => {
    const dispatch = useDispatch();
    const { url, theme } = useSelector(getSliceData);
    const handleShowUrl = () => {
        const origin = document.location.origin,
              name =  encodeURI(document.querySelector('#name')?.textContent || ''),
              username = encodeURI(document.querySelector('#username')?.textContent || ''),
              content = encodeURI(document.querySelector('#content')?.textContent || '');
        const url = `${origin}/?preview=true&name=${name}&username=${username}&content=${content}&theme=${theme}`;
        dispatch(setUrl(url));
        modalRef.current?.handleOpen();
    };

    //Ref
    const modalRef = useRef<IModalRef>(null),
          inputRef = useRef<HTMLInputElement>(null);

    const handleCopy = () => {
        if(inputRef.current){
            inputRef.current.select();
            inputRef.current.setSelectionRange(0, 99999);
            document.execCommand('copy');
            alert('Link copiado.');
        };
    };

    return (
        <>
            <Button color="secundary" icon={<HiOutlineShare />} onClick={handleShowUrl}>Compartilhar</Button>
            <Modal title="Compartilhar" ref={modalRef}>
                <h2>Compartilhar o Link</h2>
                <Input readOnly icon={<FiCopy />} ref={inputRef} onClickIcon={handleCopy} value={url}/>
            </Modal>
        </>
    )
};