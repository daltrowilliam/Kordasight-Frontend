export const goToLogin = (history) => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        history.push('/login')
}
  
export const goToSignUp = (history) => {
    history.push('/signup')
}
  
export const goToImageFeed = (history) => {

    history.push('/image')
    
/*     const token = window.localStorage.getItem("token")
    if (!token) {
        alert("Por favor faça o seu login!")
        history.push('/login')
    } else {
        history.push('/image')
    } */
}
  
export const goToImageDetail = (history, id) => {
    history.push(`/image/${id}`)
}

export const goToAddImage = (history) => {
    history.push(`/image/registry`)
}

export const goBack = (history) => {
    history.goBack()
}

