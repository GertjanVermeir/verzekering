const isMicrosoftBrowser = () => {
  const userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];
  return new RegExp(userAgentPatterns.join('|')).test(window.navigator.userAgent);
};

export default isMicrosoftBrowser;
