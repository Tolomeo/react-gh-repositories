import React from 'react'
import { useRepositoriesSearch } from '../Api'

const GitHubRepositories = () => {
  const { loading, error, data } = useRepositoriesSearch()

  if (loading) return <span>Loading...</span>

  if (error) return <span>Error...</span>

  return <span>{JSON.stringify(data)}</span>
}
export default GitHubRepositories
