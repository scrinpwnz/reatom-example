import {Theme, makeStyles, Box, Typography} from "@material-ui/core";
import React, {FC} from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    placeItems: 'center',
    height: '100%'
  }
}))

const Main: FC = () => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Box color={'secondary.main'}>
        <Typography variant={'h2'}>Главная страница</Typography>
      </Box>
    </div>
  )
}

export default Main