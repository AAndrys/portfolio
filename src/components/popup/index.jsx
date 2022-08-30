import React, { Fragment, useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import { compiler } from 'markdown-to-jsx';
import { gsap } from 'gsap';

import ExitIcon from '../exitIcon';

const Popup = ({
  isOpen,
  itemData: { title, sections = [{ title: '', description: '' }], image },
  onExitClick
}) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const openCloseAnimation = () =>
    gsap.fromTo(
      '.popup-wrapper',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.4, ease: 'ease-in-out' }
    );

  useEffect(() => {
    if (isOpen) {
      setIsOpenPopup(true);
      document.documentElement.style.overflowY = 'hidden';
      document.body.style.overflowY = 'hidden';
    } else {
      document.querySelector('.popup-wrapper') &&
        openCloseAnimation()
          .reverse(0)
          .then(() => setIsOpenPopup(false));
      document.documentElement.style.overflowY = 'auto';
      document.body.style.overflowY = 'auto';
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpenPopup && document.querySelector('.popup-wrapper')) openCloseAnimation().play();
  }, [isOpenPopup]);

  if (!isOpenPopup) return null;

  return ReactDom.createPortal(
    <div className="popup-wrapper">
      <ExitIcon onClick={onExitClick} />
      <div className="popup-items-container">
        <h1>{title}</h1>
        <img src={image} alt={`${title}-image`} />
        <div className="content">
          {sections.map(({ title, description }, index) => (
            <Fragment key={`${title}-${index}`}>
              <h5>{title}</h5>
              <p>
                {compiler(description || '', {
                  wrapper: null
                })}
              </p>
            </Fragment>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Popup;
