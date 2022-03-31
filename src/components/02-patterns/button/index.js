import React, { useState } from "react";
import styled, { css } from "styled-components";

const Button = (props) => {
	const [pressed, setPressed] = useState(false);
	const tag = props.href ? "a" : "button";

	const handleClick = () => {
		pressed ? setPressed(false) : setPressed(true);

		if (props.click) {
			props.click();
		}
	};

	return (
		<El
			as={tag}
			{...props}
			data-testid='123abc'
			className={`button ${props.classes}`}
			{...(tag === "a" ? { href: props.href } : {})}
			{...(tag === "button" ? { "aria-pressed": pressed } : {})}
			onClick={handleClick}
		>
			<span className='button-text'>{props.text}</span>
		</El>
	);
};

const El = styled.div`
	display: block;
	width: 100%;
	max-width: var(--sizing-octuple);
	font-size: var(--text-size-7);
	height: var(--sizing-full);
	font-family: var(--bold-font);
	text-transform: uppercase;
	padding: 0 var(--spacing-double);
	text-align: center;
	border-radius: var(--radius-full);
	text-decoration: none;
	cursor: pointer;
	background-color: var(--cta-primary);
	border: 2px solid var(--cta-primary);
	color: var(--text-color-light);
	transition: background-color 0.4s ease-in-out, border-color 0.4s ease-in-out,
		color 0.4s ease-in-out;

	&:hover,
	&:active,
	&[aria-pressed="true"] {
		background: var(--cta-primary--active);
		border-color: var(--cta-primary--active);
		color: var(--text-color-light);
	}

	${(props) =>
		props.variant === "secondary" &&
		css`
			background-color: var(--cta-secondary);
			border: 2px solid var(--cta-secondary);
			color: var(--text-color-dark);

			&:hover,
			&:active {
				background: var(--cta-secondary--active);
				border-color: var(--cta-secondary--active);
				color: var(--text-color-dark);
			}
		`}

	${(props) =>
		props.size === "small" &&
		css`
			padding: 0 var(--spacing-quarter);
			font-size: 1.28rem;
			line-height: 2rem;
			height: calc(var(--sizing-half));
			border-radius: var(--radius-threequarters);
		`}

    ${(props) =>
		props.size === "large" &&
		css`
			padding: 0 var(--spacing-triple);
			font-size: var(--text-size-6);
			line-height: calc(var(--sizing-full) + var(--sizing-quarter));
			height: calc(var(--sizing-full) + var(--sizing-quarter));
			border-radius: var(--radius-triple);
		`}
`;

export default Button;
