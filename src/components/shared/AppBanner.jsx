import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { FaWhatsapp } from "react-icons/fa";
import developer from '../../images/developer.svg';
import { motion } from 'framer-motion';

const AppBanner = () => {
	const [activeTheme] = useThemeSwitcher();

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
		>
			<div className="w-full md:w-1/3 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
				>
					Olá, eu sou Wesley Rodrigues
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
					Um Desenvolvedor Full-Stack e entusiasta do design
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex-container"
					
				>
					<a
						href="https://wa.me/5511975699770"
						className="w-48 px-4 font-general-medium flex px-2 justify-center items-center mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-500 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-600 text-white duration-300"
						aria-label="WhatsApp Link"
						target='_blank' 
						rel="noopener noreferrer"
					>
						<FaWhatsapp  className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FaWhatsapp >
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Entre em contato
						</span>
					</a>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
			>
				<img
					src={
						activeTheme === 'dark' ? developer : developer
					}
					alt="Developer"
					className='mx-auto'
				/>
			</motion.div>
		</motion.section>
	);
};

export default AppBanner;
