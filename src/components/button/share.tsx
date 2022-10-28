//Components
import { Button } from "./index";
import { HiOutlineShare } from 'react-icons/hi';

export const ShareButton = () => {
    return (
        <Button color="secundary" icon={<HiOutlineShare />}>Compartilhar</Button>
    )
};