// Skill tag color mapping based on Halcyon theme
// Maps skill names to their color categories

const skillColorMap = {
	// Yellow (accent): Primary UI frameworks
	yellow: ["React", "Svelte",],

	// Purple: Type systems, engines, platforms
	purple: ["Unreal Engine 5", "Octokit", "Zustand", "Coherent Gameface"],

	// Green: State management, runtime, visual scripting
	green: ["Node", "Blueprints", "XState", "UMG", "Vite",],

	// Light Yellow: Meta-frameworks, build tools, design tools
	"light-yellow": [
        "Slate",
		"Next.js",
		"Tailwind",
		"Figma",
		"Framer Motion",
		"Vercel",
        "WCAG",
	],

	// Orange: Databases & testing
	orange: ["PostgreSQL", "MySQL", "MongoDB", "Playwright", "Blackboard"],

	// Cyan: Languages, web fundamentals (default)
	cyan: [
		"JavaScript",
        "TypeScript",
		"HTML & CSS",
		"CSS Modules",
		"Lit Element",
	],
};

// Create a reverse lookup map for O(1) access
const skillToColor = {};
Object.entries(skillColorMap).forEach(([color, skills]) => {
	skills.forEach((skill) => {
		skillToColor[skill.toLowerCase()] = color;
	});
});

/**
 * Get the CSS class for a skill tag based on its name
 * @param {string} skill - The skill name
 * @returns {string} - The CSS class for the skill tag
 */
export function getSkillTagClass(skill) {
	const normalizedSkill = skill.toLowerCase();
	const color = skillToColor[normalizedSkill] || "cyan"; // Default to cyan
	return `skill-tag skill-tag--${color}`;
}

/**
 * Get the inline styles for a skill tag (for use with Tailwind)
 * @param {string} skill - The skill name
 * @returns {object} - Color configuration object
 */
export function getSkillTagColors(skill) {
	const normalizedSkill = skill.toLowerCase();
	const color = skillToColor[normalizedSkill] || "cyan";

	const colorConfig = {
		yellow: {
			text: "var(--accent)",
			bg: "rgba(255, 204, 102, 0.12)",
			border: "rgba(255, 204, 102, 0.3)",
		},
		purple: {
			text: "var(--syntax-purple)",
			bg: "rgba(195, 166, 255, 0.1)",
			border: "rgba(195, 166, 255, 0.3)",
		},
		green: {
			text: "var(--syntax-green)",
			bg: "rgba(186, 230, 126, 0.1)",
			border: "rgba(186, 230, 126, 0.3)",
		},
		"light-yellow": {
			text: "var(--syntax-yellow)",
			bg: "rgba(255, 213, 128, 0.1)",
			border: "rgba(255, 213, 128, 0.3)",
		},
		orange: {
			text: "var(--syntax-orange)",
			bg: "rgba(255, 174, 87, 0.1)",
			border: "rgba(255, 174, 87, 0.3)",
		},
		cyan: {
			text: "var(--syntax-cyan)",
			bg: "rgba(92, 207, 230, 0.1)",
			border: "rgba(92, 207, 230, 0.3)",
		},
	};

	return colorConfig[color];
}
