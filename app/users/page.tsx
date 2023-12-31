import React, { Suspense } from 'react';
import UserTable from './UserTable';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Users Page',
    description: 'List of all users',
}

// interface User {
//     id: number;
//     name: string;
//     email: string;
// }

interface Props {
    searchParams: { sortOrder: string }
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
    // // with only fetch and no others parameter next will consider this page as static generation, page will be generated at build time
    // const res = await fetch(
    //     "https://jsonplaceholder.typicode.com/users",
    //     {
    //         cache: "no-store", // next will not store the data in cache
    //         // next: { revalidate: 10 } // if this option enabled then cache option should be removed and next will run a job every 10 seconds to get the fresh data in background
    //     }
    // );
    // const users: User[] = await res.json();

    // timestamp value will not change if its static generation/rendering, will change in dynamic rendering and pass cache as "no-store" in fetch method
    return (
        <>
            <h1>Users</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <Link href="/users/new" className='btn'>new User</Link>
            {/* <Suspense fallback={<p>...Loading</p>}> */}
            <UserTable sortOrder={sortOrder} />
            {/* </Suspense> */}
            {/* <table className='table table-zebra'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((d) => (
                        <tr>
                            <td>{d.name}</td>
                            <td>{d.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </>
    )
}

export default UsersPage