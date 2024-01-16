import "../index.css"
import html from "../icons/html.png"
import css from "../icons/css.png"
import js from "../icons/js.png"
import react from "../icons/react.png"
import c from "../icons/c.png"
import cpp from "../icons/cpp.png"
import python from "../icons/python.png"
import ts from "../icons/ts.png"
import git from "../icons/git.png"
import tailwind from "../icons/tailwind.png"
import node from "../icons/node.png"
// import node2 from "../icons/node2.png"
import figma from "../icons/figma.png"

export default function Skills() {
	return (
		<div id="skills">
			<div className="bg-gray-100 min-h-screen pt-16">
				<h1 className="font-extralight text-4xl flex justify-center">Skills</h1>
				<hr className="border-t border-gray-400 mx-36 my-4" />
				<p className="flex justify-center mx-36 mt-4 italic">
					I have experience with these technologies.
				</p>

				<div className="flex justify-center space-x-12 mt-16">
					<div className="flex flex-col items-center">
						<img
							className="w-20 h-auto transition-transform duration-200 ease-in-out hover:scale-110"
							src={html}
						></img>
						<p className="py-8 font-light">HTML</p>
					</div>
					<div className="flex flex-col items-center">
						<img
							className="w-20 h-auto transition-transform duration-200 ease-in-out hover:scale-110"
							src={css}
						></img>
						<p className="py-8 font-light">CSS</p>
					</div>
					<div className="flex flex-col items-center">
						<img
							className="w-20 h-auto transition-transform duration-200 ease-in-out hover:scale-110"
							src={js}
						></img>
						<p className="py-8 font-light">JavaScript</p>
					</div>
					<div className="flex flex-col items-center">
						<img
							className="w-20 h-auto transition-transform duration-200 ease-in-out hover:scale-110"
							src={ts}
						></img>
						<p className="py-8 font-light">TypeScript</p>
					</div>
					<div className="flex flex-col items-center">
						<img
							className="w-20 h-auto transition-transform duration-200 ease-in-out hover:scale-110"
							src={react}
						></img>
						<p className="py-8 font-light">React.js</p>
					</div>
					<div className="flex flex-col items-center">
						<img
							className="w-20 h-auto transition-transform duration-200 ease-in-out hover:scale-110"
							src={tailwind}
						></img>
						<p className="py-8 font-light">Tailwind CSS</p>
					</div>
				</div>

				<div className="flex justify-center space-x-12 py-14">
					<div className="flex flex-col items-center">
						<img
							className="w-20 h-auto transition-transform duration-200 ease-in-out hover:scale-110"
							src={c}
						></img>
						<p className="py-8 font-light">C</p>
					</div>
					<div className="flex flex-col items-center">
						<img
							className="w-20 h-auto transition-transform duration-200 ease-in-out hover:scale-110"
							src={cpp}
						></img>
						<p className="py-8 font-light">C++</p>
					</div>
					<div className="flex flex-col items-center">
						<img
							className="w-20 h-auto transition-transform duration-200 ease-in-out hover:scale-110"
							src={python}
						></img>
						<p className="py-8 font-light">Python</p>
					</div>
					<div className="flex flex-col items-center">
						<img
							className="w-20 h-auto transition-transform duration-200 ease-in-out hover:scale-110"
							src={node}
						></img>
						<p className="py-16 font-light">Node.js</p>
					</div>
					<div className="flex flex-col items-center">
						<img
							className="w-20 h-auto transition-transform duration-200 ease-in-out hover:scale-110"
							src={git}
						></img>
						<p className="py-8 font-light">Git</p>
					</div>
					<div className="flex flex-col items-center">
						<img
							className="w-20 h-auto transition-transform duration-200 ease-in-out hover:scale-110"
							src={figma}
						></img>
						<p className="py-8 font-light">Figma</p>
					</div>
				</div>
			</div>
		</div>
	)
}
