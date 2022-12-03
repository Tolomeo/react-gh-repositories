import React from 'react'
import GitHubApiProvider from './Api'
import ThemeProvider, { Layout } from './Theme'
import { Repositories } from './GitHub'
import config from './config'

const App = () => {
  return (
    <ThemeProvider>
      <GitHubApiProvider authenticationToken={config.auth.token}>
        <Layout>
          <Repositories />
        </Layout>
      </GitHubApiProvider>
    </ThemeProvider>
  )
}

export default App
