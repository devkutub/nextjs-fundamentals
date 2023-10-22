import React from 'react'

interface Props {
    params: { id: number, photoId: number }
}

const UserPhotoPage = ({ params: { id, photoId } }: Props) => {
    return (
        <div>Photo ID {photoId} of User {id}</div>
    )
}

export default UserPhotoPage