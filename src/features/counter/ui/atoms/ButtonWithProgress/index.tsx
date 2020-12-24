import {Button, ButtonProps, CircularProgress, makeStyles, Theme} from "@material-ui/core";
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

interface Props {
  buttonProps: ButtonProps
  inProgress?: boolean
}

const ButtonWithProgress: FC<Props> = ({buttonProps, inProgress, children}) => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Button {...buttonProps}
              fullWidth
              disabled={inProgress}
              variant={'outlined'}
              color={'default'}>
        {children}
      </Button>
      {inProgress && (
        <CircularProgress size={24} className={classes.progress}/>
      )}
    </div>
  )
}

export default ButtonWithProgress