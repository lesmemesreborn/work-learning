const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

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
  newMessageBody: "",
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          {
            id: Math.floor(Math.random() * 99999),
            message: body,
          },
        ],
        newMessageBody: "",
      };

    default:
      return state;
  }
};
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default messagesReducer;
