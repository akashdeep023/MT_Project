import React from "react";

const ProjectCard = () => {
	return (
		<div className="w-80 h-80 border shadow-lg rounded-lg overflow-hidden text-black">
			<div className="w-full h-3/4 bg-gray-400"></div>
			<div className="w-full h-1/4 p-3">
				<h3 className="font-semibold text-lg">Title</h3>
				<p>Description</p>
			</div>
		</div>
	);
};

export default ProjectCard;
