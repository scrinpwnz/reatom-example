import {Box, Divider, makeStyles, Theme, Typography} from "@material-ui/core";
import React, {FC} from 'react'
import MarketItemList from "../../molecules/MarketItemList";
import {useAtom} from "@reatom/react";
import {cartAtom} from "../../../model";

const useStyles = makeStyles((theme: Theme) => ({
  root: {}
}))

interface Props {

}

const Cart: FC<Props> = props => {

  console.count('Cart')
  const classes = useStyles()
  const marketItems = useAtom(cartAtom)

  return (
    <div className={classes.root}>
      <Box color={'primary.main'} p={2}>
        <Typography variant={'h4'}>
          Корзина
        </Typography>
      </Box>
      <Divider/>
      <MarketItemList marketItems={marketItems} variant={'cart'}/>
    </div>
  )
}

export default Cart