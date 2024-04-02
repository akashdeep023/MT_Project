import React from "react";

const About = () => {
	return (
		<div className="h-[80vh] bg-white w-full flex flex-col justify-evenly">
			<h1 className="text-orange-400 text-4xl font-bold text-center p-4">
				About <span className="text-black">Us</span>
			</h1>
			<div className="w-full flex items-center justify-center">
				<div className="w-full p-4 items-center text-black">
					<div>
						<h2 className="font-semibold text-3xl my-4">
							Who are we?
						</h2>
						<p>
							Project MANAS is the official AI and Robotics team
							of MAHE, Manipal established in 2014. We are the
							Grand Prize winners and won the Lescoe Cup at the
							Intelligent Ground Vehicle Competition which is held
							at Michigan. Our aim is to build India’s first
							driverless car and are among the top 13 participants
							in the Mahindra’s Rise Prize challenge.
						</p>
					</div>
					<div>
						<h3 className="font-semibold text-2xl my-4">Vision</h3>
						<p>
							Project MANAS aims to inspire advanced research in
							Artificial Intelligence and oversee its
							implementation enabling automated systems to be made
							available to general populous.
						</p>
					</div>
					<div>
						<h3 className="font-semibold text-2xl my-4">Mission</h3>
						<p>
							Our mission is to uphold the tradition of pushing
							the limits of Artificial Intelligence and Bringing
							Bits to Life.
						</p>
					</div>
				</div>
				<div className="w-full max-w-[500px] p-4 items-center">
					<img src="https://projectmanas.in/static/media/image1.1e45117316d2a2060701.jpg"></img>
				</div>
			</div>
		</div>
	);
};

export default About;
