import React from 'react'

interface Props {
    params: { slug: string[] }
}

//catch all slug but will not work for /products page as [...slug] syntax is represents slug as important, [[..slug]] marks as optional slug
const ProductPage = ({ params: { slug } }: Props) => {
    return (
        <div>Product Page & slag - {slug}</div>
    )
}

export default ProductPage