import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import ExperienceTabs from "@/components/ExperienceTabs";
import Projects from "@/components/Projects";

export default function Home() {
	return (
		<>
			<div className="min-h-screen flex flex-col lg:flex-row lg:justify-between lg:gap-4 max-w-6xl mx-auto px-6 py-12 lg:py-24">
				<Sidebar />

				{/* Right Content */}
				<main className="lg:w-[52%]">
					<About />
					<ExperienceTabs />
					<Projects />

					{/* Footer */}
					<footer className="max-w-md pb-16 text-sm text-[var(--muted)]">
						<p>
							Built with{" "}
							<a
								href="https://nextjs.org/"
								className="font-medium text-[var(--foreground)] hover:text-[var(--primary)]"
								target="_blank"
								rel="noopener noreferrer"
							>
								Next.js
							</a>{" "}
							and{" "}
							<a
								href="https://tailwindcss.com/"
								className="font-medium text-[var(--foreground)] hover:text-[var(--primary)]"
								target="_blank"
								rel="noopener noreferrer"
							>
								Tailwind CSS
							</a>
							, deployed with{" "}
							<a
								href="https://vercel.com/"
								className="font-medium text-[var(--foreground)] hover:text-[var(--primary)]"
								target="_blank"
								rel="noopener noreferrer"
							>
								Vercel
							</a>
							.
						</p>
					</footer>
				</main>
			</div>
		</>
	);
}