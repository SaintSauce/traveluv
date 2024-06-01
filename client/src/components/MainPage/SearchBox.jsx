import React from 'react';

const SearchBox = () => {
    return (
        <div className="relative w-6/12 mt-6">
            <input
                type="text"
                placeholder="Search..."
                className="bg-white border rounded-lg py-2 px-4 block w-full"
                readOnly
            />
        </div>
    );
};

export default SearchBox;