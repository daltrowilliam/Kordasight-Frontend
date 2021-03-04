import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardStyled } from "./styles";
import { goToImageDetail } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";



const ImageCard = (props) => {
    const history = useHistory()
    
    return (
         <CardStyled>
            <CardContent onClick={() => goToImageDetail(history, props.id)}>
                <img src={props.file}/>
                <Typography variant="h5" component="h2">
                    {props.subtitle}
                </Typography>
            </CardContent>
         </CardStyled>
    )}

export default ImageCard