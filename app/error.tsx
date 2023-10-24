'use client';
import { FunctionComponent } from "react";

interface ErrorPageProps {
    error: Error;
    reset: () => void;
}
// this error page will handle the error for entire application except root layout
// you can add separate error handle page for root layout with the name global-error.tsx
const ErrorPage: FunctionComponent<ErrorPageProps> = ({ error, reset }) => {
    return (
        <>
            <div>An unexpected error occurred</div>
            <p>Error: - {error.message}</p>
            <button className="btn" onClick={reset}>Retry</button>
        </>
    );
}

export default ErrorPage;