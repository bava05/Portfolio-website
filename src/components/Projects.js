import websiteImg1 from '../assets/food_website.png';
import websiteImg2 from '../assets/portfolio.png';
export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Meal Finder website build with HTML , CSS and JavaScript.',
                link: 'https://github.com/bava05/Yummy-Hunts-Food-Website'
            },
            {
                image: websiteImg2,
                description: 'It is my portfolio website bulit with React js.',
                link: 'https://github.com/bava05/Portfolio-Website'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-gray-400 mb-5 w-[140px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with HTML , CSS , JavaScript , React.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}