import React, { FC } from "react"
import {
  FieldLabel,
  Form,
  FormGroup,
  InputField,
  SubmitButton,
  TextArea,
  Divider,
} from "./styled"

type ContactFormProps = {
  subjectLabel: string
  messageLabel: string
  buttonText: string
}

const ContactForm: FC<ContactFormProps> = ({
  subjectLabel,
  messageLabel,
  buttonText,
}) => {
  const onClick = async (
    e: React.MouseEvent<HTMLHeadingElement, MouseEvent>
  ) => {
    e.preventDefault()
    const res = await fetch("/.netlify/functions/sendGrid", {
      method: "GET",
    })

    const json = await res.json()

    console.log(json)
  }

  return (
    <Form>
      <FormGroup>
        <FieldLabel>{subjectLabel}</FieldLabel>
        <InputField />
      </FormGroup>
      <FormGroup>
        <FieldLabel>{messageLabel}</FieldLabel>
        <TextArea />
      </FormGroup>
      <FormGroup>
        <FieldLabel>Är du en robot?</FieldLabel>
        <InputField placeholder="Säg nej..." />
      </FormGroup>
      <Divider />
      <SubmitButton>{buttonText}</SubmitButton>
    </Form>
  )
}

export default ContactForm
