import React from 'react';
import { sort } from 'fast-sort';
import Link from 'next/link';

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    sortOrder: string;
}

// All you need to know about Next Link
// 1) Only downloads the content of the targe pages
// 2) Pre-fetches links that are in the viewport
// 3) Caches pages on the client

const UserTable = async ({ sortOrder }: Props) => {
    // with only fetch and no others parameter next will consider this page as static generation, page will be generated at build time
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            cache: "no-store", // next will not store the data in cache
            // next: { revalidate: 10 } // if this option enabled then cache option should be removed and next will run a job every 10 seconds to get the fresh data in background
        }
    );
    const users: User[] = await res.json();

    const sortedUsers = sort(users).asc(user => sortOrder === 'email' ? user.email : user.name);

    return (
        <table className='table table-zebra'>
            <thead>
                <tr>
                    <th>
                        {/* Name */}
                        <Link href='/users?sortOrder=name'>Name</Link>
                    </th>
                    <th>
                        {/* Email */}
                        <Link href='/users?sortOrder=email'>Email</Link>
                    </th>
                </tr>
            </thead>
            <tbody>
                {/* {users.map((d) => ( */}
                {sortedUsers.map((d) => (
                    <tr key={d.id}>
                        <td>{d.name}</td>
                        <td>{d.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UserTable