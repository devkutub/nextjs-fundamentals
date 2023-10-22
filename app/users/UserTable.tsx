import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
}

const UserTable = async () => {
    // with only fetch and no others parameter next will consider this page as static generation, page will be generated at build time
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            cache: "no-store", // next will not store the data in cache
            // next: { revalidate: 10 } // if this option enabled then cache option should be removed and next will run a job every 10 seconds to get the fresh data in background
        }
    );
    const users: User[] = await res.json();

    return (
        <table className='table table-zebra'>
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
        </table>
    )
}

export default UserTable