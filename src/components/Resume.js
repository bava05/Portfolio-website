import ResumeImg from '../assets/resume.jpg';
import ResumePDF from '../assets/resume.pdf';
export default function Resume () {
    const config = {
        link: ResumePDF
    };

    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5 md:gap-x-10'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-gray-400 mb-5 w-[135px] font-bold'>Resume</h1>
                <p className='pb-5'>You can view my resume to explore my educational background, 
                and skills that showcase my qualifications for various opportunities{' '} </p>
                <a 
                className='btn bg-primary text-white px-4 py-2 rounded mb-8 mt-4 self-start' 
                href={config.link} 
                download> Download
                </a>
            </div>
        </div>
    </section>
}