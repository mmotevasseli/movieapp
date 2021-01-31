function init() {
  // Sentry.init({
  //   dsn:
  //     "https://2568f9fab5a447baad3863055ef5723b@o506425.ingest.sentry.io/5596093",
  //   autoSessionTracking: true,
  //   integrations: [new Integrations.BrowserTracing()],
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
}

function log(error) {
  console.error(error);
  //  Sentry.captureException("Logging the error", error);
}

export default {
  init,
  log,
};
