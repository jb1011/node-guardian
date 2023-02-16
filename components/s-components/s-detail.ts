import styled from "styled-components";
import { defaultTheme, darkTheme } from "@/styles/theme";
import Image from "next/image";

export const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
  @media (max-width: 900px) {
    height: 80vh;
	}
`

export const CardContainer = styled.div`
	border: 1px solid ${darkTheme.colors.darkGrey};
	background-color: ${darkTheme.colors.lighterBlack};
	border-radius: ${defaultTheme.radius.xl};
  width: 80%;
  position: relative;
  max-width: 80vh;
  padding: 3px;
`

export const CardTextContainer = styled.div`
	display: flex;
  flex-direction: column;
	align-items: center;
  padding: 0 ${defaultTheme.spacing['2xs']} ${defaultTheme.spacing['2xs']} ${defaultTheme.spacing['2xs']};
  p {
    margin: 4px 0px;
  }
`

export const Title = styled.p`
	font-family: 'Cinzel';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
	color: #FFFFFF;
  margin: 0;
  @media (max-width: 900px) {
    font-size: 10px;
    line-height: 10px;
	}
`

export const FlexItemsFull = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
  align-items: center;
`

export const FlexTitle = styled.div`
	display: flex;
	width: 100%;
  align-items: center;
	justify-content: center;
  gap: 10px;
`

export const FlexItemsHalf = styled.div`
	display: flex;
	justify-content: space-between;
	width: 50%;
  align-items: center;
`

export const SmTitle = styled.p`
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
	color: ${(props) => props.color};
	width: 50%;
  @media (max-width: 900px) {
    font-size: 12px;
	  line-height: 14px;
	}
`

export const Text = styled.p`
	font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${darkTheme.colors.grey};
`

export const Swords = styled.div`
	display: flex;
	flex: auto;
`

export const Box = styled.div`
	display: flex;
  flex-direction: column;
	border: 1px solid ${darkTheme.colors.gold};
  padding: ${defaultTheme.spacing['3xs']};
  gap: 6px;
  background: linear-gradient(180deg, rgba(7, 15, 29, 0) 0%, rgba(54, 77, 137, 0.4) 100%);
  @media (max-width: 900px) {
    padding: ${defaultTheme.spacing['4xs']};
	}
`

export const Button = styled.div`
	display: flex;
  justify-content: center;
  align-items: center;
	border: 1px solid ${darkTheme.colors.gold};
  padding: ${defaultTheme.spacing['4xs']} ${defaultTheme.spacing.xs};
	color: #FFFFFF;
  font-size: 12px;
  border-radius: 2.5px;
  cursor: pointer;
  transform: 0.2s;
  &:hover {
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background: linear-gradient(180deg, rgba(7, 15, 29, 0) 0%, rgba(54, 77, 137, 0.4) 100%);
  }
`

export const SmallText = styled.div`
  font-family: 'Cinzel';
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 11px;
	color: #FFFFFF;
`
export const SImage = styled(Image)`
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
`

export const SImageBg = styled(Image)`
  max-height: 350px;
  border-top-left-radius: ${defaultTheme.radius.xl};
  border-top-right-radius: ${defaultTheme.radius.xl};
`

export const Separator = styled.div`
  padding-top: 80px;
  @media (max-width: 900px) {
    padding-top: 50px;
	}
`

export const SDecoration = styled(Image)`
  @media (max-width: 900px) {
    width: 15%;
    height: auto;
	}
`