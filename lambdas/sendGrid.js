const sendGrid = require("@sendgrid/mail")

exports.handler = async function (event, context) {
  console.log(event.body)

  // sendGrid.setApiKey(process.env.SEND_GRID_API_KEY)

  // const message = {
  //   to: process.env.SEND_GRID_RECIPIENT,
  //   from: process.env.SEND_GRID_SENDER,
  //   subject: body.subject,
  //   text: body.message,
  // }

  // sendGrid.send(message)

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }
}
