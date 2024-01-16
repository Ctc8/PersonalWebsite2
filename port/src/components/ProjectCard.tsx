import React from "react"

interface ProjectCardProps {
	title: string
	description: string
	gifUrl: string
	projectUrl: string
	imageUrls: string[]
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	description,
	gifUrl,
	projectUrl,
	imageUrls,
}) => {
	return (
		<div className="max-w-sm bg-gray-100 rounded overflow-hidden shadow-sm m-4 transform transition duration-500 ease-in-out hover:bg-gray-200 hover:scale-105">
			<div className="px-6 py-10 flex flex-col justify-between h-full space-y-6">
				<div className="font-bold text-xl mb-2 flex justify-center">{title}</div>
				<video className="w-full" autoPlay loop muted playsInline>
					<source src={gifUrl} type="video/mp4" />
				</video>
				<p className="text-gray-700 text-base">{description}</p>
				<div className="flex justify-between items-center">
					<div className="flex space-x-2">
						{imageUrls.map((url, index) => (
							<img key={index} src={url} alt="image" className="h-6 w-auto" />
						))}
					</div>
					<a
						href={projectUrl}
						className="bg-slate-700 text-white p-2 rounded self-end transform transition duration-300 ease-in-out hover:bg-slate-600"
						target="_blank"
						rel="noopener noreferrer"
					>
						View Project
					</a>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
