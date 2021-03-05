import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardStyled, PreviewImage, CardContentStyled } from "./styles";
import { goToImageDetail } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";



const ImageCard = (props) => {
    const history = useHistory()
    
    return (
         <CardStyled>
            <CardContentStyled onClick={() => goToImageDetail(history, props.id)}>
                <PreviewImage src={props.file}/>
                <Typography variant="h7" component="h2">
                    {props.subtitle}
                </Typography>
            </CardContentStyled>
         </CardStyled>
    )}

export default ImageCard