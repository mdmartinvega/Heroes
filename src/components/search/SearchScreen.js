import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard'
import { useMemo } from 'react';

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    
    const [ formValues, handleInputChange] = useForm({ searchText: q });

    const {searchText} = formValues;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

    const handleSearch = (e) => {
        e.preventDefault();

        console.log(searchText);
        navigate(`?q=${searchText}`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className='row'>
                <div className='col-5'>
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={handleSearch} action="">
                        <input type="text"
                        placeholder='Search for a hero'
                        className='form-control'
                        name='searchText'
                        autoComplete='off'
                        value={searchText}
                        onChange={handleInputChange} />

                        <button type='submit' className='btn btn-outline-primary mt-1'>Go...</button>
                    </form>
                </div>
                <div className='col-7'>
                    <h4>Resultados</h4>
                    <hr />
                    {
                        (q === '')
                            ? <div className='alert alert-info'>Buscar un héroe</div>
                            : (heroesFiltered.length === 0) 
                                && <div className='alert alert-danger'>No hay resultados para {q}</div>
                    }
                    {
                        heroesFiltered.map(hero=> (
                            <HeroCard
                                key={hero.id}
                                {...hero}

                            />
                        )
                        )
                    }

                </div>
            </div>
        </div>
    )
}