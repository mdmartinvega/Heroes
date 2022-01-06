import {useParams, Navigate} from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';
import {useNavigate} from 'react-router-dom'
import { useMemo } from 'react';


export const HeroScreen = () => {

    const {heroId} = useParams();

    const navigate = useNavigate();

    const hero = useMemo(() => getHeroById(heroId), [heroId])

    const handleReturn = () => {
        // navigate(-1) Para volver una página atrás
        publisher !== 'Marvel Comics' ? navigate('/marvel') : navigate('/dc')
    }

    if(!hero){
      return <Navigate to='/marvel' />  
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const imagePath = `/assets/heroes/${hero.id}.jpg`

    return (
        <div className='row mt-5'>
            <div className='col-4'>
               <img 
                src={imagePath} 
                alt={superhero}
                className='img-thumbnail animate__animated animate__fadeInLeft' />
            </div>
            <div className='col-8 animate__animated animate__fadeIn'>
                <h3>{superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Alter ego: </b>
                        {alter_ego}
                    </li>
                    <li className='list-group-item'>
                        <b>Publisher: </b>
                        {publisher}
                    </li>
                    <li className='list-group-item'>
                        <b>First appearance: </b>
                        {first_appearance}
                    </li>
                </ul>
                <h5 className='mt-5'>Characters</h5>
                <p>{characters}</p>
                <button className='btn btn-outline-info'
                onClick={handleReturn}>Regresar</button>
            </div>
        </div>
    )
}
