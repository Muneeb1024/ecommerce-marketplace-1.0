'use client';
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setLoading] = useState(true);
    const { isSignedIn } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (isSignedIn === false) {
            router.replace("/sign-in")
        } else {
            setLoading(false);
        }
    }, [isSignedIn, router]);

    if (isLoading) return <p>Loading...</p>
    return (
        <>
            {children}
        </>
    )
}





