import "../index.css"
import { Link } from "react-scroll"
import e from "../imgs/e.png"

export default function Home() {
	return (
		<div className="bg-gray-100 min-h-screen">
			<nav className="bg-white p-6 shadow-lg fixed top-0 w-full z-10">
				<ul className="flex justify-end space-x-8">
					<li>
						<Link to="home" smooth={true} duration={500} className="hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer">
							Home
						</Link>
					</li>
					<li>
						<Link to="about" smooth={true} duration={500} offset={-250} className="hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer">
							About
						</Link>
					</li>
					<li>
						<Link to="skills" smooth={true} duration={500} offset={-65} className="hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer">
							Skills
						</Link>
					</li>
					<li>
						<Link to="projects" smooth={true} duration={500} offset={-120} className="hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer">
							Projects
						</Link>
					</li>
				</ul>
			</nav>

			<div id="home">
				<div className="flex flex-col md:flex-row justify-center items-center">
					<img className="py-48 px-16" src={e} alt="photo"></img>
					<div>
						<h1 className="font-bold text-4xl md:text-6xl">CSE</h1>
						<h1 className="font-bold text-4xl md:text-6xl">Student</h1>
						<p className="py-4 text-2xl md:text-4xl">
						👋 Hello, my name is Collin. 
						</p>
						<div className="space-x-4 text-2xl md:text-4xl">
							<a
								href="https://github.com/Ctc8"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-github text-black transform hover:scale-110 transition duration-300 ease-in-out"></i>
							</a>
							<a
								href="https://www.linkedin.com/in/collin-chuang-828076227/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-linkedin text-blue-600 transform hover:scale-110 transition duration-300 ease-in-out"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
