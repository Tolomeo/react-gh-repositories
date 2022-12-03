import React from 'react'
import { ApolloProvider } from '@apollo/client'
import createClient from './client'

interface Props {
  children: React.ReactNode
  authenticationToken: string
}

const GitHubApiProvider = ({ children, authenticationToken }: Props) => (
  <ApolloProvider client={createClient(authenticationToken)}>
    {children}
  </ApolloProvider>
)

export default GitHubApiProvider
