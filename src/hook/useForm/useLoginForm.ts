import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@/utils/validationSchema';

interface IFormInput {
    email?: string;
    password?: string;
    rememberMe?: boolean;
}

export const useLoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInput>({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data);
        // handle form submission
    };

    return { register, handleSubmit, errors, onSubmit };
};
