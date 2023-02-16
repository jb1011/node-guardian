import { darkTheme, defaultTheme } from "@/styles/theme";
import BackgroundImage from "../assets/images/bg-card.png";
import SwordGold from "../assets/images/sword-gold.png";
import SwordEmpty from "../assets/images/sword-empty.png";
import Image from "next/image";
import {
	StyledContainer,
	FlexItemsCol,
	FlexItemsFull,
	Title,
	FlexItemsHalf,
	SmTitle,
	Swords
} from "./s-components/s-card"
import { GuardianSingleProp } from "../types/data"

export default function Card({ data }: GuardianSingleProp) {
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
