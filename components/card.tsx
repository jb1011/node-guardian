import styled from "styled-components";
import { darkTheme, defaultTheme } from "@/styles/theme";
import BackgroundImage from "../assets/images/bg-card.png";
import SwordGold from "../assets/images/sword-gold.png";
import SwordEmpty from "../assets/images/sword-empty.png";
import Image from "next/image";

const StyledContainer = styled.div`
	border: 1px solid ${darkTheme.colors.darkGrey};
	background-color: ${darkTheme.colors.lighterBlack};
	padding: ${defaultTheme.spacing['4xs']};
	border-radius: ${defaultTheme.radius.xl};
	flex: 1 0 33%;
	cursor: pointer;
	@media (max-width: 800px) {
		flex: 0 0 80%;
	}
`

const FlexItemsCol = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`

const FlexItemsFull = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`

const FlexItemsHalf = styled.div`
	display: flex;
	justify-content: space-between;
	width: 50%;
`

const Title = styled.div`
	font-family: 'Cinzel';
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 19px;
	text-transform: capitalize;
	color: #FFFFFF;
`

const SmTitle = styled.div`
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
	color: ${(props) => props.color};
	width: 50%;
`

const Swords = styled.div`
	display: flex;
	flex: auto;
`

export default function Card({ data }) {

	return (
		<StyledContainer>
			<Image alt='background image' src={BackgroundImage} layout="responsive" />
			<FlexItemsCol>
				<Title>DELEGATE CALL DETECTION</Title>
				<FlexItemsFull>
					<FlexItemsHalf>
						<SmTitle color={darkTheme.colors.gold}>Skill tree</SmTitle>
						<SmTitle color={darkTheme.colors.blue}>{data?.skillTree}</SmTitle>
					</FlexItemsHalf>
					<FlexItemsHalf>
						<SmTitle color={darkTheme.colors.gold}>Difficulty</SmTitle>
						<Swords>
							<Image alt='background image' src={data?.difficulty >= 1 ? SwordGold : SwordEmpty} />
							<Image alt='background image' src={data?.difficulty >= 2 ? SwordGold : SwordEmpty} />
							<Image alt='background image' src={data?.difficulty >= 3 ? SwordGold : SwordEmpty} />
							<Image alt='background image' src={data?.difficulty >= 4 ? SwordGold : SwordEmpty} />
							<Image alt='background image' src={data?.difficulty === 5 ? SwordGold : SwordEmpty} />
						</Swords>
					</FlexItemsHalf>
				</FlexItemsFull>
				<FlexItemsFull>
					<FlexItemsHalf>
						<SmTitle color={darkTheme.colors.gold}>Skill</SmTitle>
						<SmTitle color={darkTheme.colors.white}>{data?.skill}</SmTitle>
					</FlexItemsHalf>
					<FlexItemsHalf>
						<SmTitle color={darkTheme.colors.gold}>Experience</SmTitle>
						<SmTitle color={darkTheme.colors.white}>{data?.experience}</SmTitle>
					</FlexItemsHalf>
				</FlexItemsFull>
				<FlexItemsFull>
					<FlexItemsHalf>
						<SmTitle color={darkTheme.colors.gold}>Type</SmTitle>
						<SmTitle color={darkTheme.colors.white}>{data?.type}</SmTitle>
					</FlexItemsHalf>
					<FlexItemsHalf>
						<SmTitle color={darkTheme.colors.gold}>Gold</SmTitle>
						<SmTitle color={darkTheme.colors.white}>{data?.gold}</SmTitle>
					</FlexItemsHalf>
				</FlexItemsFull>
			</FlexItemsCol>
		</StyledContainer >
	);
}
