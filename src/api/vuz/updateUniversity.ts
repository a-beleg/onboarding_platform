type TUniData = {
    full_name: string,
    short_name: string,
    city: string,
    post_code: string,
    address: string,
    phone: string,
    site: string,
    image: string,
    email: string
}

export const updateUniversity = (data: TUniData) => {
    return JSON.parse(JSON.stringify(
        {
            "success": true,
            "data": {
                "id": "fefd61df-e5bf-4aa6-9825-2bd5f86af3c2",
                "full_name": "Университет ИТМО",
                "short_name": "ИТМО",
                "city": "Санкт-Петербург",
                "post_code": "197101",
                "address": "Кронверкский пр., 49, Санкт-Петербург, Россия",
                "phone": "+7 (812) 457-17-90",
                "email": "info@itmo.ru",
                "org_name": "ФГАОУ ВО«Национальный исследовательский университет ИТМО»",
                "inn": "7813045547",
                "kpp": "781301001",
                "site": "https://itmo.ru/",
            },
            "errors": null
        }
    ));
}