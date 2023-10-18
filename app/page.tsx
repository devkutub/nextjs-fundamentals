import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>Hey NextJS</h1>
      <Link href="/users">Go to users page</Link>
      <ProductCard />
    </main>
  )
}
