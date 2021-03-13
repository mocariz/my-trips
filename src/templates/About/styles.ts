import styled from 'styled-components'

export const Content = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: ${({ theme }) => theme.width.container};
  margin: auto;
`

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  margin-bottom: 3rem;
`

export const Body = styled.div`
  // serve para estilos do body
  // p, a, ul, li, blockquote
  p {
    font-size: ${({ theme }) => theme.fontSize.medium};
    line-height: ${({ theme }) => theme.lineHeight.medium};
  }
`
