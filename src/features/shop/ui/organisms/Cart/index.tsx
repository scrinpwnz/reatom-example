import {Theme, makeStyles} from "@material-ui/core";
import React, {FC} from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  root: {}
}))

interface Props {

}

const Cart: FC<Props> = props => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
    </div>
  )
}

export default Cart