import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import ExperienceTabs from "@/components/ExperienceTabs";
import Projects from "@/components/Projects";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col lg:flex-row lg:justify-between lg:gap-4 max-w-6xl mx-auto px-6 py-12 lg:py-24">
			<Sidebar />

			{/* Right Content - gap-24 = 6rem between sections */}
			<main className="lg:w-[52%] flex flex-col gap-16">
				<About />
				<ExperienceTabs />
				<Projects />

				{/* Footer */}
				<footer className="max-w-md pb-16 text-sm text-[var(--ui-muted)] font-mono">
					<p>
						Built with{" "}
						<a
							href="https://nextjs.org/"
							className="font-medium text-[var(--ui-active)] hover:text-[var(--accent)] transition-colors"
							target="_blank"
							rel="noopener noreferrer"
						>
							Next.js
						</a>{" "}
						and{" "}
						<a
							href="https://tailwindcss.com/"
							className="font-medium text-[var(--ui-active)] hover:text-[var(--accent)] transition-colors"
							target="_blank"
							rel="noopener noreferrer"
						>
							Tailwind CSS
						</a>
						, deployed with{" "}
						<a
							href="https://vercel.com/"
							className="font-medium text-[var(--ui-active)] hover:text-[var(--accent)] transition-colors"
							target="_blank"
							rel="noopener noreferrer"
						>
							Vercel
						</a>
						. Bootup Game Boy Advance Sound by <a
							href="https://tuna.voicemod.net/sound/8a8da4ff-c926-4d01-8b56-ef20647cb637"
							className="font-medium text-[var(--ui-active)] hover:text-[var(--accent)] transition-colors"
							target="_blank"
							rel="noopener noreferrer"
						>@LysiTek</a>
					</p>
				</footer>
			</main>
		</div>
	);
}