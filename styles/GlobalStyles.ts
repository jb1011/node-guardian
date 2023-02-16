import { createGlobalStyle, DefaultTheme } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
	//========================================================================================================
	// GENERAL
	//========================================================================================================
	* {
		box-sizing: border-box;
		padding: 0;
	}
	*::before {
		box-sizing: border-box;
	}
	*::after {
		box-sizing: border-box;
	}

	body {
		background-color: ${({ theme }) => theme.colors.black};
		max-width: 1550px;
		margin: 0 auto;
	}
`;

export default GlobalStyle;
