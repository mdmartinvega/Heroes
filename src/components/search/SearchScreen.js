import React from 'react'
import { useForm } from '../../hooks/useForm';

export const SearchScreen = () => {

    
    const [ formValues, handleInputChange] = useForm({ searchText: '' });

    const {searchText} = formValues;

    const handleSearch = (e) => {
        e.preventDefault();

        console.log(searchText);
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
            </div>
        </div>
    )
}