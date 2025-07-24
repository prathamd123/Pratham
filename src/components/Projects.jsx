
import React from "react";
import wapp from '../assets/wapp.png'
import algoViz from '../assets/algoViz.png'
import ET from '../assets/ET.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-[#272727] border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Weather -App' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={wapp} alt="" />
            </a>}
            {title=='Expense-Trackar' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={ET} alt="121" />
            </a>}
            {title=='Algo Viz Application' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={algoViz} alt="algoviz" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title: 'Algo Viz Application',
        description: 'Built a visual learning tool for Data Structures and Algorithms using the MERN stack. Implemented visualizations for B+ Tree, Binary Search Tree (BST), and B Tree to aid students in understanding complex concepts through interactive animations.',
        image: algoViz,
        git: 'https://github.com/prathamd123/AlgoViz',
        technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'D3.js']
    },
    {
        title:'Expense-Trackar',
        description:'Developed an expense tracker application to help users manage and track their daily expenses. Implemented features to add, edit, and delete expenses, providing a comprehensive tool for financial management. Enabled users to categorize expenses and view a detailed list of all transactions.',
        image: ET,
        git:"https://github.com/prathamd123/expense-tackar",
        technologies:[ 'DOM', 'AdvanceJS']
    }
]

export default Projects