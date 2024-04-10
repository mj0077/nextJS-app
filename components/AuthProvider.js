'use client'
import { SessionProvider } from "next-auth/react"

const AuthProvider = ({
    // Component,
    children
    // pageProps: { session, ...pageProps },
}) => {
    return (
        // <SessionProvider session={session}>
        //     <Component {...pageProps} />
        // </SessionProvider>
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default AuthProvider;
