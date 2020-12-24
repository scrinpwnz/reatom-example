import {Box, Divider, Typography} from "@material-ui/core";
import React, {FC} from 'react'
import MarketItemList from "../../molecules/MarketItemList";
import {useAtom} from "@reatom/react";
import {marketAtom} from "../../../model";
import {marketItemsSelector} from "../../../model/selectors";

const Market: FC = () => {

  console.count('Market')
  const marketItems = useAtom(marketAtom, marketItemsSelector, [])

  return (
    <>
      <Box color={'primary.main'} p={2}>
        <Typography variant={'h4'}>
          Магазин
        </Typography>
      </Box>
      <Divider/>
      <MarketItemList marketItems={marketItems} variant={'market'}/>
    </>
  )
}

export default Market