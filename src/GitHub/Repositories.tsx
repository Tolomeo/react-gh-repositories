import React, { useState } from 'react'
import { useRepositoriesSearch } from '../Api'
import { Box, Alert } from '../Theme'
import RepositoriesList from './RepositoriesList'
import RepositoriesSearch from './RepositoriesSearch'

const GitHubRepositories = () => {
  const [searchValue, setSearchValue] = useState<string>('is:public')
  const { loading, error, data } = useRepositoriesSearch(searchValue)

  const repositories = data?.search.nodes || []

  return (
    <Box>
      <Box pb={4}>
        <RepositoriesSearch value={searchValue} setValue={setSearchValue} />
      </Box>
      {loading && <Alert severity="info">Loading...</Alert>}
      {error && <Alert severity="error">{error.message}</Alert>}
      <RepositoriesList repositories={repositories} />
    </Box>
  )
}
export default GitHubRepositories
