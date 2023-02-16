import styled from "styled-components";
import { darkTheme, defaultTheme } from "@/styles/theme";

export const StyledContainer = styled.div`
	border: 1px solid ${darkTheme.colors.darkGrey};
	background-color: ${darkTheme.colors.lighterBlack};
	padding: ${defaultTheme.spacing['4xs']};
	border-radius: ${defaultTheme.radius.xl};
	cursor: pointer;
`

export const FlexItemsCol = styled.div`
	display: flex;
	flex-direction: column;
`

export const FlexItemsFull = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`

export const FlexItemsHalf = styled.div`
	display: flex;
	justify-content: space-between;
	width: 50%;
  align-items: center;
`

export const Title = styled.p`
	font-family: 'Cinzel';
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 19px;
	text-transform: capitalize;
	color: #FFFFFF;
`

export const SmTitle = styled.p`
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
	color: ${(props) => props.color};
	width: 50%;
`

export const Swords = styled.div`
	display: flex;
	flex: auto;
`
