import React from "react";
import MT_LOGO from "../Images/mt.png";
import HEAD_LOGO from "../Images/head-logo.png";

const Header = () => {
	return (
		<div className="flex justify-between items-center pr-4 fixed top-0 w-full">
			<div className="flex m-2">
				<img className="h-10 m-2" src={MT_LOGO}></img>
				<img className="h-10 m-2" src={HEAD_LOGO}></img>
			</div>
			<ul className="flex gap-10 text-[17px] mx-4 font-semibold">
				<li className="hover:text-orange-400 hover:-translate-y-1 cursor-pointer transition-all">
					About
				</li>
				<li className="hover:text-orange-400 hover:-translate-y-1 cursor-pointer transition-all">
					Team
				</li>
				<li className="hover:text-orange-400 hover:-translate-y-1 cursor-pointer transition-all">
					Sponsors
				</li>
				<li className="hover:text-orange-400 hover:-translate-y-1 cursor-pointer transition-all">
					Project
				</li>
				<li className="hover:text-orange-400 hover:-translate-y-1 cursor-pointer transition-all">
					Gallery
				</li>
				<li className="hover:text-orange-400 hover:-translate-y-1 cursor-pointer transition-all">
					FAQ
				</li>
				<li className="hover:text-orange-400 hover:-translate-y-1 cursor-pointer transition-all">
					Contact us
				</li>
			</ul>
		</div>
	);
};

export default Header;
