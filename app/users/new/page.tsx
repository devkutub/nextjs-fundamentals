'use client';
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

interface NewUserPageProps {

}

const NewUserPage: FunctionComponent<NewUserPageProps> = () => {
    const router = useRouter();
    return (
        <>
            <h1>new User Page</h1>
            <button className="btn btn-primary" onClick={() => router.push("/users")}>Create</button>
        </>
    );
}

export default NewUserPage;