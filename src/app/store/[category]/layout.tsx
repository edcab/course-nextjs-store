export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <html lang="en">
            <body>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Navegación de las categorias</a>
                            </li>
                            
                        </ul>
                    </nav>
                </header>
                {children}
            </body>
        </html>
    );
}