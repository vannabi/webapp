# Vannabi.in

## Prerequisites

- Node 10
- NPM 6

## Getting Started

- Checkout project

```bash
git clone git@github.com:vannabi/webapp.git
```

- Install NPM dependencies

```bash
npm i
```

## Start Development

In order to start project development run the following:

```bash
npm run dev
```

This command runs Next.js in development mode.

## Production Build

Production build is produced using the following command:

```bash
npm run build
```

It creates the default `.next` folder with all production resources ready to deploy.

## Deployment

We don't have any staging or test server, so the deployment goes to production directly.
We use Firebase for hosting and Google Analytics.

### Auto Deployment

We use Github Action to deploy a new version of project automatically once a PR or any changes are merged to `master` branch.
There is no need to do it manually. Manual deployment should be treated as exceptional one.

### Manual Deployment

1. Login to Firebase `vannabiin` project. We use Firebase lambda function to serve dynamic part of project and Firebase Hosting to serve static resources and custom domain name.

```bash
npx firebase login
```

2. Run deployment command. It reads Firebase deployment configuration from `firebase.json`.

```bash
npm run deploy
```
