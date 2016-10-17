const VENDORS_PATH = '/dist/vendor/scripts/';

function init() {
  require.config({
    paths: {
      'jquery': VENDORS_PATH + 'jquery.min'
    }
  });
};

export { init };
