import { useParams } from 'react-router-dom';
import logo from '../../assets/img_Logo_para_fundo_vinho.svg'
import { useProtectPage } from '../../hooks/useProtectPage';
import {useRequestData} from "../../hooks/useRequestData";
import {BASE_URL} from "../../constants/apiConstants"
import { Typography } from '@material-ui/core';
import {Logomarca, LogoContainer, ImageDetailPageContainer,CardStyled} from "./styles"
import CardContent from '@material-ui/core/CardContent';
import { useHistory } from "react-router-dom";


const ImageDetailPage = () => {
    const history = useHistory()
    useProtectPage()
    const params = useParams()
    const {data, getData} = useRequestData(`${BASE_URL}/image/${params.id}`, [])
    //verificar complemento do data
    const imageDetails = data.image
  

    return (
        <ImageDetailPageContainer>
        {imageDetails &&
            <>
                <LogoContainer>
                    <Logomarca src={logo} />
                </LogoContainer>
                <CardStyled>
                        <CardContent>
                            <img src={imageDetails.file}/>
                            <Typography variant="h5" component="h2">
                                {imageDetails.subtitle}
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                {imageDetails.id}
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                {imageDetails.author}
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                {imageDetails.date}
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                {imageDetails.collection}
                            </Typography>                            
                            <Typography variant="body2" component="p">
                                {imageDetails.tags}
                            </Typography>
                        </CardContent>
                 </CardStyled>
            </>
        }</ImageDetailPageContainer>
        )
}

export default ImageDetailPage;