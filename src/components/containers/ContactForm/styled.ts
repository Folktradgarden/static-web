import styled from "styled-components"

export const Form = styled.form`
  height: 100%;
  width: 100%;
`
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0.8rem;
`

export const FieldLabel = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  margin-bottom: 0.4rem;
`

export const ErrorLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.error};
  margin-top: 0.4rem;
  min-height: 1rem;
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

  :disabled {
    background-color: ${({ theme }) => theme.colors.backgroundDark};
    color: ${({ theme }) => theme.colors.secondary + "77"};
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.surface} inset !important;
  }

  :-webkit-autofill:disabled {
    background-color: ${({ theme }) => theme.colors.background};
  }

  transition: background-color 500ms;
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

  :disabled {
    background-color: ${({ theme }) => theme.colors.backgroundDark};
    color: ${({ theme }) => theme.colors.secondary + "77"};
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.secondary + "77"};
  }

  transition: background-color 500ms;
`

export const Divider = styled.div`
  height: 0;
  width: 100%;
  border-top: solid
    ${({ theme }) => `${theme.border.width} ${theme.colors.accent}`};
  margin: 0.8rem 0;
`
type SubmitButtonProps = {
  normalPadding: boolean
}
export const SubmitButton = styled.button<SubmitButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.onPrimary};
  text-transform: uppercase;
  width: 100%;
  padding: ${({ normalPadding }) => (normalPadding ? "0.85rem" : "1rem")} 1rem
    ${({ normalPadding }) => (normalPadding ? "0.85rem" : "0.7rem")} 1rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  max-height: 3.9rem;
  min-height: 3.9rem;
  outline: none;
  cursor: pointer;
`

export const Loader = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  animation: rotate-frames 2s infinite linear;
`
