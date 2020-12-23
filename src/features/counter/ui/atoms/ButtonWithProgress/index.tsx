import {Theme, makeStyles, Button, CircularProgress, ButtonProps} from "@material-ui/core";
import React, {FC} from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative'
  },
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
}))

interface Props extends ButtonProps {
  inProgress?: boolean
}

const ButtonWithProgress: FC<Props> = (props) => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Button {...props}
              fullWidth
              disabled={props.inProgress}
              variant={'outlined'}
              color={'default'}>
        {props.children}
      </Button>
      {props.inProgress && (
        <CircularProgress size={24} className={classes.progress}/>
      )}
    </div>
  )
}

export default ButtonWithProgress