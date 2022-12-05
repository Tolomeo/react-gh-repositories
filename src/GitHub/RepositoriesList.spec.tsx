import React from 'react'
import { render, screen } from '@testing-library/react'
import { Repository } from '../Api'
import RepositoriesList from './RepositoriesList'

const repositories: Repository[] = [
  {
    id: '1',
    name: 'repository1',
    url: 'repository1/url',
    forkCount: 1,
    stargazerCount: 1,
  },
  {
    id: '2',
    name: 'repository2',
    url: 'repository2/url',
    forkCount: 2,
    stargazerCount: 2,
  },
]

describe('RepositoriesList', () => {
  test(`Renders a list,
		and for each repository renders a list item containing its name, stars count and forks count`, () => {
    render(<RepositoriesList repositories={repositories} />)

    screen.getByRole('list')
    repositories.forEach((repositoryData, index) => {
      const listItem = screen.getAllByRole('listitem')[index]
      expect(listItem).toHaveTextContent(
        `${repositoryData.name}${repositoryData.stargazerCount}${repositoryData.forkCount}`,
      )
    })
  })

  test(`For each repository,
		it renders a link pointing to the actual repository url`, () => {
    render(<RepositoriesList repositories={repositories} />)

    repositories.forEach((repositoryData) => {
      screen.getByRole('link', {
        name: repositoryData.name,
      })
    })
  })
})
