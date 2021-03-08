import React from 'react';
import {useForm} from "../../hooks/useForm"
import {TextField, Button} from '@material-ui/core'
import logo from '../../assets/img_logo_para_fundo_branco.svg'
import { FormContainer, Logomarca, AddImagePageContainer } from './styles';
import { useHistory } from 'react-router-dom';
import {addImage} from "../../services/image"
import { useProtectPage } from '../../hooks/useProtectPage';

const AddImagePage = () => {
    useProtectPage()
    const history = useHistory()
    const {form, onChange} = useForm({subtitle: "", author: "", file: "", tags: "", collection: ""})

    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        console.log("Body no handle:", form)
        addImage(form, history)
    }

    return (
        <AddImagePageContainer>
            <Logomarca src={logo} />
            <FormContainer onSubmit={handleSubmission} >
                <TextField 
                    label="Link"
                    variant="outlined"
                    required
                    name="file"
                    value={form.file}
                    onChange={handleInputChange}
                />
                <TextField 
                    label="Legenda"
                    variant="outlined"
                    required
                    name="subtitle"
                    value={form.subtitle}
                    onChange={handleInputChange}
                />
                <TextField  
                    label="Artista"
                    variant="outlined"
                    required                
                    name="author"
                    value={form.author}
                    onChange={handleInputChange}
                />
                <TextField  
                    label="Coleção"
                    variant="outlined"
                    required                
                    name="collection"
                    value={form.collection}
                    onChange={handleInputChange}
                />
                <TextField  
                    label="Tags"
                    variant="outlined"
                    required                
                    name="tags"
                    value={form.tags}
                    onChange={handleInputChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Cadastrar
                </Button>
            </FormContainer>
        </AddImagePageContainer>
    )
}

export default AddImagePage;