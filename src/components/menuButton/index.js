import React, { useState } from 'react';

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

const MenuButton = ({ onClickButton }) => {
    const [isMouseEnter, setIsMouseEnter] = useState(false);
    const [newStyles, setNewStyles] = useState(false);

    const stylesObject = {
        newBackground:
        {
            background: 'white',
            bottom: 91 + '%'
        },
        transform: {
            transform: newStyles && 'rotate(180deg)',
            color: isMouseEnter || newStyles ? 'black' : 'white'
        }
    };

    const handleMouse = () => {
        setIsMouseEnter(!isMouseEnter);
    };

    const handleButton = () => {
        onClickButton();
        setNewStyles(!newStyles);
    };

    return (
        <div
            className='menu-button-container'
            style={newStyles ? stylesObject['newBackground'] : null}
            onMouseEnter={handleMouse}
            onMouseLeave={handleMouse}
            onClick={handleButton}
        >
            <button>
                <FontAwesomeIcon
                    className="menu-button-svg-icon"
                    icon={faCaretUp}
                    size='2x'
                    style={stylesObject['transform']}
                />
            </button>
        </div>
    );
};

export default MenuButton;