import Nav from "./../components/Nav";
import Footer from "./../components/Footer";
import "./globals.css";

export const metadata = {
    title: "Nubakes - best taste, unforgatable.",
    description: "Generated by Next.js",
    icon: {
        href: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="">
                <Nav />
                <main className="pt-8">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
