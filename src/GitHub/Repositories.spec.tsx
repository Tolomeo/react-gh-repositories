import React from 'react'
import { act, render, screen, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
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

jest.mock('./RepositoriesSearch', () => ({
  __esModule: true,
  default: ({ setValue }: { setValue: (search: string) => unknown }) => (
    <button type="button" onClick={() => setValue('PiffTheMagicDragon')}>
      RepositoriesSearch
    </button>
  ),
}))

describe('Repositories', () => {
  beforeEach(() => {
    ;(useRepositoriesSearchMock as jest.Mock).mockClear()
  })

  test(`When it gets rendered,
		it queries for repositories search data with an initial default query`, () => {
    render(<Repositories />)

    expect(useRepositoriesSearchMock).toHaveBeenCalledTimes(1)
    expect(useRepositoriesSearchMock).toHaveBeenCalledWith('is:public')
  })

  test(`When the user changes the search query
		it queries for repositories search data with the new query string`, async () => {
    render(<Repositories />)

    act(() => {
      user.click(screen.getByRole('button', { name: 'RepositoriesSearch' }))
    })

    await waitFor(() => {
      expect(useRepositoriesSearchMock).toHaveBeenCalledTimes(2)
    })
    expect(useRepositoriesSearchMock).toHaveBeenLastCalledWith(
      'PiffTheMagicDragon',
    )
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

  test(`It renders the repositories search,
		and it renders the repositories search list`, () => {
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

    screen.getByText('RepositoriesSearch')
    screen.getByText('RepositoriesList')
  })
})
