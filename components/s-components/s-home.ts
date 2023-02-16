import styled from "styled-components";
import { defaultTheme } from "@/styles/theme";

export const StyledContainer = styled.div`
	height: 80vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: ${defaultTheme.spacing.m};
	@media (max-width: 900px) {
		height: 100%;
	}
`
export const Row = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: ${defaultTheme.spacing.m};
`

export const Container = styled.div`
  flex: 0 0 25%;
	@media (max-width: 900px) {
		flex: 0 0 80%;
	}
`