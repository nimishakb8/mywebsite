import React from 'react';
import img from '../../assets/images/Nimisha.jpeg';

import github from '../../assets/images/github.png';

import { ReactComponent as BriefcaseIcon } from '../../assets/images/briefcase-outline.svg';
import { ReactComponent as LocationIcon } from '../../assets/images/location-outline.svg';
import { ReactComponent as GithubIcon } from '../../assets/images/logo-github.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/images/logo-linkedin.svg';
import { ReactComponent as MailIcon } from '../../assets/images/mail-outline.svg';
import './index.scss';

function Details() {
	const goToLinkedin = () => {
		window.open('https://www.linkedin.com/in/nimishakb/');
	};
	const goToGitHub = () => {
		window.open('https://github.com/nimishakb8');
	};
	const goToMail = () => {
		window.open(
			'https://mail.google.com/mail/?view=cm&fs=1&to=nimishakb8@gmail.com'
		);
	};
	return (
		<div className="details-container">
			<div className="details-wrapper">
				<h2 className="userName">Nimisha K B</h2>
				<div className="work-text">
					<BriefcaseIcon className="briefcase-icon" />
					<span className="work-text">Sr. Software Engineer at EY</span>
				</div>
				<div className="work-text">
					<BriefcaseIcon className="briefcase-icon" />
					<span className="work-text">Software Engineer at Tech Mahindra</span>
				</div>

				<div className="polaroid-container">
					<img className="avatar-img" src={img} alt="Nimisha K B" />
					<section className="text-area">
						{/* <img className="locationIcon" src={loc} alt="Norther Lights" /> */}
						<LocationIcon className="locationIcon" />
						<span className="loc">Bangalore,India</span>
					</section>
				</div>
				<div>
					<div className="contact-icons-container">
						{/* <img src={linkdnIcon} alt="mail box icon" className="linkedin-icon" /> */}
						<LinkedinIcon className="mail-icon" onClick={goToLinkedin} />
						<MailIcon className="mail-icon" onClick={goToMail} />
						<img
							src={github}
							alt="mail box icon"
							className="github-icon"
							onClick={goToGitHub}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Details;
