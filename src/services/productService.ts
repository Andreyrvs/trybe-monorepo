import ProductModel from '../models/productModel';
import connection from '../models/connection';
import IProduct from '../interface/IProduct';

class ProductService {
  public productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  public create = async (product: IProduct) => {
    const result = await this.productModel.create(product);

    return result;
  };

  public getAll = async () => {
    const result = await this.productModel.getAll();

    return result;
  };
}

export default ProductService;