import React from 'react';

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    return (
        <header className="App-header">
            <div className="header-container">
                <h1 className="text-header">
                    B
                    <FontAwesomeIcon icon={faHamburger} size='2x' color={'white'} />
                    RGER MENU
                </h1>
            </div>
        </header>
    );
};

export default Header;