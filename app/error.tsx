/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import Error from "./_components/Error"
type ErrorProps = {
    error: Error & { digest?: string };
    reset: () => void
}

export default function error({ error, reset }: ErrorProps) {
    return (
        <Error
          
          reset={reset}        
        >
          {error.message}  
        </Error>
    )
}
