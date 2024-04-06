import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
	return (
		<div className="h-[100vh] bg-white w-full flex flex-col justify-evenly">
			<h1 className="text-orange-400 text-4xl font-bold text-center p-4">
				Project
			</h1>
			<div className="w-full flex items-center justify-evenly">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</div>
	);
};

export default Project;
