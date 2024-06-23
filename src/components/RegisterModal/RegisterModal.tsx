import {Button, Checkbox, IconButton, Input, Typography} from "@material-tailwind/react";
import {EnvelopeIcon, LockClosedIcon, XMarkIcon} from "@heroicons/react/24/outline";
import ModalComponent from "@/components/ModalComponent/ModalComponent";
import {size} from "@material-tailwind/react/types/components/dialog";

interface Props {
    size: size;
    handleOpen: () => void;
}

const RegisterModal = ({size, handleOpen}: Props) => {
    return (
        <ModalComponent
            size={size}
            handleOpen={handleOpen}
            headerContent={(handleClose) => (
                <div className='w-full relative'>
                    <h2>Регистрация</h2>
                    <div className="absolute top-0 right-0">
                        <IconButton variant="text" onClick={handleClose}><XMarkIcon width={24} height={24}/></IconButton>
                    </div>
                </div>
            )}
            bodyContent={
                <div className="flex flex-col gap-4">
                    <Input
                        label="Email"
                        type="email"
                        size="lg"
                        icon={<EnvelopeIcon width={20} height={20}/>}
                    />
                    <Input
                        label="Password"
                        type="password"
                        size="lg"
                        icon={<LockClosedIcon width={20} height={20}/>}
                    />
                    <div className="-ml-2.5">
                        <Checkbox label="Запомнить меня"/>
                    </div>
                </div>
            }
            footerContent={(handleClose) => (
                <>
                    <Button variant="gradient" fullWidth>
                        Войти
                    </Button>
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
                </>
            )}
        />
    );
};

export default RegisterModal;
