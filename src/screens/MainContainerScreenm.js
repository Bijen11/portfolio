import React, { useState } from 'react';
import { Link, Redirect } from 'react-dom';
import '../css/MainScreen.css'

const MainScreen = () =>{
    return(
        <div class ='bannerContiner'>
            <div>
                <img 
                    src={require('../assets/images/user-3.jpg')}
                    alt="user"
                    class = 'userProfile'
                />
            </div>
            <img class = 'bannerImg' src={require('../assets/images/banner.jpg')} alt="bannerImg" />
            
        </div>
    )
}

export default MainScreen;