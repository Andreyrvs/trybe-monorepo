import connection from '../models/connection';
import UserModel from '../models/userModel';
import IUser from '../interface/IUser';

class UserService {
  public userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  public create = async (user: IUser) => {
    const result = await this.userModel.create(user);

    return result;
  };
}

export default UserService;