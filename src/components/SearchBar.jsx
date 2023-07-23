import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // in react, when you submit a form, it refreshes the page which we do not want happening so we use preventDefault() function to prevent that
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);

            setSearchTerm('');
        }
    }

  return (
    <Paper 
        component='form'
        onSubmit={handleSubmit}
        sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl: 2,
            boxShadow: 'none',
            mr: { sm: 5 }

        }}
    >
        <input 
            className='search-bar' 
            placeholder='Search...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton 
            type='submit' 
            sx={{ p: '10px', color: 'red' }}
        >
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar