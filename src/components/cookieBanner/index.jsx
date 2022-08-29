import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import Cookies from 'js-cookie';
import { classes } from '../../utils/class';
import Analytics from '../../utils/analytics';

const CookieBanner = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  const cookieConsent = Cookies.get('aa_portfolio.consent') ?? '';
  const cookieAnalytics = Cookies.get('aa_portfolio.analytics') ?? '';

  useEffect(() => {
    if (
      cookieConsent.toLocaleLowerCase() === 'true' &&
      cookieAnalytics.toLocaleLowerCase() === 'true'
    )
      setIsAccepted(true);
  }, [cookieConsent, cookieAnalytics]);

  const handleAccept = () => {
    Cookies.set('aa_portfolio.consent', true);
    Cookies.set('aa_portfolio.analytics', true);
    setIsAccepted(true);

    classes.analytics = new Analytics();
    classes.analytics._initializeTracker();
  };

  if (isAccepted) return null;

  return ReactDom.createPortal(
    <div className="cookie-banner-wrapper">
      <div className="container">
        <div className="text-wrapper">
          <h6>Cookies</h6>
          <label>We use cookies only for analytics purpose to analyze web traffic.</label>
        </div>
        <div className="button-wrapper">
          <button onClick={handleAccept}>Accept</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CookieBanner;
