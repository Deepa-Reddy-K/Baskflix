const Footer = () => {
	return (
		<footer className='py-6 md:px-8 md:py-0 bg-black text-white border-t border-gray-800'>
			<div className='flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
				<p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
					Built by{" "}
					<a
						href='https://my-portfolio-lyart-delta-49.vercel.app/'
						target='_blank'
						className='font-medium underline underline-offset-4 text-yellow-300'
					>
						Deepa Reddy K
					</a>
					. The source code is available on{" "}
					<a
						href='https://github.com/Deepa-Reddy-K'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4 text-yellow-300'
					>
						GitHub
					</a>
					.
				</p>
			</div>
		</footer>
	);
};
export default Footer;
