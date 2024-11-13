import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const AuthScreen = () => {
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		navigate("/signup?email=" + email);
	};

	return (
		<div className='hero-bg relative'>
			{/* Navbar */}
			<header className='max-w-8xl mx-auto flex items-center justify-between p-6 pb-6'>
				<img src='/baskflix-logo.png' alt='Baskflix Logo' className='w-32 md:w-52 pb-8' />
				<Link to={"/login"} className='text-white py-1 px-2 rounded bg-blue-800 mb-10'>
					Sign In
				</Link>
			</header>

			{/* Hero section */}
			<div className='flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto'>
				<h1 className='text-4xl md:text-6xl font-bold mb-4 text-yellow-100'>Endless movies, TV shows, and beyond.</h1>
				<p className='text-lg mb-4 text-yellow-300'>Watch anywhere. Cancel anytime.</p>
				<p className='mb-4 text-yellow-100'>Ready to stream? Enter your email to get started or pick up where you left off.</p>

				<form className='flex flex-col md:flex-row gap-4 w-1/2' onSubmit={handleFormSubmit}>
					<input
						type='email'
						placeholder='Email address'
						className='p-2 rounded flex-1 bg-black/80 border border-gray-700'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<button className='bg-blue-800 text-white text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center'>
						Get Started
						<ChevronRight className='size-8 md:size-10' />
					</button>
				</form>
			</div>

			{/* Section Separator */}
			<div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

			{/* First Feature Section */}
			<div className='py-10 bg-black text-white'>
				<div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
					{/* Left Side */}
					<div className='flex-1 text-center md:text-left'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-yellow-100'>Big screen vibes!</h2>
						<p className='text-lg md:text-xl'>
							Enjoy streaming on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and beyond.
						</p>
					</div>
					{/* Right Side */}
					<div className='flex-1 relative'>
						<img src='/tv.png' alt='TV image' className='mt-4 z-20 relative' />
						<video
							className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10'
							playsInline
							autoPlay
							muted
							loop
						>
							<source src='/hero-vid.m4v' type='video/mp4' />
						</video>
					</div>
				</div>
			</div>

			{/* Section Separator */}
			<div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

			{/* Second Feature Section */}
			<div className='py-10 bg-black text-white'>
				<div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2'>
					{/* Left Side */}
					<div className='flex-1 relative'>
						<div className='relative'>
							<img src='/stranger-things-lg.png' alt='Stranger Things' className='mt-4' />
							<div className='flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md px-2'>
								<img src='/stranger-things-sm.png' alt='Small image' className='h-full' />
								<div className='flex justify-between items-center w-full'>
									<div className='flex flex-col gap-0'>
										<span className='text-md lg:text-lg font-bold'>Stranger Things</span>
										<span className='text-sm text-blue-500'>Downloading...</span>
									</div>
									<img src='/download-icon.gif' alt='Download icon' className='h-12' />
								</div>
							</div>
						</div>
					</div>
					{/* Right Side */}
					<div className='flex-1 md:text-left text-center'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-yellow-100'>Download, Dive In, and Watch Anytime</h2>
						<p className='text-lg md:text-xl'>
							Save favorites effortlessly. Always have something to watch!
						</p>
					</div>
				</div>
			</div>

			{/* Section Separator */}
			<div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

			{/* Third Feature Section */}
			<div className='py-10 bg-black text-white'>
				<div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
					{/* Left Side */}
					<div className='flex-1 text-center md:text-left'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-yellow-100'>Stream in Style, Anytime, Anywhere.</h2>
						<p className='text-lg md:text-xl'>
							Enjoy unlimited movies and TV shows on your phone, tablet, laptop, and TV.
						</p>
					</div>
					{/* Right Side */}
					<div className='flex-1 relative overflow-hidden'>
						<img src='/device-pile.png' alt='Device image' className='mt-4 z-20 relative' />
						<video
							className='absolute top-2 left-1/2 -translate-x-1/2 h-4/6 z-10 max-w-[63%]'
							playsInline
							autoPlay
							muted
							loop
						>
							<source src='/video-devices.m4v' type='video/mp4' />
						</video>
					</div>
				</div>
			</div>

			{/* Section Separator */}
			<div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

			{/* Fourth Feature Section */}
			<div className='py-10 bg-black text-white'>
				<div className='flex max-w-6xl mx-auto items-center justify-center flex-col-reverse md:flex-row px-4 md:px-2'>
					{/* Left Side */}
					<div className='flex-1 relative'>
						<img src='/kids.png' alt='Enjoy on your TV' className='mt-4' />
					</div>
					{/* Right Side */}
					<div className='flex-1 text-center md:text-left'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-yellow-100'>Crafting Personalized Adventures for Every Kid!</h2>
						<p className='text-lg md:text-xl'>
							Let kids dive into adventures with their favorite characters in a space crafted just for them—free with your membership.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthScreen;
