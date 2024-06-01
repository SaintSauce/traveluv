import React from 'react'

// Top right navbars
import TopRightNavBar from '../components/MainPage/TopRightNavBar'
import UnsignedTopRightNavBar from '../components/MainPage/UnsignedTopRightNavBar'

// C-way
import InfiniteScrollList from '../components/MainPage/InfiniteScrollList'
import SearchBox from '../components/MainPage/SearchBox'

// L-way
import HeadLogo from '../components/MainPage/HeadLogo'
import LeftCalendar from '../components/MainPage/LeftCalendar'
import LeftExtensions from '../components/MainPage/LeftExtensions'

const HomePage = () => {
    return (
        <div className="flex w-screen h-screen no-scrollbar overflow-y-hidden overflow-x-hidden">
            <div className="relative w-3/12">
                <HeadLogo />
                <LeftCalendar />
                <LeftExtensions />
            </div>
            <div className="relative ml-12 w-8/12">
                <div className="flex">
                    <SearchBox />
                    <TopRightNavBar />
                </div>
                <InfiniteScrollList />
            </div>
        </div> 
    )
}

export default HomePage