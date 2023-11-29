import Image from "next/image"
import profile from '../../public/profile.jpg'

export default function MyComponent() {

    return (
        <>
            <Image
                src={profile}
                height={144}
                width={144}
                alt="Me"
            />
        </>
    )
}