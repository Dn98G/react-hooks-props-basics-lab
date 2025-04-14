import React from 'react';
import Links from './Links';

function About({ bio, links }) {
	return (
		<div id="about">
			<h2>About Me</h2>

			{/* Conditional rendering */}
			{/* {bio ? <p>{bio}</p> : null} */}

			{bio && <p>{bio}</p>}

			<img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
			{/* add your <Links /> component here */}
			{/* <Links github={links.github} linkedin={links.linkedin} /> */}
			{/* Props drilling
      Passing down props more than 1 level deep
       */}
			<Links {...links} />
		</div>
	);
}

export default About;
