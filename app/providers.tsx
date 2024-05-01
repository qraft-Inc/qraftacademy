import React from "react"

import { Provider as BalancerProvider } from 'react-wrap-balancer'

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <BalancerProvider>

            {children}

        </BalancerProvider>
    )
}
