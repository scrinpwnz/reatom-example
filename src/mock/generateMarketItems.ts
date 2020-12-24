import {IMarketItem} from "../features/shop/model/interfaces";
import faker from "faker";

export const generateMarketItems = (count: number): IMarketItem[] => {
  const result: IMarketItem[] = []
  for (let i = 0; i < count; i++) {
    result.push({
      uuid: faker.random.uuid(),
      caption: faker.commerce.product(),
      price: faker.commerce.price(100, 10000, 2, '₽ '),
      img: faker.image.imageUrl(400, 200, 'cats', true)
    })
  }
  return result
}