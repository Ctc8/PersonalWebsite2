import "../index.css"
import html from "../icons/html.png"
import css from "../icons/css.png"
import js from "../icons/js.png"
import react from "../icons/react.png"
// import bootstrap from "../icons/bootstrap.png"
import ts from "../icons/ts.png"
// import tailwind from "../icons/tailwind.png"
// import node from "../icons/node.png"
import node2 from "../icons/node2.png"
import supabase from "../icons/supabase.png"
import ProjectCard from "../components/ProjectCard"

export default function Projects() {
	return (
		<div id="projects">
			<div className="bg-white min-h-screen">
				<h1 className="flex justify-center font-extralight text-4xl mt-16">
					Projects
				</h1>
				<hr className="border-t border-gray-400 mx-36 my-4" />
				<p className="flex justify-center mx-36 mt-4 italic">
					Here are some projects that I have worked on.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ml-28 mt-10">
					<ProjectCard
						title="Reddit Clone"
						description="In this project, I built a forum posting web app that mimics the popular website, Reddit. Posts can be created, updated, and deleted and all data, including number of likes, time of post, etc. is sent to a database. (using Supabase)"
						gifUrl="https://i.imgur.com/UbIqkS6.mp4"
						projectUrl="https://sedditapp.netlify.app/"
						imageUrls={[react, supabase, ts, html, css]}
					/>
					<ProjectCard
						title="Beer Master"
						description="This is the first project where I utilized API data fetching using the JavaScript library Axios. This project lists the different breweries and more details about them in the Open Brewery DB."
						gifUrl="https://i.imgur.com/OmttSc0.mp4"
						projectUrl="https://brewerymaster.netlify.app/"
						imageUrls={[react, node2, js, html, css]}
					/>
					<ProjectCard
						title="Flash Card App"
						description="This is a flash card app where users can test their knowledge on what team NBA players plays for. "
						gifUrl="https://i.imgur.com/kD9t29n.mp4"
						projectUrl="https://nbaflashcards.netlify.app/"
						imageUrls={[react, js, html, css]}
					/>
				</div>
				<div className="flex justify-center mt-8 mb-8">
					<a
						href="https://github.com/Ctc8"
						className="bg-slate-700 text-white p-3 rounded justify-center transform transition duration-300 ease-in-out hover:bg-slate-600"
						target="_blank"
						rel="noopener noreferrer"
					>
						View All Projects on GitHub
					</a>
				</div>
			</div>

			<div className="footer text-center py-3 bg-gray-200 mt-8">
				<p>&copy; {new Date().getFullYear()} Collin Chuang</p>
			</div>
		</div>
	)
}
