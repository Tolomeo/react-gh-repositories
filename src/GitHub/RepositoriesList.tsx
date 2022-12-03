import React from 'react'
import { Repository } from '../Api'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Chip,
  Stack,
  StarIcon,
  GitHubIcon,
  ForkIcon,
} from '../Theme'

interface Props {
  repositories: Repository[]
}

const GitHubRepositoriesList = ({ repositories }: Props) => {
  return (
    <List>
      {repositories.map((repository) => (
        <ListItem key={repository.id}>
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemButton component="a" href={repository.url}>
            <Stack direction="row" spacing={2}>
              <ListItemText>{repository.name}</ListItemText>
              <ListItemText>
                <Chip icon={<StarIcon />} label={repository.stargazerCount} />
              </ListItemText>
              <ListItemText>
                <Chip icon={<ForkIcon />} label={repository.forkCount} />
              </ListItemText>
            </Stack>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}
export default GitHubRepositoriesList
