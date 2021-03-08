import React from 'react';
import logo from '../../assets/img_logo_para_fundo_branco.svg'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { useProtectPage } from '../../hooks/useProtectPage';
import {BASE_URL} from "../../constants/apiConstants"
import { useRequestData } from '../../hooks/useRequestData';
import ImageCard from '../../components/ImageCard/ImageCard';
import { ImageFeedPageContainer, FeedContainer, Logomarca, LogoContainer, AddButtonContainer, CardContainer } from './styles';
import { goToAddImage } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom';


const ImageFeedPage = () => {
    const history = useHistory()
    
    useProtectPage()

    const {data}= useRequestData(`${BASE_URL}/image`, [])

    const images = data.images

    const orderImages = images && images.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1)
    
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
        <ImageFeedPageContainer>
            <LogoContainer>
                <Logomarca src={logo} />
            </LogoContainer>
            <FeedContainer>
                <CardContainer>
                    {images &&
                    orderImages.map(image => {
                        return <ImageCard 
                            key={image.id}
                            id={image.id}
                            subtitle={image.subtitle}
                            file={image.file}
                        />
                    })}
                </CardContainer>
                <AddButtonContainer className={classes.root}>
                <Fab size="small" color="primary" aria-label="add" onClick={() => goToAddImage(history)}>
                    <AddAPhotoIcon />
                </Fab>
                </AddButtonContainer>
            </FeedContainer>
        </ImageFeedPageContainer>
    )
}

export default ImageFeedPage;