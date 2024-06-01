import React from 'react'

const SearchBox = () => {
    return (
        <div className="relative w-8/12 mt-4">
            <input
                type="text"
                placeholder="Search... (Ctrl + K)"
                className="bg-white border rounded-lg py-2 px-4 block w-full"
                readOnly
            />
        </div>
    );
};

export default SearchBox