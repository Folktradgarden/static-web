import styled from "styled-components"

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 0;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};
  border-top: ${({ theme }) =>
    `solid ${theme.border.width} ${theme.colors.secondary}`};
`

export const Street = styled.h3`
  font-size: 2rem;
  text-transform: uppercase;
`

export const ZipCity = styled.h3`
  font-size: 1.4rem;
  text-transform: uppercase;
`

export const MapContainer = styled.div`
  flex: 1;
  width: 100%;
  box-sizing: border-box;
`
