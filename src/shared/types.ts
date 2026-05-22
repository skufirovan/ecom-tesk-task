export const ProductCategory = {
  GADGETS: "Гаджеты",
  AUDIO: "Аудио",
  SMARTPHONES: "Смартфоны",
  HOME: "Дом",
  SMART_HOME: "Умный дом",
  ACCESSORIES: "Аксессуары",
  COMPUTERS: "Компьютеры",
} as const

export type ProductCategoryType =
  (typeof ProductCategory)[keyof typeof ProductCategory]

export interface Product {
  id: number
  title: string
  price: number
  category: ProductCategoryType
  image: string
  description: string
}
