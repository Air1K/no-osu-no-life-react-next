import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import {size} from "@material-tailwind/react/types/components/dialog";
interface Props {
    headerContent: (handleOpen: () => void) => React.ReactNode;
    bodyContent: React.ReactNode;
    footerContent: (handleOpen: () => void) => React.ReactNode;
    size: size;
    handleOpen: () => void;
}
const ModalComponent = ({headerContent, bodyContent, footerContent, size, handleOpen}: Props) => {
    return (
        <Dialog open={
            size === "xs" ||
            size === "sm" ||
            size === "md" ||
            size === "lg" ||
            size === "xl" ||
            size === "xxl"
        } size={size} handler={handleOpen}>
            <DialogHeader>{headerContent(handleOpen)}</DialogHeader>
            <DialogBody>{bodyContent}</DialogBody>
            <DialogFooter>{footerContent(handleOpen)}</DialogFooter>
        </Dialog>
    );
};

export default ModalComponent;
