import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'

export const LoginScreen = () => {

    const navigate = useNavigate()
    const {dispatch} = useContext(AuthContext)

    const handleLogin = () => {
        
        const action = {
            type: types.login,
            payload: {name: 'Loli'}
        }
        dispatch(action);

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