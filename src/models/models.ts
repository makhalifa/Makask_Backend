import CartItemsModel from './Cart/CartItemModel'
import CartModel from './Cart/CartModel'
import CardModel from './Customer/CardModel'
import ProfileModel from './Customer/ProfileModel'
import SizeModel from './Customer/SizeModel'
import OrderItemsModel from './Order/OrderItemsModel'
import OrderModel from './Order/OrderModel'
import ReturnModel from './Order/ReturnModel'
import StatusHistoryModel from './Order/StatusHistoryModel'
import ReviewModel from './ReviewModel'
import CustomerModel from './Customer/CustomerModel'
import CustomerAddressesModel from './Customer/AddressesModel'
import StatusModel from './Order/StatusModel'
import CategoryModel from './Product/CategoryModel'
import ColorsModel from './Product/ColorsModel'
import ProductColorsModel from './Product/ProductColorsModel'
import ProductSizesModel from './Product/Sizes'
import SubcategoryModel from './Product/SubcategoryModel'
import StockModel from './Product/Stock'
import Product from './Product/ProductModel'

const CartModels = { CartModel, CartItemsModel }
const customerModels = { CustomerModel, CustomerAddressesModel, CardModel, ProfileModel }
const OrderModels = {
    OrderItemsModel,
    OrderModel,
    ReturnModel,
    StatusHistoryModel,
    StatusModel,
}
const ProductModels = {
    CategoryModel,
    ColorsModel,
    ProductColorsModel,
    ProductSizesModel,
    Product,
    StockModel,
    SubcategoryModel,
}
const ReviewModels = { ReviewModel }

export default {
    CartModels,
    customerModels,
    OrderModels,
    ProductModels,
    ReviewModels,
}
