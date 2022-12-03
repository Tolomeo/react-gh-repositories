import React from 'react'
import GitHubApiProvider from './Api'
import { Repositories } from './GitHub'
import config from './config'

const App = () => {
  return (
    <GitHubApiProvider authenticationToken={config.auth.token}>
      <Repositories />
    </GitHubApiProvider>
  )
}

export default App
