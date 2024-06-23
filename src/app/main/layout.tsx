import NavbarUi from "@/components/ui/navbar/Navbar";

export default function MainLayout({
        children,
    }: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavbarUi/>
            {children}
        </>
    )
}
