import { Dependency } from '../../libs/dependency.js';


export class UserService{
    static get() {
        const UserModel = Dependency.get('UserModel');
        return UserModel.get();
            
    };

    getList() {
        return this.userData.getList();
    }

    getByUsernameOrNull(username){
        const userList = this.userData.getList();
        for(const user of userList){
            if (user.username === username){
                return user;
            }
        }
    }

    create(data){
        if (!data.username){
            throw new Error('Missing username parameter')
        }

        if (!data.displayName){
            throw new Error('Missing username parameter')
        }

        if (this.getByUsernameOrNull(data.username)){
            throw new Error('Username already exists')
        }
    }

};


