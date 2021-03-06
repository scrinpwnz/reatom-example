import {makeStyles, Theme} from "@material-ui/core";
import React, {FC} from 'react'
import MarketItem from "../../atoms/MarketItem";
import {IMarketItem, Tab} from "../../../model/interfaces";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    maxHeight: 680,
    overflow: 'auto',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gridGap: theme.spacing(2),
    padding: theme.spacing(2)
  }
}))

interface Props {
  marketItems: IMarketItem[]
  variant: Tab
}

const MarketItemList: FC<Props> = ({marketItems, variant}) => {

  console.count('MarketItemList')
  const classes = useStyles()

  const mappedMarketItems = marketItems.map((item, index) => (
    <MarketItem key={index} item={item} variant={variant}/>
  ))

  return (
    <div className={classes.root}>
      {mappedMarketItems}
    </div>
  )
}

export default MarketItemList