# Playwright API Automation

API automation framework using:

- Playwright
- TypeScript
- REST API testing

Base URL:

https://api.restful-api.dev/objects

---

# Covered Methods

- GET
- POST
- DELETE

---

# Installation

## Install dependencies

```bash
npm install
```

## Install browsers

```bash
npx playwright install
```

---

# Run Tests

## Run all tests

```bash
npm test
```

## Run only API tests

```bash
npm run test:api
```

---

# Open HTML Report

```bash
npm run report
```

---

# Test Cases

## GET
- Verify API returns object list
- Verify status code = 200

## POST
- Create new object
- Verify response body
- Verify created ID exists

## DELETE
- Delete created object
- Verify deletion success message

---

# Tech Stack

- TypeScript
- Playwright
- Node.js

---

# Future Improvements

- PUT tests
- PATCH tests
- Schema validation
- Authentication
- Environment configs
- CI/CD pipeline
