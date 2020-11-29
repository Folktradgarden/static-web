import React, { FC } from "react"
import { Header, Paragraph, SignFoot, SignRoot, SignSurface } from "./styled"

const Sign: FC = () => {
  return (
    <SignRoot>
      <SignSurface>
        <Header animate>En ideell förening.</Header>
        <Paragraph>
          Begagnade spadar och verktyg. Återvunnet byggmaterial. Att arbeta hårt
          tillsammans, i en inkluderande social gemenskap. Olle Elfvin och Jakob
          Hedvall drömmer om att göra Folkträdgården till både livsstil och
          inkomstkälla!
        </Paragraph>
      </SignSurface>
      <SignFoot />
    </SignRoot>
  )
}

export default Sign
