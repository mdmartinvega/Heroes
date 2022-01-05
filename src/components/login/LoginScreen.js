import {useNavigate} from 'react-router-dom'

export const LoginScreen = () => {

    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/marvel', {replace: true}) //replace te evita al darle a atrás vuelva a la pantalla del login
    }
    return (
        <div className='container mt-5'>
            <h1>Login Screen</h1>
            <hr />

            <button onClick = {handleLogin} className='btn btn-primary'>Login</button>
        </div>
    )
}