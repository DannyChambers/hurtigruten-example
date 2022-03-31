import { css } from "styled-components";

const Color = {
	brandcolor1: "hsl(223, 71%, 19%)", //#0E2254 Text and CTA1 blue
	brandcolor2: "hsl(235, 44%, 95%)", // #EDEEF8 Background blue
	brandcolor3: "hsl(223, 57%, 85%)", // #C5D1EF Border blue
	brandcolor4: "rgba(0, 0, 0, 0.15)", // Shadow
	brandcolor5: "hsl(0, 0%, 100%)", // #ffffff
	brandcolor6: "hsl(223, 71%, 29%)",
	brandcolor7: "hsl(223, 26%, 61%)",
};

export const CSSColor = css`
	:root {
		//Raw palette --
		--brand-color-1: ${Color.brandcolor1};
		--brand-color-2: ${Color.brandcolor2};
		--brand-color-3: ${Color.brandcolor3};
		--brand-color-4: ${Color.brandcolor4};
		--brand-color-5: ${Color.brandcolor5};
		--brand-color-6: ${Color.brandcolor6};
		--brand-color-7: ${Color.brandcolor7};
		//Functional palette --
		--text-color-dark: var(--brand-color-1);
		--text-color-medium: var(--brand-color-7);
		--text-color-light: var(--brand-color-5);
		--background-color-1: var(--brand-color-2);
		--border-color-1: var(--brand-color-3);
		--shadow-color-1: var(--brand-color-4);
		--cta-primary: var(--brand-color-1);
		--cta-primary--active: var(--brand-color-6);
		color: var(--text-color-dark);
	}
`;

export default Color;
