import React from 'react';
import {useForm} from "../../hooks/useForm"
import {TextField, Button} from '@material-ui/core'
import logo from '../../assets/img_logo_para_fundo_branco.svg'
import { FormContainer, Logomarca, SignupPageContainer } from './styles';
import { useHistory } from 'react-router-dom';
import {signup} from "../../services/user"
import { useUnprotectPage } from '../../hooks/useUnprotectPage';

const SignUpPage = () => {
    useUnprotectPage()
    const history = useHistory()
    const {form, onChange} = useForm({name: "", email: "", nickname: "", password: ""})

    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        signup(form, history)
    }

    return (
        <SignupPageContainer>
            <Logomarca src={logo} />
            <FormContainer onSubmit={handleSubmission} >
                <TextField 
                    label="Nome"
                    variant="outlined"
                    required
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                />
                <TextField 
                    label="E-mail"
                    variant="outlined"
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                />
                <TextField 
                    label="Apelido"
                    variant="outlined"
                    required
                    name="nickname"
                    value={form.nickname}
                    onChange={handleInputChange}
                />
                <TextField  
                    label="Senha"
                    variant="outlined"
                    required                
                    type="password"
                    name="password"
                    value={form.password}
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
        </SignupPageContainer>
    )
}

export default SignUpPage;