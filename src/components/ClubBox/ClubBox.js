import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"


export default function ClubBox({ clubName, clubImage, countryName, id }) {

    const router = useRouter()

    return (
        <li onClick={() => router.push(`/club/${id}`)} className="single-club shadow bg-white mb-4 cursor-pointer rounded-xl sm:hover:scale-105 transition">
            <article className="flex flex-col items-center justify-center p-4 h-40">
                <div className="w-12 h-12 flex justify-center items-center">
                    <Image src={clubImage} width="30" height="30" alt={clubName} style={{ width: "auto", height: "auto", maxHeight: "100%" }} />
                </div>
                <p className="text-lg font-semibold">{clubName}</p>
                <p className="text-base opacity-50">{countryName}</p>
            </article>
        </li>
    )
}