import React from 'react';
import PropTypes from 'prop-types';

const FilterImage = props => {
    const {
        imgSrc,
        mouseLeave = true,
        moveX = 0,
        moveY = 0
    } = props;

    const styles = {
        transform: `translate(${moveX}px, ${moveY}px)`,
        opacity: !mouseLeave && 1
    };

    return (
        <>
            <svg>
                <filter id="noise" x='0%' y='0%' width='100%' height='100%' style={{ transition: 'all 4s linear' }}>
                    <feTurbulence type="fractalNoise" baseFrequency={`0.02 0.004`} numOctaves="5" seed="2" stitchTiles="noStitch" x="0%" y="0%" width="100%" height="100%" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale={`${-moveX / 3}`} xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" filterUnits="userSpaceOnUse" />
                </filter>
            </svg>
            <div className="overlay-filter-image" style={styles}>
                <img id='filter-image' src={imgSrc} alt="Burger" />
            </div>
        </>
    );
};

export default FilterImage;

FilterImage.propTypes = {
    imgSrc: PropTypes.string,
    mouseLeave: PropTypes.bool,
    moveX: PropTypes.number,
    moveY: PropTypes.number
};