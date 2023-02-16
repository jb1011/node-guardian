import Head from 'next/head';
import Header from '@/components/header';
import Card from '@/components/card';
import Link from 'next/link';
import { GuardianProp } from "../types/data"
import { StyledContainer, Container, Row } from "../components/s-components/s-home";

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
							console.log(data[res?.id])
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
