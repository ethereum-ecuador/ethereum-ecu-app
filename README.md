# Ethereum Ecuador

## Architecture

We follow a conventional NextJS architecture combining server side and client rendering to support fast loading, good seo and ux.
Depending on the type of content we have the ability to choose whether we render it on the backend or the browser.

## Features

- Utility first CSS with TailwindUI components.
- TypeScript, ESLint, Prettier and git hooks for code quality.

## Tech Stack

- NextJS [nextjs.org](https://nextjs.org)

- Decimal.js [MikeMcl/decimal.js](https://github.com/MikeMcl/decimal.js)
- TailwindCSS [tailwindcss.com](https://tailwindcss.com)
- Iron Session [vvo/iron-session](https://github.com/vvo/iron-session)
- Lodash tools [lodash.com/docs](https://lodash.com/docs)
- Zod validator [colinhacks/zod](https://github.com/colinhacks/zod)
- React Hook Form [react-hook-form.com](https://react-hook-form.com/)
- React-use hooks [streamich/react-use](https://github.com/streamich/react-use)

### File Structure

```bash
.
├── config .............................. environment variables
│   ├── client .......................... client side vars
│   └── server .......................... server side secrets
├── context ............................. shared state
│   └── global.context.ts
├── icons ............................... svg icons as components
├── hooks ............................... global react hooks
├── lib ................................. utility pure functions
│   ├── logger
│   ├── ssr
│   └── utils
├── pages ............................... nextjs routes
├── public .............................. nextjs public
│   ├── fonts
│   └── images
├── services ............................ stateless services
│   ├── auth                              to interact with apis
│   ├── media                             and crypto wallets
├── types ............................... global typescript types
├── components .......................... shared components
│   └── example
│       ├── index.ts
│       ├── example.context.tsx
│       ├── example.component.tsx
│       ├── example.test.tsx
│       └── example.type.ts
├── layouts ............................. structural components
│   └── root-layout
│       ├── index.ts
│       └── root-layout.component.tsx
├── styles .............................. css styles
│   └── globals.css
└── views ............................... components for specific views
    └── home
        └── home-example
            ├── home-example.component.tsx
            └── index.ts
```

## Coding Style Best Practices

Follow a semantic, idiomatic, functional and declarative codestyle, using Modern JavaScript features and TypeScript.
React is declarative, you declare you component structure and React and NextJS take care of handling the DOM changes require, it is possible to write imperative code but that is not recommended.
Code should use correct semantics and meaningful naming, and be autoexplanatory, when you read your code outloud it should sound like plain english as much as possible.

Declarative programming is like describing the picture, where imperative programming is the instruction for painting that picture. Declarative programming makes code:

**more readable:** Program that are easier to read because it hides the lower level detail. In declarative programming we don't even know about the lower level details of the system.

**easier to reason about:** the code we write is easier to reason about because it is much abstracted and we describe the solution instead of procedure.

Follow Single Responsibility Principle, create small components that do one thing well, avoid big components.
Favor composability over big objects, leverage pure functions and keep state simple and flat, avoid deeply nested objects.

## JavaScript Conventions

- naming variables: boolean should be named using auxiliary verbs such as `does`, `has`, `is` and `should`. For example, Button uses `isDisabled`, `isLoading`, etc.
- composition: break down components into smaller parts with minimal props to keep complexity low, and compose them together.
- filenames: create folders with and index, lowercase with dash separator for dirs and names `components/auth-wizard`, and five the following extensions each file acordingly `.config.ts`, `.component.tsx`, `.test.ts`, `.context.tsx`, `.type.ts`, `.hook.ts`
- avoid default export [default is bad](https://basarat.gitbook.io/typescript/main-1/defaultisbad)

```ts
const helloMessage = 'hello'
export function saySomething() {
  const someValue = 'fren'
  console.log(`${helloMessage} ${someValue}`)
}
```

- Receive an object, return an object (RORO). [Elegant patterns in modern JavaScript: RORO](https://www.freecodecamp.org/news/elegant-patterns-in-modern-javascript-roro-be01e7669cbd/)

```ts
// types/services.type.ts
export interface ServiceParams {
  limit?: number
  offset?: number
}

// services/account/account.type.ts
export interface GetAccountsParams extends ServiceParams {
  account?: string
}

// services/account/account.service.ts
export async function getAccounts({
  account,
  limit = 15,
  offset = 0,
}: GetAccountsParams) {
  const where = account
    ? {
        account: {
          _eq: account,
        },
      }
    : null

  return getGraphQLSdk()
    .chain.query.accounts({
      where,
      limit,
      offset,
    })
    .get({ ...everything })
}
```

Most functions will receive an object and many of them return an object too.

Like any pattern, RORO should be seen as just another tool in our tool box. We use it in places where it adds value by making a list of parameters more clear and flexible and by making a return value more expressive.

If you’re writing a function that will only ever need to receive a single parameter, then receiving an object is overkill. Likewise, if you’re writing a function that can communicate a clear and intuitive response to the caller by returning a simple value, there is no need to return an object.

## ReactJS Conventions

- declare component with function keyword
- use const for methods
- place code in the following order
  - function component declaration
  - styled components
  - typescript types
  - getServerSideProps

Eg.

```tsx
export function MyReactComponent({ myParam }: MyReactComponetParams) {
  const myMethod = () => console.log(myParam)

  return (
    <div className="bg-slate-100 md:flex ">
      A new world awaits. <br /> be the first to discover it.
      <button onClick={myMethod}>let's goo!</button>
    </div>
  )
}

export interface MyReactComponetParams {
  myParam: boolean
}
```

## State Management

When you write a component that holds some state, you’ll have to make choices about how many state variables to use and what the shape of their data should be. While it’s possible to write correct programs even with a suboptimal state structure, there are a few principles that can guide you to make better choices:

- Group related state. If you always update two or more state variables at the same time, consider merging them into a single state variable.
  Avoid contradictions in state. When the state is structured in a way that several pieces of state may contradict and “disagree” with each other, you leave room for mistakes. Try to avoid this.

- Avoid redundant state. If you can calculate some information from the component’s props or its existing state variables during rendering, you should not put that information into that component’s state.

- Avoid duplication in state. When the same data is duplicated between multiple state variables, or within nested objects, it is difficult to keep them in sync. Reduce duplication when you can.

- Avoid deeply nested state. Deeply hierarchical state is not very convenient to update. When possible, prefer to structure state in a flat way.
  The goal behind these principles is to make state easy to update without introducing mistakes. Removing redundant and duplicate data from state helps ensure that all its pieces stay in sync.

This is similar to how a database engineer might want to [“normalize”](https://learn.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description) the database structure to reduce the chance of bugs.

[read more](https://beta.reactjs.org/learn/choosing-the-state-structure)

### Keep the state flat

Updating nested Javascript objects immutably generally results in uglier code that is harder to maintain, unless you use a utility library to wrap up the process.

Immutably updating nested data requires that you return new copies of all items in the nesting hierarchy. Since components generally do shallow-equality reference comparisons on data to see if they need to update, updating nested data usually means that more objects are updated, and more components will probably have to re-render even if the actual data isn't different.

Flat data, and in particular normalized data, enables some more optimized approaches for defining components (such as a list where each list item component is itself connected, given an item ID as a prop, and is responsible for looking up its own item's data by that ID)

### Prefer serializables

It is highly recommended that you only put plain serializable objects, arrays, and primitives into your store. It's technically possible to insert non-serializable items into the store, but doing so can break the ability to persist and rehydrate the contents of a store, as well as interfere with time-travel debugging.

If you are okay with things like persistence and time-travel debugging potentially not working as intended, then you are totally welcome to put non-serializable items into your store. Ultimately, it's your application, and how you implement it is up to you. As with many other things, just be sure you understand what tradeoffs are involved.

Use Arrays instead of Maps.

## Styling

We are going to leverage TailwindCSS as css framework for our React components.
Following its Utility First approach to develop faster with high quality.

This is great interview with TailwindCSS founder, they cover the <https://open.spotify.com/episode/2NCNJ3AqEjALX2xza3JKkE?si=ZbnuQrwOT-C4agFxC6yTjg>

- maximizes the use of creative power in functionality; not creating class names and css structures.
- reduces of cognitive effort by not having to think about classes and hierarchies, changing or returning to the project is all the same.
- element changes are localized and you don't worry about breaking other things.
- the default theme is very good and simple to customize it to create your own design system.
- it is very intuitive. even without knowing the framework you can read the code and understand what is happening with relative ease
  the development experience is much better by not having to change files.
- tailwindui is great and the community is huge, you can copy paste any project and use it on your own without creating frankensteins
- you can use it in combination with emmet, since it only uses className.
- it enforce css based on constraints through theme and design tokens.
- in 3.1 there is a feature called arbitrary variants that makes it even more flexible.
- it gives you better performance, really good with ssr ( nextjs/remix ).
- it removes the problems associated with preprocessors such as large bundles.
- it is relatively less complex than styled components (you need to know more about javascript).

_Note: the current code uses nextjs built-in css modules, tailwind is already setup and we are migrating progressively._

Its possible to write variant based component using windstich .

## Getting Started

First, run the development server:

```bash

yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Commands

- `dev`: runs your application on `localhost:3000`.
- `build`: creates the production build version.
- `start`: starts a simple server with the build production code.
