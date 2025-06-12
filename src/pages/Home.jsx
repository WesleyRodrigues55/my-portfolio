import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import Button from '../components/reusable/Button';

import AboutMeBio from '../components/about/AboutMeBio';
import AboutCounter from '../components/about/AboutCounter';
import AboutClients from '../components/about/AboutClients';
import { AboutMeProvider } from '../context/AboutMeContext';
import { motion } from 'framer-motion';

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>

		<div id='projects'>
			<ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider>

			<div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/projects"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="Mais Projetos"
				>
					<Button title="Mais Projetos" />
				</Link>
			</div>
		</div>
			

		<section className="py-5 sm:py-10 mt-5 sm:mt-10" id="about">
			<AboutMeProvider>
				<div className="text-center">
					<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
						Portfólio de projetos
					</p>
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, delay: 1 }}
					exit={{ opacity: 0 }}
					className="container mx-auto"
				>
					<AboutMeBio />
				</motion.div>

				{/** Counter without paddings */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, delay: 1 }}
					exit={{ opacity: 0 }}
				>
					<AboutCounter />
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, delay: 1 }}
					exit={{ opacity: 0 }}
					className="container mx-auto"
				>
					<AboutClients />
				</motion.div>
			</AboutMeProvider>
		</section>

		</div>
	);
};

export default Home;
