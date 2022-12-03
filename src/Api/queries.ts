import { gql, useQuery } from '@apollo/client'

const repositoriesSearch = gql`
  {
    search(query: "is:public", type: REPOSITORY, first: 10) {
      repositoryCount
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
      nodes {
        ... on Repository {
          id
          name
          url
          forkCount
          stargazerCount
        }
      }
    }
  }
`

export const useRepositoriesSearch = () => useQuery(repositoriesSearch)
