import {makeStyles, Paper, Theme} from "@material-ui/core";
import React, {FC} from 'react'
import ShopTabs from "../molecules/ShopTabs";
import Market from "../organisms/Market";
import {tabSelector} from "../../model/selectors";
import {marketAtom} from "../../model";
import {useAtom} from "@reatom/react";
import Cart from "../organisms/Cart";
import {useJsonTreeSubscribe} from "../../../jsonTree/hooks/useJsonTreeSubscribe";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    display: 'grid',
    gridGap: theme.spacing(2),
    userSelect: 'none',
    gridTemplateRows: 'fit-content(100%) 1fr'
  },
  paper: {}
}))

interface Props {

}

const tabsMapper = {
  'market': <Market/>,
  'cart': <Cart/>
}

const Shop: FC<Props> = props => {

  const classes = useStyles()
  const tab = useAtom(marketAtom, tabSelector, [])
  useJsonTreeSubscribe(marketAtom)

  return (
    <div className={classes.root}>
      <ShopTabs/>
      <Paper elevation={5} className={classes.paper}>
        {tabsMapper[tab]}
      </Paper>
    </div>
  )
}

export default Shop