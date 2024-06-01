import React from 'react'

import InfiniteScrollList from '../components/MainPage/InfiniteScrollList';
import SearchBox from '../components/MainPage/SearchBox';

const HomePage = () => {
    return (
        <div className="w-screen h-screen no-scrollbar overflow-y-hidden overflow-x-hidden">
            <div className="relative w-2/3 left-1/3">
                <SearchBox />
                <InfiniteScrollList />
            </div>
            
        </div> 
    )
}

export default HomePage