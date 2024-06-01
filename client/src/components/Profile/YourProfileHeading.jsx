import React from 'react'

import BigProfileLogo from './BigProfileLogo';
import minecraft_logo from '../../assets/profile_images/minecraft_steve_logo.png'

const profile = {
    username: "Your username",
    img: `${minecraft_logo}`,
    bio: "Your biography"
}

const YourProfileHeading = () => {
    return (
        <div className="flex justify-center items-center h-2/12 mt-6 p-4
                        inline-block border-t border-b border-gray-200 w-5/6 mx-auto">
            <BigProfileLogo img={profile.img} size="32" />
            <div className="ml-4">
                <h1>{profile.username}</h1>
                <div className="flex">
                    <h1>xxx traveluvs</h1>
                    <h1 className="px-4">yyy traveluvers</h1>
                    <h1 className="px-4">zzz traveluving</h1>
                </div>
                <p>{profile.bio}</p>
            </div>
        </div>
    );
}

export default YourProfileHeading
