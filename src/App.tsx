import React from 'react'
import GitHubApiProvider from './Api'
import { Repositories } from './GitHub'

const App = () => {
  return (
    <GitHubApiProvider>
      <Repositories />
    </GitHubApiProvider>
  )
}

export default App
