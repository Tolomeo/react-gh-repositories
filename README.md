# feat/repositories-search

The application retrieves repositories data from GitHub GraphQL api and renders 10 of them in a list.
The user is able to define the query for the retrieval of repositories by using a text input.
Every repository in the list displays the name of the repository, the number of stars and the number of forks.
Clicking on the repository name navigates to the repository itself.

## Installation

```bash
# installing dependecies
yarn

# starting the project
yarn start
```

Note that, in order to access GitHub data, it is needed to add to the project an environment file `/.env.local` containing the PAT token that will be used to authorise api data access.

```bash
GITHUB_PAT=your_token_here
```

It is possible to find a template in the file `/.env`

Please refer to [https://docs.github.com/en/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql](https://docs.github.com/en/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql) for more information.

## Notes

### Stack

- [Parcel](https://parceljs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Apollo](https://www.apollographql.com/)
- [MUI](https://mui.com/)
- [Jest](https://jestjs.io/)

### Known issues and possible improvements

- Depending on requirements, it could be needed to properly setup bundling targets to extend browser support
- Package file is barebones and offers only what is needed to develop on the project. A real world project would require additional information listed (the package version is an example)
- Using an environment variable to consume the GitHub PAT is a gimmick adopted to deliver quickly. It would be better to create a proper authorisation flow similar to the one offered by the api explorer. The approach could be inspired by [https://www.graphql.college/building-a-github-client-with-react-apollo](https://www.graphql.college/building-a-github-client-with-react-apollo)
- GraphQL query types are composed by hand. In a real world application it could be preferable to generate them starting from the api schema itself and integrate the generation in the development workflow. The approach with Apollo could be inspired by [https://www.apollographql.com/docs/react/development-testing/static-typing/](https://www.apollographql.com/docs/react/development-testing/static-typing/)
- The GraphQL queries present hardcoded values to satisfy the needs of the project. It would be better nonetheless to make them configurable through variables to improve extendibility and adopting best practices
- GraphQL queries consume more fields than needed by the application. This was done early in the execution to accommodate for further development. In a real world scenario it would be preferable to optimise and consume only what is needed
- Consumers of GraphQL queries do not attempt to make any optimisation. It could be an improvement to apply debouncing to avoid unneeded calls. Similarly and depending on requirements, it could be valuable to avoid api calls in specific cases (ie empty input)
- The current implementation, although visually working, generates some underlying html structures which are not strictly valid. It would be needed to fine the usage of UI components to generate valid structures
- The current implementation doesn’t offer the best possible experience accessibility wise.
  Granular improvements would be needed.
- Tests strictly cover only high level project requirements. Additional tests around dependencies integration and standalone units could strengthen the testing strategy
- The UI integration doesn’t offer a fully responsive experience and the interface would need to be optimised for smaller screens
