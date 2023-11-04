import {TUser} from './addUser';

export const updateUser = (id: string, data: TUser) => {
    return JSON.parse(JSON.stringify({
        "success": true,
        "data": [
            {
                "id": "3948941d-f535-44ee-a583-02dbd94badc3",
                "first_name": "Алексей",
                "last_name": "Белоусов",
                "middle_name": "Николаевич",
                "photo": "img/userpic.png",
                "email": "alexey.beleg@gmail.com",
                "phone": "+7(932)999-0185"
            }
        ],
        "errors": null
    }));
}