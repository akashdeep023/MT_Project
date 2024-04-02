import React from "react";
import Header from "./Header";
import Container from "./Container";
import About from "./About";
import Sponsor from "./Sponsor";

const Body = () => {
	return (
		<div className="w-full">
			<Header />
			<Container />
			<About />
			<Sponsor />
		</div>
	);
};

export default Body;
