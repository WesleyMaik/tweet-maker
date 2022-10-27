import { Button } from "../button"
import { FiDownload} from 'react-icons/fi'

export const Tweet = () => {
    return(
        <Button icon={<FiDownload />}>Baixar Tweet</Button>
    )
}