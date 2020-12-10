import styled from "styled-components"

export const Form = styled.form`
  height: 100%;
  width: 100%;
`
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
`

export const FieldLabel = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  margin-bottom: 0.4rem;
`

export const InputField = styled.input`
  font-size: 1.2rem;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 0.8rem 0 0.6rem 0.4rem;
  text-decoration: none;
  outline: none;
  color: ${({ theme }) => theme.colors.secondary};

  ::placeholder {
    color: ${({ theme }) => theme.colors.secondary + "77"};
  }
`

export const TextArea = styled.textarea`
  font-size: 1.2rem;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 0.8rem 0 0.6rem 0.4rem;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  height: 200px;
  resize: none;
  color: ${({ theme }) => theme.colors.secondary};

  ::placeholder {
    color: ${({ theme }) => theme.colors.secondary + "77"};
  }
`

export const Divider = styled.div`
  height: 0;
  width: 100%;
  border-top: solid
    ${({ theme }) => `${theme.border.width} ${theme.colors.accent}`};
  margin: 1rem 0;
`

export const SubmitButton = styled.button`
  font-size: 2.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.onPrimary};
  text-transform: uppercase;
  width: 100%;
  padding: 1rem 1rem 0.7rem 1rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
`
