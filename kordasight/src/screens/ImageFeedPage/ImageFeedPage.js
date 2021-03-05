import React from 'react';
import logo from '../../assets/img_Logo_para_fundo_vinho.svg'
import {Button} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import addIcon from '../../assets/img_button_add_rest.svg'
import { useProtectPage } from '../../hooks/useProtectPage';
import {BASE_URL} from "../../constants/apiConstants"
import { useRequestData } from '../../hooks/useRequestData';
import ImageCard from '../../components/ImageCard/ImageCard';
import { ImageFeedPageContainer, FeedContainer, Logomarca, LogoContainer, AddButtonContainer, CardContainer, AddButton } from './styles';
import { goToAddImage } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom';

const ImageFeedPage = () => {
    const history = useHistory()
    
    useProtectPage()

    const {data}= useRequestData(`${BASE_URL}/image`, [])

    const images = data.images

    const orderImages = images && images.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1)
    

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
                <AddButtonContainer>
                    <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => goToAddImage(history)}>
                      <PhotoCamera />
                    </IconButton>
                </AddButtonContainer>
            </FeedContainer>


        </ImageFeedPageContainer>
    )
}

export default ImageFeedPage;