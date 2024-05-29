import { Dependency } from '../../libs/dependency.js';
import { MissingParameterError } from '../../libs/missing_parameter_error.js';
import { ConflictError } from '../../libs/conflict_error.js';
import bcrypt from 'bcrypt';


export class UserService{
    constructor() {
        this.userData = Dependency.get('userData');
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

        return null;
    }

    async hashPassword(password){
        const saltRounds = 10;

        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);

        return hash;
    }

    async create(data){
        if (!data.username){
            throw new MissingParameterError('username');
        }

        if (!data.displayName){
            throw new MissingParameterError('displayName');
        }

        if (!data.password){
            throw new MissingParameterError('password')
        }

        if (this.getByUsernameOrNull(data.username)){
            throw new ConflictError('Username already exists')
        }

        data.hashedPassword = await this.hashPassword(data.password);
        delete data.password;

        this.userData.create(data);
    }

};


