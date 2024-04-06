import React from "react";
import Header from "./Header";
import Container from "./Container";
import About from "./About";
import Sponsor from "./Sponsor";
import Project from "./Project";

const Body = () => {
	return (
		<div className="w-full">
			<Header />
			<Container />
			<About />
			<Sponsor />
			<Project />
		</div>
	);
};

export default Body;
