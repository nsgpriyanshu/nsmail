import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React from 'react';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="container relative min-h-screen flex items-center justify-center mx-auto w-full">
            <div className="lg:p-8 mx-auto w-full max-w-sm">
                <Link href="/" className="absolute top-4 left-4">
                    <Button size="sm" variant="outline">
                        <ArrowLeftIcon className="size-4 mr-1" />
                        Home
                    </Button>
                </Link>
                {children}
            </div>
        </div>
    );
};
