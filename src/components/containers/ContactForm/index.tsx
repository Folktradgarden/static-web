import React, { FC } from "react"
import { useForm } from "react-hook-form"
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

type SubmitValues = {
  subject: string
  message: string
  spam: string
}

const ContactForm: FC<ContactFormProps> = ({
  subjectLabel,
  messageLabel,
  buttonText,
}) => {
  const { handleSubmit, register } = useForm()

  const onSubmit = async (data: SubmitValues) => {
    if (data.spam.toLowerCase() === "nej") {
      const res = await fetch("/.netlify/functions/sendGrid", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })

      const json = await res.json()
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <FieldLabel>{subjectLabel}</FieldLabel>
        <InputField ref={register()} name="subject" />
      </FormGroup>
      <FormGroup>
        <FieldLabel>{messageLabel}</FieldLabel>
        <TextArea ref={register()} name="message" />
      </FormGroup>
      <FormGroup>
        <FieldLabel>Är du en robot?</FieldLabel>
        <InputField ref={register()} name="spam" />
      </FormGroup>
      <Divider />
      <SubmitButton type="submit">{buttonText}</SubmitButton>
    </Form>
  )
}

export default ContactForm
