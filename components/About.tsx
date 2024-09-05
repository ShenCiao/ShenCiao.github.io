import Image from 'next/image';

import ExtLink from './ExtLink';
import ProfileImage from './ProfileImage';
import personalInfo from './data/personalInfo.json'

const About = (): JSX.Element => {
	return (
		<section className="grid gap-12" id="about">
			<div className="flex justify-between">
				<div className="mr-8 hidden md:block rounded-md">
					<ProfileImage></ProfileImage>
				</div>
				<div className="flex flex-col max-w-xl w-full justify-evenly">
					<h1 className="text-4xl font-bold pb-8 md:pb-0">{personalInfo.name}</h1>
					<p>
						Shen Ciao is an individual researcher in Anime Computer Graphics (i.e., ACG researcher).
						He invents and develops tools for anime production (e.g. Paint Software, Brush Rendering Engine).
						He is advised by <ExtLink href="https://www.liyiwei.org/">Li-Yi Wei</ExtLink> when working at home.
					</p>
					<p className = "text-sm text-gray-600">
						Research Interest: {personalInfo.about.interest}
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
