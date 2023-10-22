import React from 'react'

interface Props {
    params: { id: number }
}

const UserDetailsPage = ({ params: { id } }: Props) => {
    return (
        <div>Details for User {id}</div>
    )
}

export default UserDetailsPage