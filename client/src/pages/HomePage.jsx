import React from 'react'

// Top right navbars
import TopRightNavBar from '../components/MainPage/TopRightNavBar'
import UnsignedTopRightNavBar from '../components/MainPage/UnsignedTopRightNavBar'

// C-way
import InfiniteScrollList from '../components/MainPage/InfiniteScrollList'
import SearchBox from '../components/MainPage/SearchBox'

// L-way
import HeadLogo from '../components/MainPage/HeadLogo'

// State Management
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';

const HomePage = () => {
    const user = useSelector(state => state.auth.user);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout)
    }

    return (
        <div className="flex w-screen h-screen overflow-x-hidden overflow-y-hidden">
            <div className="relative w-3/12">
                <HeadLogo />
            </div>
            <div className="relative ml-12 w-8/12">
                <div className="flex">
                    <SearchBox />
                    {isAuthenticated ? (
                        <TopRightNavBar />
                    ) : (
                        <UnsignedTopRightNavBar />
                    )}
                </div>
                <InfiniteScrollList />
            </div>
        </div> 
    )
}

export default HomePage