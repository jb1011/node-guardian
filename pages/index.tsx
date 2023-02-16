import Head from 'next/head';
import Header from '@/components/header';
import Card from '@/components/card';
import styled from "styled-components";
import { defaultTheme } from "@/styles/theme";
import Link from 'next/link';

type IData = {
	cover: string;
	difficulty: number;
	experience: number;
	gold: number;
	id: number;
	skill: string;
	skillTree: string;
	title: string;
	type: string;
}

export interface GuardianProp {
	data: IData;
}


const StyledContainer = styled.div`
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
const Row = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: ${defaultTheme.spacing.m};
`

const Container = styled.div`
  flex: 0 0 25%;
	@media (max-width: 900px) {
		flex: 0 0 80%;
	}
`

export const getStaticProps = async () => {
	const res = await fetch("http://localhost:3000/api/quests");
	const data = await res.json();

	return {
		props: { data: data }
	}
}

export default function Home({ data }: GuardianProp) {

	return (
		<>
			<Head>
				<title>Node Guardians</title>
				<meta name='description' content='Node Guardians frontend' />
			</Head>

			<main>
				<Header />
				<StyledContainer>
					<Row>
						{data.map((res: any) => {
							if (res?.id <= 6) {
								return (
									<Container key={res?.id}>
										<Link href={'/quests/' + res.id} style={{ textDecoration: 'none' }}>
											<Card data={data[res?.id]} />
										</Link>
									</Container>
								)
							}
						})}
					</Row>
				</StyledContainer>
			</main>
		</>
	);
}
