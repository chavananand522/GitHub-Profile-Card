import React, { useState } from 'react'

const SearchForm = ({ onsearch }) => {

    const [query, setquery] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
        if (query) {
            onsearch(query);
            setquery('');
        }
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input
                    type='text'
                    placeholder='Enter Github Username: '
                    value={query}
                    onChange={(e) => setquery(e.target.value)}
                />
                <button type='submit'>Search </button>
            </form>
        </div>
    )
}

export default SearchForm