const errors = {
    401: 'Не авторизован',
    403: 'Доступ запрещён',
    404: 'Админ не найден',
    409: 'Уже зарегистрирован',
    413: 'Размер фото больше 5Mb',
    500: 'Ошибка сервера',
}

const DEFAULT_ERROR = 'Что-то пошло не так'

export function getErrorText(code: keyof typeof errors) {
    return errors[code] || DEFAULT_ERROR;
}