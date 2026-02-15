import './commands';

// Prevent uncaught exceptions from failing tests on external sites
// Only for known third-party scripts (analytics, chat widgets)
Cypress.on('uncaught:exception', (err) => {
  const ignoredErrors = ['ChunkLoadError', 'Loading chunk', 'daktela', 'gtm'];
  if (ignoredErrors.some((msg) => err.message.includes(msg))) {
    return false;
  }
  // Let real app errors fail the test
  return true;
});
