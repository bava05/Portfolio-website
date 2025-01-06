import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'Hi, My name is Bavadhaarini. I am a Web Developer. I built this portfolio Website with React.js , Tailwind CSS+bootstrap',
        line2: 'I am good in Frontend skills like HTML , CSS , JavaScript and React.js.',
        line3: 'I have build some projects using these Frontend skills.'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2 flex justify-center'>
            <img src={AboutImg} className='w-3/4 md:w-2/3 lg:w-1/2' alt="About Me" />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-gray-400 mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}