import React from 'react'
import { render, screen } from '@testing-library/react'
import { useRepositoriesSearch as useRepositoriesSearchMock } from '../Api'
import Repositories from './Repositories'

jest.mock('../Api', () => ({
  __esModule: true,
  // ...jest.requireActual('../Api'),
  useRepositoriesSearch: jest.fn().mockImplementation(() => ({
    error: null,
    loading: false,
    data: {
      search: {
        nodes: [],
      },
    },
  })),
}))

jest.mock('./RepositoriesList', () => ({
  __esModule: true,
  default: () => <span>RepositoriesList</span>,
}))

describe('Repositories', () => {
  beforeEach(() => {
    ;(useRepositoriesSearchMock as jest.Mock).mockClear()
  })

  test(`When it gets rendered,
		it queries for repositories search data`, () => {
    render(<Repositories />)

    expect(useRepositoriesSearchMock).toHaveBeenCalledTimes(1)
  })

  test(`When repositories data fetching is in progress,
		it displays a loading message`, () => {
    ;(useRepositoriesSearchMock as jest.Mock).mockImplementationOnce(() => ({
      error: null,
      loading: true,
      data: undefined,
    }))
    render(<Repositories />)

    screen.getByText('Loading...')
  })

  test(`When repositories data fetching fails,
		it displays an error message`, () => {
    ;(useRepositoriesSearchMock as jest.Mock).mockImplementationOnce(() => ({
      error: {
        message: 'Could not retrieve data',
      },
      loading: false,
      data: undefined,
    }))
    render(<Repositories />)

    screen.getByText('Could not retrieve data')
  })

  test(`When repositories data fetching succeeds,
		it renders the repositories list`, () => {
    ;(useRepositoriesSearchMock as jest.Mock).mockImplementationOnce(() => ({
      error: null,
      loading: false,
      data: {
        search: {
          nodes: [],
        },
      },
    }))
    render(<Repositories />)

    screen.getByText('RepositoriesList')
  })
})
