import React, { FC, useState } from "react"
import { useForm } from "react-hook-form"
import FlowerIcon from "../../presentational/Icons/FlowerIcon"
import {
  FieldLabel,
  Form,
  FormGroup,
  InputField,
  SubmitButton,
  TextArea,
  Divider,
  ErrorLabel,
  Loader,
} from "./styled"

type ContactFormProps = {
  subjectLabel: string
  subjectRequiredError: string
  messageLabel: string
  messageRequiredError: string
  messageMaxLimitError: string
  spamError: string
  buttonText: string
}

type SubmitValues = {
  subject: string
  message: string
  spam: string
}

const ContactForm: FC<ContactFormProps> = ({
  subjectLabel,
  subjectRequiredError,
  messageLabel,
  messageRequiredError,
  messageMaxLimitError,
  spamError,
  buttonText,
}) => {
  const { handleSubmit, register, errors, reset, setValue } = useForm()
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const onSubmit = async (data: SubmitValues) => {
    if (data.spam.toLowerCase() === "nej") {
      setIsSubmitting(true)

      const res = await fetch("/.netlify/functions/sendGrid", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })

      reset()
      setValue("message", "")
      setIsSubmitting(false)
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <FieldLabel>{subjectLabel}</FieldLabel>
        <InputField
          ref={register({
            required: subjectRequiredError,
          })}
          name="subject"
          disabled={isSubmitting}
          autoComplete="off"
        />
        <ErrorLabel>{errors.subject && errors.subject.message}</ErrorLabel>
      </FormGroup>
      <FormGroup>
        <FieldLabel>{messageLabel}</FieldLabel>
        <TextArea
          ref={register({
            required: messageRequiredError,
            maxLength: {
              value: 256,
              message: messageMaxLimitError,
            },
          })}
          name="message"
          disabled={isSubmitting}
          autoComplete="off"
        />
        <ErrorLabel>{errors.message && errors.message.message}</ErrorLabel>
      </FormGroup>
      <FormGroup>
        <FieldLabel>Är du en robot?</FieldLabel>
        <InputField
          ref={register({
            required: spamError,
            validate: value => value.toLowerCase() === "nej" || spamError,
          })}
          name="spam"
          disabled={isSubmitting}
          autoComplete="off"
        />
        <ErrorLabel>{errors.spam && errors.spam.message}</ErrorLabel>
      </FormGroup>
      <Divider />
      <SubmitButton normalPadding={isSubmitting} type="submit">
        {isSubmitting ? (
          <Loader>
            <FlowerIcon color="onPrimary" size="medium" />
          </Loader>
        ) : (
          buttonText
        )}
      </SubmitButton>
    </Form>
  )
}

export default ContactForm
