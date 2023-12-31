import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: { id: number }
}

const UserDetailsPage = ({ params: { id } }: Props) => {
    if (id > 10) return notFound();
    return (
        <div>Details for User {id}</div>
    )
}

export default UserDetailsPage