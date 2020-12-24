import {Card, CardActionArea, CardContent, CardMedia, makeStyles, Theme, Typography} from "@material-ui/core";
import React, {FC, useMemo} from 'react'
import {IMarketItem, Tab} from "../../../model/interfaces";
import {useAction, useAtom} from "@reatom/react";
import {deleteFromCartAction, marketAtom, moveToCartAction} from "../../../model";
import {itemsInCartSelector} from "../../../model/selectors";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  media: {
    height: 140,
  }
}))

interface Props {
  item: IMarketItem
  variant: Tab
}

const MarketItem: FC<Props> = ({item, variant}) => {

  const classes = useStyles()
  const moveToCart = useAction(moveToCartAction)
  const deleteFromCart = useAction(deleteFromCartAction)
  const itemsInCart = useAtom(marketAtom, itemsInCartSelector, [])

  const isItemInCart = itemsInCart.includes(item.uuid)

  const handleClick = () => {
    if (isItemInCart) {
      return deleteFromCart(item.uuid)
    }
    moveToCart(item.uuid)
  }

  const marketText = useMemo(() => (
    <Typography gutterBottom
                variant={'body1'}
                color={isItemInCart ? 'secondary' : 'textSecondary'}>
      {isItemInCart ? 'В корзине!' : 'Добавить в корзину'}
    </Typography>
  ), [isItemInCart])

  const cartText = (
    <Typography gutterBottom
                variant={'body1'}
                color={'secondary'}>
      Убрать из корзины
    </Typography>
  )

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className={classes.media}
          image={item.img}
          title={item.caption}
        />
        <CardContent>
          <Typography gutterBottom
                      variant={'h6'}>
            {item.caption}
          </Typography>
          <Typography gutterBottom
                      variant={'body1'}
                      color={'primary'}>
            {item.price}
          </Typography>
          {variant === 'market'
            ? marketText
            : cartText}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MarketItem