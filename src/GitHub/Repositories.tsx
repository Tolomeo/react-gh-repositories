import React from 'react'
import { useRepositoriesSearch } from '../Api'
import { Alert } from '../Theme'
import RepositoriesList from './RepositoriesList'

const GitHubRepositories = () => {
  const { loading, error, data } = useRepositoriesSearch()

  if (loading) return <Alert severity="info">Loading...</Alert>

  if (error) return <Alert severity="error">{error.message}</Alert>

  const repositories = data?.search.nodes || []

  return <RepositoriesList repositories={repositories} />
}
export default GitHubRepositories
