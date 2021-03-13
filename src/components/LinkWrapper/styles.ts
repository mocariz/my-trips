import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1100; // bigger than leaflet
  top: ${({ theme }) => theme.lineHeight.medium};
  right: ${({ theme }) => theme.lineHeight.medium};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  svg {
    transition: color 0.3s ease-in-out;
  }
  &:hover {
    svg {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
`
