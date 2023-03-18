import Image from 'next/image'
export default function Start(){
    return(
        <div>
            <div >Hi, my name is</div>
            <div>Mohit Nandargi</div>
            <div>I build things for the web</div>
            <div>
                I'm a Software Engineer specializing in building websites.And also in building javascript applications.
            </div>
            <div>
            <Image 
        src="/images/profile_image.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      ></Image>
            </div>
        </div>
    )
}