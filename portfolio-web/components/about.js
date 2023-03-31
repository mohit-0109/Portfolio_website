import Image from 'next/image'
export default function About()
{
    return(
        <div className=''>
            <div className="text-3xl text-green"> About me </div>
            <div className='flex p-2'>
                <div className='basis-2/3 text-slate'>
                    <div className="">Hi I am Mohit Nandargi</div>
                    <div>Im a full stack developer based in Hyderabad,India.
                        I have worked with various webframeworks and have created worthy projects with each of them.
                        I'm also a vivid problem solver.</div>
                        <div>
                        Some of the technologies that i have worked on are
                    </div>
                </div>
                
                <div className='basis-1/3'>
                    <Image 
                    src="/images/profile_image.jpg" // Route of the image file
                    height={144} // Desired size with correct aspect ratio
                    width={144} // Desired size with correct aspect ratio
                    alt="Your Name"
                    ></Image>
                </div>
                
            </div>
        </div>
    )
}