import "../index.css"

export default function About() {
	return (
		<div className="min-h-screen">
			<h1 className="font-extralight text-4xl flex justify-center mt-16">
				About Me
			</h1>
			<hr className="border-t border-gray-400 mx-36 my-4" />
			<p className="flex justify-center mx-36 mt-4 italic">
				A little bit about myself.
			</p>

			<div id="about">
				<div className="mx-auto max-w-4xl rounded bg-gray-100 my-10 hover:bg-gray-200 hover:shadow-lg transition duration-500 ease-in-out">
					<div className="px-6 py-4">
						<h1 className="font-bold text-3xl mt-4 ml-4">Collin Chuang</h1>
						<h2 className="font-light italic text-sm text-gray-500 mt-4 ml-4">
							Updated: December 21, 2023
						</h2>
						<hr className="border-t border-gray-400 mx-4 my-4" />
						<p className="text-gray-700 text-base ml-4 mt-4">
						Hello there! I’m Collin, a Computer Science and Engineering student at the University of California, Merced and based in the Los Angeles area in CA. I am currently in my third year and expected to graduate in spring of 2025. 
						</p>
						<p className="text-gray-700 text-base ml-4 mt-4">
						I am currently interested in web development, having completed <a href="https://www.codepath.org/" className="text-blue-500 hover:underline">CodePath's</a> intermediate web development course and being actively engaged in creating various projects. 
 
						</p>
						<p className="text-gray-700 text-base ml-4 mt-4 mb-4">
						I am actively exploring opportunities where I can contribute value and further advance my professional growth. If you have a position aligning with my skill set, I would welcome the opportunity to connect with you!
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
