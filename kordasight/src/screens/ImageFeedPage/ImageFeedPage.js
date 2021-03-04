import React from 'react';
import logo from '../../assets/img_Logo_para_fundo_vinho.svg'
import addIcon from '../../assets/img_button_add_rest.svg'
import { useProtectPage } from '../../hooks/useProtectPage';
import {BASE_URL} from "../../constants/apiConstants"
import { useRequestData } from '../../hooks/useRequestData';
import ImageCard from '../../components/ImageCard/ImageCard';
import { ImageFeedPageContainer, Logomarca, LogoContainer } from './styles';
import { goToAddImage } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom';

const ImageFeedPage = () => {
    const history = useHistory()
    
    useProtectPage()

    const {data}= useRequestData(`${BASE_URL}/image`, [])

    const image = data.image

    const orderImage = image && image.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1)
    

    return (
        <ImageFeedPageContainer>
            <LogoContainer>
                <Logomarca src={logo} />
            </LogoContainer>
            {image &&
              orderImage.map(image => {
                return <ImageCard 
                    key={image.id}
                    id={image.id}
                    subtitle={image.subtitle}
                    file={image.file}
                />
            })}
            <div>
                <img src={addIcon} onClick={() => goToAddImage(history)}></img>
            </div>
        </ImageFeedPageContainer>
    )
}

export default ImageFeedPage;