import styled from "styled-components";
import { defaultTheme } from "@/styles/theme";
import Image from "next/image";
import { useRouter } from 'next/router';

const StyledContainer = styled.div`
  padding: ${defaultTheme.spacing.xs} ${defaultTheme.spacing.s};
  width: 100%;
	cursor: pointer;
`

export default function Header() {
	const router = useRouter();

	return (
		<StyledContainer onClick={() => router.push('/')} >
			<Image src="/logo.svg" alt="logo" width={285} height={35} />
		</StyledContainer>
	);
}
