import {Theme, makeStyles, Paper} from "@material-ui/core";
import React, {FC} from 'react'
import ShopTabs from "../molecules/ShopTabs";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    padding: theme.spacing(2, 3),
    display: 'grid',
    gridGap: theme.spacing(2),
    userSelect: 'none',
    gridTemplateRows: '1fr fit-content(100%)'
  },
  paper: {}
}))

interface Props {

}

const Shop: FC<Props> = props => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper elevation={5} className={classes.paper}>
        <div>content</div>

      </Paper>
      <ShopTabs/>
    </div>
  )
}

export default Shop