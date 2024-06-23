import { setLocale } from 'yup';

setLocale({
    mixed: {
        required: 'Обязательное поле',
    },
    string: {
        email: 'Неверный формат email',
        min: 'Минимальная длина ${min} символов',
    },
    number: {
        min: 'Значение должно быть больше или равно ${min}',
        max: 'Значение должно быть меньше или равно ${max}',
    },
});
