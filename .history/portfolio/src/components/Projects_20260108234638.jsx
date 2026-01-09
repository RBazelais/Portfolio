import Image from "next/image";

export default function Projects() {
	return (
		<section id="projects" className="mb-24 scroll-mt-0" aria-label="Selected projects">
			<h3 className="text-lg font-semibold text-[var(--foreground)] mb-8 lg:hidden">
				Projects
			</h3>
			<ul className="group/list">
				{/* Project 1 */}
				<li className="mb-12">
					<div className="group relative grid grid-cols-1 gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
						<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[var(--card)] lg:group-hover:shadow-lg lg:group-hover:shadow-[var(--primary)]/10"></div>
						<Image
							src="/images/projects/adaptive-inventory.png"
							alt="Adaptive Inventory Mockup"
							className="aspect-video object-cover rounded border-2 border-[var(--card)] transition group-hover:border-[var(--muted)]/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
							width={200}
							height={48}
							unoptimized
						/>
						<div className="z-10 sm:order-2 sm:col-span-6">
							<h4 className="text-[var(--foreground)] font-medium leading-snug">
								<a
									href="https://github.com/RBazelais/AdaptiveInventory"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-[var(--primary)] inline-flex items-baseline"
								>
									<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
									<span>
										Adaptive Inventory
										<span className="inline-block ml-1.5 text-[var(--primary)] transition-transform group-hover:rotate-12 group-hover:scale-130">✦</span>
									</span>
								</a>
							</h4>
							<p className="text-[var(--muted)] mt-2 text-sm leading-normal">
								Native Unreal Engine 5 inventory system built with C++/UMG. Implements MVVM architecture, event-driven updates, and smart item stacking with widget pooling. 
							</p>
							<ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
								<li className="mr-1.5 mt-2">
									<div className="flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium leading-5 text-[var(--primary)]">
										Unreal Engine 5
									</div>
								</li>
								<li className="mr-1.5 mt-2">
									<div className="flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium leading-5 text-[var(--primary)]">
										C++
									</div>
								</li>
								<li className="mr-1.5 mt-2">
									<div className="flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium leading-5 text-[var(--primary)]">
										Blueprints
									</div>
								</li>
								<li className="mr-1.5 mt-2">
									<div className="flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium leading-5 text-[var(--primary)]">
										UMG
									</div>
								</li>
							</ul>
						</div>
					</div>
				</li>

				{/* Project 2 */}
				<li className="mb-12">
					<div className="group relative grid grid-cols-1 gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
						<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[var(--card)] lg:group-hover:shadow-lg lg:group-hover:shadow-[var(--primary)]/10"></div>
						<Image
							src="/images/projects/logic-puzzle.png"
							alt="Logic Puzzle App screenshot"
							className="aspect-video object-cover rounded border-2 border-[var(--card)] transition group-hover:border-[var(--muted)]/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
							width={200}
							height={48}
						/>
						<div className="z-10 sm:order-2 sm:col-span-6">
							<h4 className="text-[var(--foreground)] font-medium leading-snug">
								<a
									href="https://github.com/Web103QPRBKA/CPWeb103FinalProject2025"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-[var(--primary)] inline-flex items-baseline"
								>
									<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
									<span>
										Logic Puzzle App
										<span className="inline-block ml-1.5 text-[var(--primary)] transition-transform group-hover:rotate-12 group-hover:scale-130">✦</span>
									</span>
								</a>
							</h4>
							<p className="text-[var(--muted)] mt-2 text-sm leading-normal">
								Collaborative full-stack project where I led frontend development. Built the interactive puzzle game component, validation system, state machine, and responsive UI using React and TypeScript, while teammates handled backend APIs and leaderboard.
							</p>
							<ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
								<li className="mr-1.5 mt-2">
									<div className="flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium leading-5 text-[var(--primary)]">
										React
									</div>
								</li>
								<li className="mr-1.5 mt-2">
									<div className="flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium leading-5 text-[var(--primary)]">
										HTML & CSS
									</div>
								</li>
								<li className="mr-1.5 mt-2">
									<div className="flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium leading-5 text-[var(--primary)]">
										JavaScript
									</div>
								</li>
								<li className="mr-1.5 mt-2">
									<div className="flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium leading-5 text-[var(--primary)]">
										Node.js
									</div>
								</li>
								<li className="mr-1.5 mt-2">
									<div className="flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium leading-5 text-[var(--primary)]">
										PostgreSQL
									</div>
								</li>
							</ul>
						</div>
					</div>
				</li>

				{/* Project 3 */}
				<li className="mb-12">
					<div className="group relative grid grid-cols-1 gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
						<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[var(--card)] lg:group-hover:shadow-lg lg:group-hover:shadow-[var(--primary)]/10"></div>
						<Image
							src="/images/projects/hype-check.gif"
							alt="The Hype Check screenshot"
							className="aspect-video object-cover rounded border-2 border-[var(--card)] transition group-hover:border-[var(--muted)]/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
							width={200}
							height={48}
							unoptimized
						/>
						<div className="z-10 sm:order-2 sm:col-span-6">
							<h4 className="text-[var(--foreground)] font-medium leading-snug">
								<a
									href="https://github.com/RBazelais/The-Hype-Check"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-[var(--primary)] inline-flex items-baseline"
								>
									<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
									<span>
										The Hype Check
										<span className="inline-block ml-1.5 text-[var(--primary)] transition-transform group-hover:rotate-12 group-hover:scale-130">✦</span>
									</span>
								</a>
							</h4>
							<p className="text-[var(--muted)] mt-2 text-sm leading-normal">
								Full-stack movie trailer discussion platform built with React & Supabase. Features real-time posts, comments, upvotes, and secure user authentication. 
							</p>
							<ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
								<li className="mr-1.5 mt-2">
									<div className="flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium leading-5 text-[var(--primary)]">
										React
									</div>
								</li>
								<li className="mr-1.5 mt-2">
									<div className="flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium leading-5 text-[var(--primary)]">
										JavaScript
									</div>
								</li>
								<li className="mr-1.5 mt-2">
									<div className="flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium leading-5 text-[var(--primary)]">
										Tailwind CSS
									</div>
								</li>
								<li className="mr-1.5 mt-2">
									<div className="flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium leading-5 text-[var(--primary)]">
										PostgreSQL
									</div>
								</li>
							</ul>
						</div>
					</div>
				</li>

				{/* Project 4 */}
				<li className="mb-12">
					<div className="group relative grid grid-cols-1 gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
						<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[var(--card)] lg:group-hover:shadow-lg lg:group-hover:shadow-[var(--primary)]/10"></div>
						<Image
							src="/images/projects/lucky-slots.gif"
							alt="Lucky Slots screenshot"
							className="aspect-video object-cover rounded border-2 border-[var(--card)] transition group-hover:border-[var(--muted)]/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
							width={200}
							height={48}
							unoptimized
						/>
						<div className="z-10 sm:order-2 sm:col-span-6">
							<h4 className="text-[var(--foreground)] font-medium leading-snug">
								<a
									href="https://github.com/RBazelais/LuckySlotMachine"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-[var(--primary)] inline-flex items-baseline"
								>
									<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
									<span>
										Lucky Slots
										<span className="inline-block ml-1.5 text-[var(--primary)] transition-transform group-hover:rotate-12 group-hover:scale-130">✦</span>
									</span>
								</a>
							</h4>
							<p className="text-[var(--muted)] mt-2 text-sm leading-normal">
								Built a fully interactive slot machine game using React with TypeScript, Zustand featuring real-time animations, auto-play functionality, and comprehensive game statistics tracking.
							</p>
							<ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
								<li className="mr-1.5 mt-2">
									<div className="flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium leading-5 text-[var(--primary)]">
										React
									</div>
								</li>
								<li className="mr-1.5 mt-2">
									<div className="flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium leading-5 text-[var(--primary)]">
										TypeScript
									</div>
								</li>
								<li className="mr-1.5 mt-2">
									<div className="flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium leading-5 text-[var(--primary)]">
										Tailwind CSS
									</div>
								</li>
								<li className="mr-1.5 mt-2">
									<div className="flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium leading-5 text-[var(--primary)]">
										Zustand
									</div>
								</li>
							</ul>
						</div>
					</div>
				</li>
			</ul>
		</section>
	);
}
