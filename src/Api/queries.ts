import { gql, useQuery, QueryResult } from '@apollo/client'

export interface Repository {
  id: string
  name: string
  url: string
  forkCount: number
  stargazerCount: number
}

export interface RepositoriesSearchData {
  search: {
    repositoryCount: number
    pageInfo: {
      hasNextPage: boolean
      hasPreviousPage: boolean
    }
    nodes: Repository[]
  }
}

export interface RepositoriesSearchVariables {
  query: string
}

const repositoriesSearch = gql`
  query Repositories($query: String!) {
    search(query: $query, type: REPOSITORY, first: 10) {
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

export const useRepositoriesSearch = (
  query: string,
): QueryResult<RepositoriesSearchData, RepositoriesSearchVariables> =>
  useQuery(repositoriesSearch, { variables: { query } })
