import React from "react";
import styled, { css } from "styled-components";
import { breakpoints } from "../../00-tokens/dimension";

const Layout = (props) => {
	const tag = props.list ? "ul" : "div";
	return (
		<El
			as={tag}
			{...props}
			data-testid='123abc'
			className={`layout ${props.classes}`}
		>
			{props.children}
		</El>
	);
};

const El = styled.div`
	max-width: var(--maximum-page-width);
	margin: 0 auto;
	list-style: none;

	${(props) =>
		props.grid &&
		css`
			display: grid;
			gap: 0 var(--spacing-threequarters);
			grid-template-columns: 1fr;
		`}

	.column {
		padding-bottom: var(--spacing-full);
	}

	@media (min-width: ${breakpoints.breakpoint3}px) {
		${(props) =>
			props.grid === "25_25_25_25" &&
			css`
				grid-template-columns: 3fr 3fr 3fr 3fr;
			`};
	}

	@media only screen and (min-width: ${breakpoints.breakpoint2 +
		1}px) and (max-width: ${breakpoints.breakpoint3 - 1}px) {
		//If you have provided the 'breakdown' attribute to Layout, it will move to a 2x2 layout where appropriate.
		grid-auto-rows: 1fr;

		${(props) =>
			props.breakdown &&
			css`
				${(props) =>
					props.grid === "25_25_25_25" &&
					css`
						grid-template-columns: 1fr 1fr;
					`}
			`};
	}
`;

export default Layout;
