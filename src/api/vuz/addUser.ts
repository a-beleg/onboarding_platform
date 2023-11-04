
export type TUser = {
    first_name: string
    last_name: string
    middle_name: string
    email: string
    phone: string
    photo: string
}

export const addUser = (data: TUser) => {
    return JSON.parse(JSON.stringify({
        "success": true,
        "data": [
            {
                "id": "3948941d-f535-44ee-a583-f53594f535",
                "first_name": "Василий",
                "last_name": "Васин",
                "middle_name": "Васильевич",
                "photo": "img/userpic.png",
                "email": "vasya@gmail.com",
                "phone": "+7(932)999-0185"
            }
        ],
        "errors": null
    }));
}