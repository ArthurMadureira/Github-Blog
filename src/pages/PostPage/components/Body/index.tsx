import Markdown from 'marked-react';
import { BodyContainer } from './styles';
import 'github-markdown-css/github-markdown-dark.css'

interface BodyProps {
  body?: string
}

export function Body({ body }: BodyProps) {
  return (
    <BodyContainer className='markdown-body'>
      <Markdown value={body} />
    </BodyContainer>
  )
}