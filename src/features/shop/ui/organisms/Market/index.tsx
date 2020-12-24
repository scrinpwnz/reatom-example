import {Box, Divider, makeStyles, Theme, Typography} from "@material-ui/core";
import React, {FC} from 'react'
import MarketItemList from "../../molecules/MarketItemList";
import {useAtom} from "@reatom/react";
import {marketAtom} from "../../../model";
import {marketItemsSelector} from "../../../model/selectors";

const useStyles = makeStyles((theme: Theme) => ({
  root: {}
}))

interface Props {

}

const Market: FC<Props> = props => {

  console.count('Market')
  const classes = useStyles()
  const marketItems = useAtom(marketAtom, marketItemsSelector, [])

  return (
    <div className={classes.root}>
      <Box color={'primary.main'} p={2}>
        <Typography variant={'h4'}>
          Магазин
        </Typography>
      </Box>
      <Divider/>
      <MarketItemList marketItems={marketItems} variant={'market'}/>
    </div>
  )
}

export default Market