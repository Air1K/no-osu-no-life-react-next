import {EnvelopeIcon, LockClosedIcon, XMarkIcon} from "@heroicons/react/24/outline";
import ModalComponent from "@/components/ModalComponent/ModalComponent";
import {Button, Checkbox, IconButton, Input, Typography} from "@material-tailwind/react";
import {size} from "@material-tailwind/react/types/components/dialog";
import {SubmitHandler, useForm} from "react-hook-form";
import {loginSchema} from "@/utils/validationSchema";
import {yupResolver} from "@hookform/resolvers/yup";
import {useLoginForm} from "@/hook/useForm/useLoginForm";

interface Props {
    size: size;
    handleOpen: () => void;
}

interface IFormInput {
    email?: string;
    password?: string;
    rememberMe?: boolean;
}
const LoginModal = ({size, handleOpen}: Props) => {
    const { register, handleSubmit, errors, onSubmit } = useLoginForm();

    return (
        <ModalComponent
            size={size}
            handleOpen={handleOpen}
            headerContent={(handleClose) => (
                <div className='w-full relative'>
                    <h2>Авторизация</h2>
                    <div className="absolute top-0 right-0">
                        <IconButton variant="text" onClick={handleClose}><XMarkIcon width={24} height={24}/></IconButton>
                    </div>
                </div>
            )}
            bodyContent={
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div>
                        <Input
                            label="Email"
                            type="email"
                            size="lg"
                            icon={<EnvelopeIcon width={20} height={20}/>}
                            {...register('email')}
                            error={!!errors.email}
                        />
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    </div>
                    <div>
                        <Input
                            label="Password"
                            type="password"
                            size="lg"
                            icon={<LockClosedIcon width={20} height={20}/>}
                            {...register('password')}
                            error={errors.password ? true : false}
                        />
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                    </div>
                    <div className="-ml-2.5">
                        <Checkbox
                            label="Запомнить меня"
                            {...register('rememberMe')}
                        />
                    </div>
                    <Button type="submit" variant="gradient" fullWidth>
                        Войти
                    </Button>
                </form>
            }
            footerContent={(handleClose) => (
                <Typography variant="small" className="mt-3 flex justify-center">
                    Don&apos;t have an account?
                    <Typography
                        as="a"
                        href="#signup"
                        variant="small"
                        color="blue-gray"
                        className="ml-1 font-bold"
                    >
                        Sign up
                    </Typography>
                </Typography>
            )}
        />
    );
};

export default LoginModal;
