import SearchForm from '../app/SearchForm'

const Hero = () => {

	return (
		<section>
			<div className="dark:bg-blue-700 h-80">
				<div className="container flex flex-col items-center justify-items-start h-20 px-4 pb-32 mx-auto text-center lg:pb-56 md:py-16 md:px-10 lg:px-32">
					<h1 className="text-5xl font-extrabold leading-none sm:text-5xl sm:mt-6 md:mt-1 xl:max-w-3xl text-white">Find the Perfect Rental</h1>
					<p className="mt-6 mb-8 text-lg sm:mb-8 xl:max-w-3xl text-white">Discover the perfect property that suits your needs.</p>
					<div className="flex flex-wrap justify-center">
						<SearchForm/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
