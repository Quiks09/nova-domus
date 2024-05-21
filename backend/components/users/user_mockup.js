import { Dependency } from "../../libs/dependency.js";


export class UserMockup{
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

Dependency.add('UserModel', UserMockup);
