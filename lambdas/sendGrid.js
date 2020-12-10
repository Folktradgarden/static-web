const sendGrid = require("@sendgrid/mail")

exports.handler = async function (event, context) {
  const body = JSON.parse(event.body)

  sendGrid.setApiKey(process.env.SEND_GRID_API_KEY)

  const message = {
    to: process.env.SEND_GRID_RECIPIENT,
    from: process.env.SEND_GRID_SENDER,
    subject: body.subject,
    text: body.message,
  }

  let statusCode = 200

  try {
    await sendGrid.send(message)

    console.log(`
    # SUCCESS
    # ------------------------------
    # Subject:
    #   ${body.subject}
    # Text:
    #   ${body.message}
    `)
  } catch (e) {
    statusCode = 500
    console.log(`
    # FAILURE
    # ------------------------------
    # Error:
    #   ${e.message}
    `)
  }

  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
  }
}
