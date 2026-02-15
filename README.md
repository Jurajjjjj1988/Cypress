# UlovDomov.cz — Cypress E2E Suite

Cypress test automation for [ulovdomov.cz](https://www.ulovdomov.cz).

## Test coverage

| Test | Type | What it verifies |
|------|------|-----------------|
| Homepage | Smoke | Hero, search form, listings, navigation |
| Search | Functional | Autocomplete, results match location |
| Sort | Functional | Price ascending order after sort |
| Navigation | Navigation | Post ad link, back via logo |
| Responsive | Layout | Map hidden, edit button visible on mobile |
| Login | Auth | Modal login, session verified |
| Profile | CRUD | Edit data, save, reload and verify persistence |

## Setup

```bash
npm install
```

Create `.env`:

```
BASE_URL=https://www.ulovdomov.cz
TEST_USER_EMAIL=your@email.com
TEST_USER_PASSWORD=yourpassword
```

## Run

```bash
npm run cy:open          # Interactive mode
npm run cy:run           # Headless Chrome
npm run cy:run:headed    # Headed Chrome
npm test                 # Headless + Mochawesome report
```

## CI/CD

GitHub Actions — push, PR, scheduled (Mon-Fri 8:00 UTC), manual.
Screenshots on failure uploaded as artifacts. Slack notifications on failure/success.

## Structure

```
cypress/
├── e2e/          # Test specs
├── pages/        # Page Object Models (BasePage, HomePage, ...)
├── support/      # Custom commands (login, dismissOverlay)
├── helpers/      # Utilities (price parser)
└── fixtures/     # Test data (JSON)
```
