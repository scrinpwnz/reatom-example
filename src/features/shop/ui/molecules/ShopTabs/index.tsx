import {Badge, BottomNavigation, BottomNavigationAction, makeStyles, Paper, Theme} from "@material-ui/core";
import React, {FC, memo} from 'react'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useAction, useAtom} from "@reatom/react";
import {marketAtom, setTabAction} from "../../../model";
import {itemsInCartCountSelector, tabSelector} from "../../../model/selectors";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(1, 0)
  }
}))

const ShopTabs: FC = () => {

  console.count('ShopTabs')
  const classes = useStyles()
  const tab = useAtom(marketAtom, tabSelector, [])
  const cartCount = useAtom(marketAtom, itemsInCartCountSelector, [])
  const setTab = useAction(setTabAction)

  const cartIcon = (
    <Badge badgeContent={cartCount}
           anchorOrigin={{
             vertical: 'top',
             horizontal: 'right',
           }}
           color={'secondary'}
           showZero>
      <ShoppingCartIcon/>
    </Badge>
  )

  return (
    <Paper elevation={5} className={classes.root}>
      <BottomNavigation
        value={tab}
        onChange={(event, newValue) => {
          setTab(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction value={'market'}
                                label={'Магазин'}
                                icon={<LocalMallIcon/>}/>
        <BottomNavigationAction value={'cart'}
                                label={'Корзина'}
                                icon={cartIcon}/>
      </BottomNavigation>
    </Paper>
  )
}

export default memo(ShopTabs)