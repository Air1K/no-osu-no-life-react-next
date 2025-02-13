import * as Yup from 'yup';
import '@/locales/yupLocale';

export const loginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
});
