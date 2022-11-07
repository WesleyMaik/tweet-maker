//Modules
import { useTranslated } from "../../hook/useTranslated";
import { HTMLAttributes } from "react";

//Components
import { Button } from "./index";
import { FiDownload } from "react-icons/fi";

export const DownloadButton = (props:HTMLAttributes<HTMLButtonElement>) => {
    return(
        <Button 
            {...props}
            color="secundary" 
            icon={<FiDownload/>}
        >{ useTranslated().downloadTweet }</Button>
    )
};