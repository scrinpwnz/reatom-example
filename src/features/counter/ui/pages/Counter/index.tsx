import {Theme, makeStyles, Paper, Typography, Box, Button} from "@material-ui/core";
import React from 'react'
import {useAction, useAtom} from "@reatom/react";
import {counterAtom, decrementAction, getRandomAction, incrementAction} from "../../../model";
import ButtonWithProgress from "../../atoms/ButtonWithProgress";
import {counterSelector, loadingSelector} from "../../../model/selectors";
import {useJsonTreeSubscribe} from "../../../../jsonTree/hooks/useJsonTreeSubscribe";
import {navigationAtom} from "../../../../navigation/model";

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    height: '100%',
    padding: theme.spacing(2, 3),
    display: 'grid',
    placeItems: 'center',
    userSelect: 'none'
  },
  root: {
    display: 'grid',
    placeItems: 'center',
    padding: theme.spacing(3),
    gridGap: theme.spacing(1),
  },
  incrementButtons: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridGap: theme.spacing(1)
  },
  randomButtons: {
    display: 'grid',
    width: '100%',
    gridGap: theme.spacing(1)
  }
}))



const Counter: React.FC = () => {

  const classes = useStyles()

  // const {counter, loading} = useAtom(counterAtom)
  // const {counter, loading} = useAtom(counterAtom)
  const counter = useAtom(counterAtom, counterSelector, [])
  const loading = useAtom(counterAtom, loadingSelector, [])
  console.log({counter, loading})
  const increment = useAction(incrementAction)
  const decrement = useAction(decrementAction)
  const getRandom = useAction(getRandomAction)
  useJsonTreeSubscribe(counterAtom)

  const handleRandomButton = (index: number) => () => getRandom(index)

  return (
    <Paper elevation={3} className={classes.paper}>
      <div className={classes.root}>
        <Box color={'primary.main'}>
          <Typography variant={'h2'}>
            {counter}
          </Typography>
        </Box>
        <div className={classes.incrementButtons}>
          <Button variant={'outlined'} color={'secondary'} onClick={decrement}>
            -
          </Button>
          <Button variant={'outlined'} color={'primary'} onClick={increment}>
            +
          </Button>
        </div>
        <div className={classes.randomButtons}>
          <ButtonWithProgress onClick={handleRandomButton(0)} inProgress={loading[0]}>
            Random 1
          </ButtonWithProgress>
          <ButtonWithProgress onClick={handleRandomButton(1)} inProgress={loading[1]}>
            Random 2
          </ButtonWithProgress>
          <ButtonWithProgress onClick={handleRandomButton(2)} inProgress={loading[2]}>
            Random 3
          </ButtonWithProgress>
        </div>
      </div>
    </Paper>
  )
}

export default Counter