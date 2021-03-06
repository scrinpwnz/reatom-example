import {Box, makeStyles, Theme, Typography} from "@material-ui/core";
import React, {FC} from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    placeItems: 'center',
    height: '100%'
  }
}))

const Main: FC = () => {

  console.count('Main')
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Box color={'secondary.main'}>
        <Typography variant={'h3'}>Главная страница</Typography>
      </Box>
    </div>
  )
}

export default Main