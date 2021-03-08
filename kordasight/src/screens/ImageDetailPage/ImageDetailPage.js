import { useParams } from 'react-router-dom';
import logo from '../../assets/img_logo_para_fundo_branco.svg'
import { useProtectPage } from '../../hooks/useProtectPage';
import {useRequestData} from "../../hooks/useRequestData";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import {BASE_URL} from "../../constants/apiConstants"
import { Typography } from '@material-ui/core';
import {Logomarca, LogoContainer, ImageDetailPageContainer,CardStyled, Imagem, AddButtonContainer, CardContentStyled} from "./styles"
import { deleteImage } from '../../services/image'
import { useHistory } from "react-router-dom";


const ImageDetailPage = () => {
    const history = useHistory()
    useProtectPage()
    const params = useParams()
    const {data} = useRequestData(`${BASE_URL}/image/${params.id}`, [])
    const imageDetails = data.image

    // Addicon float
    
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        extendedIcon: {
          marginRight: theme.spacing(1),
        },
      }));

      const classes = useStyles();

    return (
        <ImageDetailPageContainer>
        {imageDetails &&
            <>
                <LogoContainer>
                    <Logomarca src={logo} />
                </LogoContainer>
                <CardStyled>
                        <CardContentStyled>
                            <Imagem src={imageDetails.file}/>
                            <Typography component="h4">
                                Legenda: {imageDetails.subtitle}
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                Identificador: {imageDetails.id}
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                Autor: {imageDetails.author}
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                Data de Cadastro: {new Date(imageDetails.date).toLocaleDateString()},
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                Coleção: {imageDetails.collection}
                            </Typography>                            
                            <Typography color="textSecondary" gutterBottom>
                                Tags: {imageDetails.tags}
                            </Typography>
                        </CardContentStyled>
                        <AddButtonContainer className={classes.root}>
                            <Fab size="small" color="primary" aria-label="add" onClick={() => deleteImage(params.id, history)}>
                                <DeleteIcon />
                            </Fab>
                        </AddButtonContainer>
                 </CardStyled>
            </>
        }</ImageDetailPageContainer>
        )
}

export default ImageDetailPage;