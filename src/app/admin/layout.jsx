import "../../styles/global.css";

export const metadata = {
    title: 'BookMyHotel Admin',
    description: 'Generated by Next.js',
}

export default function RootLayout({
    children,
}) {
    return (
        <>
            <>{children}</>
        </>
    )
}
