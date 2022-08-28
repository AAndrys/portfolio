import ReactGA from 'react-ga';
import Cookies from 'js-cookie';

class Analytics {
  static TRACKING_ID = 'UA-239059261-1';

  _cookieAnalytics = Cookies.get('aa_portfolio.analytics');

  _initializeTracker() {
    if (this._cookieAnalytics && this._cookieAnalytics.toLowerCase() === 'true') {
      ReactGA.initialize(Analytics.TRACKING_ID);

      this._trackEvent({
        category: 'Load',
        label: 'Load',
        action: 'loaded',
        value: Number(new Date())
      });

      ReactGA.pageview(window.location.pathname + window.location.search);
    } else console.log('### Analytics disabled ###');
  }

  _trackEvent({ category, label, action, value }) {
    ReactGA.event({
      category,
      label,
      action,
      value
    });
  }
}

export default Analytics;
