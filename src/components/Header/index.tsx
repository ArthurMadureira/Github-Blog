import { HeaderCenter, HeaderContainer } from "./styles";

import EffectRight from '../../assets/effect-right.svg'
import EffectLeft from '../../assets/effect-left.svg'

import TerminalSolid from '../../assets/terminal-solid.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={EffectLeft} alt="" className="effect-left" />
      <HeaderCenter>
        <img src={TerminalSolid} alt="" className="terminal-solid" />
        <h1>Github Blog</h1>
      </HeaderCenter>
      <img src={EffectRight} alt="" className="effect-right" />
    </HeaderContainer>
  )
}