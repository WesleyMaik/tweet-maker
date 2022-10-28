//Modules
import { useSelector } from "react-redux";
import { getSliceData } from '../../store/slice';
import { useGetUrlParams } from '../../hook/useGetUrlParams';

//Components
import { HiBadgeCheck } from "react-icons/hi";


export const Verify = () => {
    const { verified } = useSelector(getSliceData);
    const virifyParam = useGetUrlParams('verify') == 'true';

    return(
        <>
            { Boolean(virifyParam || verified) && <HiBadgeCheck size={18} color={'var(--primary-color)'}/> }
        </>
    )
};