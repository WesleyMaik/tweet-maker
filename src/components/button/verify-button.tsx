//Modules
import { HTMLAttributes } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVerified, getSliceData } from '../../store/slice';

//Components
import { GoVerified } from "react-icons/go";
import { Button } from "./index";
import { useTranslated } from "../../hook/useTranslated";

export const VerifyButton = (props:HTMLAttributes<HTMLButtonElement>) => {
    const dispatch = useDispatch();
    const { verified } = useSelector(getSliceData);
    const handleToggleVerify = () => {
        dispatch(setVerified(!verified));
    };

    return(
            <Button 
                {...props} 
                color="primary"  
                icon={<GoVerified />}
                onClick={handleToggleVerify}
            >
                { Boolean(verified) ? useTranslated().unverify : useTranslated().verify }
            </Button>
    )
};