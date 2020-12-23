import {Theme, makeStyles, BottomNavigation, BottomNavigationAction, Paper} from "@material-ui/core";
import React, {FC} from 'react'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme: Theme) => ({
  root: {}
}))

interface Props {

}

const ShopTabs: FC<Props> = props => {

  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  return (
    <Paper elevation={5} className={classes.root}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label={'Магазин'} icon={<LocalMallIcon />} />
        <BottomNavigationAction label={'Корзина'} icon={<ShoppingCartIcon />} />
      </BottomNavigation>
    </Paper>
  )
}

export default ShopTabs