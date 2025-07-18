# Architecture of the project

## Table of Contents <!-- omit in toc -->

- [Architecture of the project](#architecture-of-the-project)
  - [Introduction](#introduction)
  - [Folder structure](#folder-structure)
  - [Pages](#pages)

## Introduction

As far as this boilerplate uses [Next.js](https://nextjs.org/) framework for building React applications, the folders are used as routes.  This means the more folders you add to your app folder, the more routes you will get. Additionally, if you create a new folder inside of another folder, you will get nested routes. To better understand these concepts, we suggest looking at the image below.

## Folder structure

```txt
.
├── tests 👈🏿 contains all your tests (integration and e2e tests)
│    ├── integration
│    └── e2e
├── public
├── styles  
├── config    👈🏿 contains all configurations for tools and packages used in the app
├── hooks   👈🏿 contains all custom react hooks
├── hooks   👈🏿 contains all utilities or helper classes and functions
├── context 👈🏿 contain all context api configurations
├── stories  👈🏿 contains all your story book components
└── src
    ├── app
    │   ├── api   
    │   ├── fonts 👈🏿 contains all font files and their configurations 
    │   └── [language] 👈🏿 Here are your pages (routes)
    │       ├── home
    │       ├── about
    │       └── privacy-policy
    ├── components 👈🏿 Here are your common components used in the app
    │   ├── pages
    │   ├── sections
    │   ├── layout
    │   └── shared
    ├── i18n 👈🏿 Here are your files related to internationalization
    │   └── locale 👈🏿 This contains the translations for the different languages
    │       ├── en 👈🏿 english translations
    │       └── lg 👈🏿 luganda translations
    └── services <-- Here are your services (Auth, API calls, I18N, etc.)
        ├── api
        ├── auth
        ├── helpers
        ├── leave-page
        ├── react-query
        └── social-auth
            ├── facebook
            └── google
```

## Pages

Pages are located in the `src/app/[language]` folder. We use `[language]` directory to support internationalization with ability generate static website (`output: export`). Example [here](https://github.com/i18next/next-13-app-dir-i18next-example).

---

Previous: [Installing and Running](installing-and-running.md)

Next: [Auth](auth.md)
