import React from 'react';

interface User {
    id: number;
    name: string;
}

const UsersPage = async () => {
    // with only fetch and no others parameter next will consider this page as static generation, page will be generated at build time
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            cache: "no-store", // next will not store the data in cache
            // next: { revalidate: 10 } // if this option enabled then cache option should be removed and next will run a job every 10 seconds to get the fresh data in background
        }
    );
    const users: User[] = await res.json();

    // timestamp value will not change if its static generation/rendering, will change in dynamic rendering and pass cache as "no-store" in fetch method
    return (
        <>
            <h1>Users</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <ul>{users.map((d) => <li key={d.id}>{d.name}</li>)}</ul>
        </>
    )
}

export default UsersPage