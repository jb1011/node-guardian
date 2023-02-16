import styled from "styled-components";
import Head from 'next/head';
import { defaultTheme, darkTheme } from "@/styles/theme";
import Image from "next/image";
import BackgroundImage from "../../assets/images/quest.png";
import SwordGold from "../../assets/images/sword-gold.png";
import SwordEmpty from "../../assets/images/sword-empty.png";
import Header from "@/components/header";
import Exp from "../../assets/images/EXP.png";
import { useRouter } from 'next/router';

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/quests");
  const data = await res.json();

  const paths = data.map(res => {
    return {
      params: { id: res.id.toString() }
    }
  })
  return {
    paths: paths,
    fallback: false
  }
}


export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://dummyjson.com/products/' + id);
  const data = await res.json();

  return {
    props: { data: data }
  }
}

const StyledContainer = styled.div`
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: ${defaultTheme.spacing.m};
`

const CardContainer = styled.div`
	border: 1px solid ${darkTheme.colors.darkGrey};
	background-color: ${darkTheme.colors.lighterBlack};
	padding: ${defaultTheme.spacing['4xs']};
	border-radius: ${defaultTheme.radius.xl};
  width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
  gap: 10px;
`

const Title = styled.div`
	font-family: 'Cinzel';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
	color: #FFFFFF;
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

const SmTitle = styled.div`
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
	color: ${(props) => props.color};
	width: 50%;
`

const Text = styled.div`
	font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${darkTheme.colors.grey};
`

const Swords = styled.div`
	display: flex;
	flex: auto;
`

const Box = styled.div`
	display: flex;
  flex-direction: column;
	border: 1px solid ${darkTheme.colors.gold};
  padding: ${defaultTheme.spacing['3xs']};
  gap: 6px;
  background: linear-gradient(180deg, rgba(7, 15, 29, 0) 0%, rgba(54, 77, 137, 0.4) 100%);
`

const Button = styled.div`
	display: flex;
  justify-content: center;
  align-items: center;
	border: 1px solid ${darkTheme.colors.gold};
  padding: ${defaultTheme.spacing['4xs']} ${defaultTheme.spacing.xs};
	color: #FFFFFF;
  font-size: 12px;
  border-radius: 2.5px;
  cursor: pointer;
`

const SmallText = styled.div`
  font-family: 'Cinzel';
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 11px;
	color: #FFFFFF;
`
export default function Guardian({ data }) {
  const router = useRouter();

  console.log(data)
  return (
    <>
      <Head>
        <title>Node Guardians {data.id}</title>
        <meta name='description' content='Node Guardians frontend' />
      </Head>
      <main>
        <Header />
        <StyledContainer>
          <CardContainer>
            <Image alt='background image' src={BackgroundImage} layout="responsive" />
            <Title>DELEGATE CALL DETECTION</Title>
            <FlexItemsFull>
              <FlexItemsHalf>
                <SmTitle color={darkTheme.colors.gold}>Skill tree</SmTitle>
                <SmTitle color={darkTheme.colors.blue}>{data?.title}</SmTitle>
              </FlexItemsHalf>
              <FlexItemsHalf>
                <SmTitle color={darkTheme.colors.gold}>Difficulty</SmTitle>
                <Swords>
                  <Image alt='background image' src={data?.rating >= 1 ? SwordGold : SwordEmpty} />
                  <Image alt='background image' src={data?.rating >= 2 ? SwordGold : SwordEmpty} />
                  <Image alt='background image' src={data?.rating >= 3 ? SwordGold : SwordEmpty} />
                  <Image alt='background image' src={data?.rating >= 4 ? SwordGold : SwordEmpty} />
                  <Image alt='background image' src={data?.rating === 5 ? SwordGold : SwordEmpty} />
                </Swords>
              </FlexItemsHalf>
            </FlexItemsFull>
            <FlexItemsFull>
              <FlexItemsHalf>
                <SmTitle color={darkTheme.colors.gold}>Skill</SmTitle>
                <SmTitle color={darkTheme.colors.white}>{data?.category}</SmTitle>
              </FlexItemsHalf>
              <FlexItemsHalf>
                <SmTitle color={darkTheme.colors.gold}>Quest type</SmTitle>
                <SmTitle color={darkTheme.colors.white}>{data?.category}</SmTitle>
              </FlexItemsHalf>
            </FlexItemsFull>
            <FlexItemsFull>
              <Text>{data?.description}</Text>
            </FlexItemsFull>
            <FlexItemsFull>
              <Title>QUEST REWARDS</Title>
            </FlexItemsFull>
            <FlexItemsFull>
              <Box>
                <Image alt="Exp" src={Exp} />
                <SmallText>+ 2000</SmallText>
              </Box>
              <Button onClick={() => router.push('/')}>GO BACK</Button>
            </FlexItemsFull>
          </CardContainer>
        </StyledContainer>
      </main>
    </>
  );
}
