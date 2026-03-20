'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
	FiUser,
	FiBriefcase,
	FiMail,
	FiDownload,
	FiArrowRight,
} from 'react-icons/fi';

export default function Home() {
	return (
		<div className='relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 md:py-32 overflow-hidden'>
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute -top-20 left-1/4 w-96 h-96 md:w-[600px] md:h-[600px] bg-secondary/8 rounded-full blur-3xl opacity-70' />
				<div className='absolute -bottom-32 right-1/4 w-96 h-96 md:w-[700px] md:h-[700px] bg-primary/6 rounded-full blur-3xl opacity-60' />
			</div>

			<div className='relative z-10 max-w-5xl w-full space-y-20 md:space-y-28'>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: 'easeOut' }}
					className='text-center space-y-10 md:space-y-12'
				>
					<div className='space-y-5'>
						<h1 className='text-5xl font-bold tracking-tight text-white'>
							Julien Bigot
						</h1>
						<div className='h-[3px] w-32 md:w-40 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto' />
					</div>

					<p className='text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light'>
						Développeur Front-end{' '}
						<span className='text-white font-medium'>Next.js / React</span> • 3+ ans
						d’expérience
						<br className='hidden md:block' />
						Spécialisé <span className='text-secondary'>TypeScript</span>, Clean
						Architecture, Design Patterns & POO
					</p>

					<div className='flex flex-wrap justify-center gap-6 pt-6'>
						<a
							href='/cv_bigot_julien.pdf'
							download
							className='group inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-secondary/15 to-primary/10 border border-secondary/30 hover:border-secondary/60 text-white font-medium text-lg transition-all duration-300 hover:shadow-[0_0_35px_rgba(var(--secondary-rgb),0.28)] hover:scale-[1.04] active:scale-100'
						>
							<FiDownload
								size={22}
								className='group-hover:animate-bounce'
							/>
							Télécharger mon CV
						</a>

						<Link
							href='contact'
							className='inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/50 text-white font-medium text-lg transition-all duration-300 hover:bg-white/10 hover:shadow-md'
						>
							Me contacter
							<FiArrowRight className='group-hover:translate-x-1.5 transition-transform' />
						</Link>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
					viewport={{ once: true }}
					className='grid md:grid-cols-3 gap-6 md:gap-8'
				>
					<HomeCard
						icon={<FiUser size={40} />}
						title='Profil'
						description='Stack technique, philosophie de code, évolution full-stack, hors du code'
						href='profile'
						accent='secondary'
					/>

					<HomeCard
						icon={<FiBriefcase size={40} />}
						title='Expériences'
						description='Projets mis en prod, migrations TS, UI/UX robustes, perf & SEO'
						href='experiences'
						accent='primary'
					/>

					<HomeCard
						icon={<FiMail size={40} />}
						title='Contact'
						description='Freelance, CDI remote/hybride, collab, questions React/Next/Node'
						href='contact'
						accent='secondary'
						isHighlighted
					/>
				</motion.div>
			</div>
		</div>
	);
}

type HomeCardProps = {
	icon: React.ReactNode;
	title: string;
	description: string;
	href: string;
	accent: 'primary' | 'secondary';
	isHighlighted?: boolean;
};

function HomeCard({
	icon,
	title,
	description,
	href,
	accent,
	isHighlighted = false,
}: HomeCardProps) {
	const glow = accent === 'secondary' ? 'secondary' : 'primary';

	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: 40 },
				visible: { opacity: 1, y: 0 },
			}}
			whileHover={{ y: -10, transition: { duration: 0.35 } }}
			className={`
        group relative rounded-3xl p-8 md:p-10
        bg-white/4 backdrop-blur-xl border border-white/8
        hover:border-${accent}/50 transition-all duration-400
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_25px_rgba(var(--${glow}-rgb),0.18)]
        ${isHighlighted ? 'ring-1 ring-secondary/40 hover:ring-secondary/60' : ''}
      `}
		>
			<Link
				href={href}
				className='absolute inset-0 z-10'
				aria-label={`Vers la section ${title}`}
			/>

			<div
				className={`text-${accent} mb-7 transition-transform duration-400 group-hover:scale-110 group-hover:rotate-3`}
			>
				{icon}
			</div>

			<h3 className='text-2xl md:text-3xl font-semibold text-white mb-4 group-hover:text-${accent} transition-colors duration-300'>
				{title}
			</h3>

			<p className='text-gray-400 leading-relaxed text-base md:text-lg mb-8'>
				{description}
			</p>

			<div
				className={`inline-flex items-center gap-2 text-${accent} font-medium group-hover:gap-3 transition-all duration-300 text-base`}
			>
				Explorer
				<FiArrowRight className='group-hover:translate-x-2 transition-transform' />
			</div>
		</motion.div>
	);
}

