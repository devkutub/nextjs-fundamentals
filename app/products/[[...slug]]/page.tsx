import React from 'react'

interface Props {
    params: { slug: string[] },
    searchParams: { sortOrder: string }
}

//catch all slug but will not work for /products page as [...slug] syntax is represents slug as important, [[..slug]] marks as optional slug
const ProductPage = ({ params: { slug }, searchParams: { sortOrder } }: Props) => {
    return (
        <div>Product Page & slag - {slug}; Sort Order - {sortOrder}</div>
    )
}

export default ProductPage