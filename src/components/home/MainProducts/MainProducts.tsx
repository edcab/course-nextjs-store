"use client"

export const MainProducts = () => {
    console.log('MainProducts component rendered');
    console.log(process.env.NEXT_PUBLIC_SHOPIFY_HOSTNAME);
    return (
        <section>
            <h1>Main Products</h1>
        </section>
    );
}