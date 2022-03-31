import React from "react";

//Tokens
import GlobalStyle from "./components/00-tokens/global-style";

// Pages
import HomePage from "./components/04-pages/home-page/";

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<HomePage />
		</div>
	);
}

export default App;
