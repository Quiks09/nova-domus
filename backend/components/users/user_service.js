import { Dependency } from "../../libs/dependency.js";


export class UserService{
    static get() {
        const UserModel = Dependency.get('UserModel');
        return UserModel.get();
            
    };

};

Dependency.add('UserService', UserService);
