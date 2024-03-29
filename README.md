
# my-trips

This is a [Next.js](https://nextjs.org/) project. It's a website to show places I went, or want to go.
## What is inside?

This project uses lot of stuff as:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [graphql](https://graphql.org/)
- [graphcms](https://app.graphcms.com/)

## Getting Started

First, you should create a local file named `.env.local` with the content:

```
GRAPHQL_HOST=
GRAPHQL_TOKEN=
NEXT_PUBLIC_MAPBOX_API_KEY=
NEXT_PUBLIC_MAPBOX_USERID=
NEXT_PUBLIC_MAPBOX_STYLEID=

```

Then run the development server:

```bash
nvm use
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `codegen`: runs graphql-codegen

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
