export class UserMockup{
    static list= [
        {
            username: 'admin',
            displayname: 'Adminstrador',
        },
        {
            username: 'pedro',
            displayname: 'Pedro Pe',
        }

    ]

    getList() {
        return UserMockup.list;
    };

    create(data){
        UserMockup.list.push(data);
    }

};
