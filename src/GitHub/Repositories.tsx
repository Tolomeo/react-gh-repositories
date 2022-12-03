import React from 'react'
import { useRepositoriesSearch } from '../Api'
import RepositoriesList from './RepositoriesList'

const GitHubRepositories = () => {
  const { loading, error, data } = useRepositoriesSearch()

  if (loading) return <span>Loading...</span>

  if (error) return <span>Error...</span>

  const repositories = data?.search.nodes || []

  return <RepositoriesList repositories={repositories} />
}
export default GitHubRepositories
