import React from 'react';
import './SearchBox.css'

interface SearchboxProps {
    handleInputChange: (inputVal: string) => void
}

const SearchBox = ({ handleInputChange }: SearchboxProps) => {
    return (
        <input onChange={(e) => handleInputChange(e.target.value)} type="text" className="search" placeholder="Search Pokemon" />
    );
}

export default SearchBox;