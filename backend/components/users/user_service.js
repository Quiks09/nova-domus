import { Dependency } from "../../libs/dependency.js";


export class UserService{
    static get() {
        return [
            {
                username: 'pedro',
                displayname: 'Pedro',
            },
            {
                username: 'ana',
                displayname: 'Ana Laura',
            }
        ];
    };

};

Dependency.add('UserService', UserService);
