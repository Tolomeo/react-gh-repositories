import React from 'react'
// import { Repository } from '../Api'
import { Box, TextField } from '../Theme'

interface Props {
  value: string
  setValue: (search: string) => unknown
}

const GitHubRepositoriesSearch = ({ value, setValue }: Props) => {
  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
  }

  return (
    <Box component="form" onSubmit={onSubmit} noValidate>
      <TextField
        value={value}
        onInput={({ target }: React.ChangeEvent<HTMLInputElement>) =>
          setValue(target.value)
        }
      />
    </Box>
  )
}

export default GitHubRepositoriesSearch
