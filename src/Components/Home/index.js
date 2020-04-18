import React from 'react';
import './styles.scss';

import Details from '../Details';

function Home() {
	return (
		<div className="container">
			<div className="night-sky"></div>
			<div className="stars"></div>
			<div className="stars2"></div>
			<div className="stars3"></div>
			<div className="mountains">
				<svg
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					xmlSpace="preserve"
					preserveAspectRatio="xMaxYMin meet"
					viewbox="0 0 110 160"
				>
					<defs>
						<polygon
							id="tall"
							points="0,100 100,0 200,100"
							strokeLinejoin="round"
							strokeLinecap="round"
							stroke="#311B46"
							strokeWidth="5"
							fill="#311B46"
						/>

						<polygon
							id="long"
							points="0,70 80,0 160,70"
							strokeLinejoin="round"
							strokeLinecap="round"
							stroke="#963D5A"
							strokeWidth="5"
							fill="#963D5A"
						/>

						<polygon
							id="short"
							points="0,100 80,0 160,100"
							strokeLinejoin="round"
							strokeLinecap="round"
							stroke="#FFA987"
							strokeWidth="5"
							fill="#FFA987"
						/>

						<g id="mountain-range">
							<use xlinkHref="#tall" x="-220" y="30" />
							<use xlinkHref="#tall" x="-180" y="40" />
							<use xlinkHref="#tall" x="-100" y="60" />
							<use xlinkHref="#tall" x="0" y="40" />
							<use xlinkHref="#tall" x="90" y="20" />
							<use xlinkHref="#tall" x="150" y="50" />
							<use xlinkHref="#long" x="-180" y="60" />
							<use xlinkHref="#long" x="-150" y="70" />
							<use xlinkHref="#long" x="-70" y="65" />
							<use xlinkHref="#long" x="20" y="70" />
							<use xlinkHref="#long" x="90" y="60" />
							<use xlinkHref="#long" x="180" y="50" />
							<use xlinkHref="#short" x="-160" y="90" />
							<use xlinkHref="#short" x="-110" y="70" />
							<use xlinkHref="#short" x="100" y="90" />
						</g>
					</defs>
				</svg>
			</div>
			<div>
				<h1 className="title">SENIOR UI DEVELOPER</h1>
				<Details />
			</div>

			<div>
				{/* <img className="userPhoto" src={img} alt="Norther Lights" />
				<img className="userPhoto" src={img} alt="Norther Lights" />
				<img className="userPhoto" src={img} alt="Norther Lights" /> */}
			</div>
		</div>
	);
}

export default Home;
