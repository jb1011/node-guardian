import Head from 'next/head';
import { defaultTheme, darkTheme } from "@/styles/theme";
import Image from "next/image";
import BackgroundImage from "../../assets/images/quest.png";
import Cross from "../../assets/images/cross.png";
import SwordGold from "../../assets/images/sword-gold.png";
import SwordEmpty from "../../assets/images/sword-empty.png";
import Header from "@/components/header";
import Exp from "../../assets/images/EXP.png";
import { useRouter } from 'next/router';
import LineLeft from "../../assets/images/line-left.png";
import LineRight from "../../assets/images/line-right.png";
import {
  StyledContainer,
  CardContainer,
  FlexItemsFull,
  Title,
  FlexItemsHalf,
  SmTitle,
  Swords,
  SImage,
  SImageBg,
  CardTextContainer,
  FlexTitle,
  SDecoration,
  Box,
  SmallText,
  Button,
  Separator,
  Text
} from "../../components/s-components/s-detail";
import { DetailProp } from '@/types/data';

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/quests");
  const data = await res.json();

  const paths = data.map((res: any) => {
    return {
      params: { id: res.id.toString() }
    }
  })
  return {
    paths: paths,
    fallback: false
  }
}


export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch('http://localhost:3000/api/quests/' + id);
  const data = await res.json();

  return {
    props: { data: data }
  }
}



export default function Guardian({ data }: DetailProp) {
  const router = useRouter();
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
            <SImageBg alt='background image' src={BackgroundImage} layout="responsive" />
            <SImage onClick={() => router.push('/')} alt='background image' src={Cross} width={15} height={15} />
            <CardTextContainer>
              <FlexTitle>
                <SDecoration alt='background image' src={LineLeft} />
                <Title>DELEGATE CALL DETECTION</Title>
                <SDecoration alt='background image' src={LineRight} />
              </FlexTitle>
              <FlexItemsFull>
                <FlexItemsHalf>
                  <SmTitle color={darkTheme.colors.gold}>Skill tree</SmTitle>
                  <SmTitle color={darkTheme.colors.blue}>{data.skillTree}</SmTitle>
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
                  <SmTitle color={darkTheme.colors.gold}>Quest type</SmTitle>
                  <SmTitle color={darkTheme.colors.white}>{data?.type}</SmTitle>
                </FlexItemsHalf>
              </FlexItemsFull>
              <FlexItemsFull>
                <Text>{data.description}</Text>
              </FlexItemsFull>
              <Separator />
              <FlexItemsFull>
                <Title>QUEST REWARDS</Title>
              </FlexItemsFull>
              <FlexItemsFull>
                <Box>
                  <Image alt="Exp" src={Exp} />
                  <SmallText>+ {data?.rewards?.experience}</SmallText>
                </Box>
                <Button onClick={() => router.push('/')}>GO BACK</Button>
              </FlexItemsFull>
            </CardTextContainer>
          </CardContainer>
        </StyledContainer>
      </main>
    </>
  );
}

