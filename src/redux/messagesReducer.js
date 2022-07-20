const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
  messagesData: [
    { id: 1, message: "Hello" },
    { id: 2, message: "How r u?" },
    { id: 3, message: "Fine" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Wheres my img elem?" },
    { id: 6, message: "?" },
  ],
  dialogsData: [
    { id: 1, name: "Max" },
    { id: 2, name: "Roma" },
    { id: 3, name: "Pasha" },
    { id: 4, name: "Yura" },
    { id: 5, name: "Yulya" },
    { id: 6, name: "Chris" },
  ],
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          {
            id: Math.floor(Math.random() * 99999),
            message: body,
          },
        ],
      }

    default:
      return state
  }
}
export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
})

export default messagesReducer
