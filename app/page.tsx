import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route';
import fragrance from "@/public/fragnance.jpg";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Hey {session && <span>{session.user?.name}</span>}</h1>
      {/* <h1 className="font-poppins">Hey {session && <span>{session.user?.name}</span>}</h1> */}
      <Link href="/users">Go to users page</Link>
      <ProductCard />
      <div>
        {/* from local/public folder */}
        {/* <Image src={fragrance} alt='fragrance' /> */}
        {/* to use external image */}
        <Image
          src="https://bit.ly/react-cover"
          alt="fragrance"
          width={300}
          height={150}
          // fill // to make it responsive
          // style={{
          //   objectFit: "cover",
          //   // objectFit: "contain"
          // }}
          className="object-cover" // tailwind class 
          sizes='100vw'
          // sizes="(max-width: 420px) 100vw, (max-width: 768px) 50vw, 33vw"
          quality={100}
          priority
        />
      </div>
    </main>
  )
}
