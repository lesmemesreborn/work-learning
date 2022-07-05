// import messagesReducer from "./messagesReducer";
// import profileReducer from "./profileReducer";
// import sidebarReducer from "./sidebarReducer";

// let store = {
//   _state: {
//     profilePage: {
//       postsData: [
//         { id: 1, message: "Hi, how r u?", likes: 4 },
//         { id: 2, message: "It's my 1st post", likes: 15 },
//       ],
//       newPostText: "",
//     },

//     messagesPage: {
//       messagesData: [
//         { id: 1, message: "Hello" },
//         { id: 2, message: "How r u?" },
//         { id: 3, message: "Fine" },
//         { id: 4, message: "Yo" },
//         { id: 5, message: "Wheres my img elem?" },
//         { id: 6, message: "?" },
//       ],
//       dialogsData: [
//         { id: 1, name: "Max" },
//         { id: 2, name: "Roma" },
//         { id: 3, name: "Pasha" },
//         { id: 4, name: "Yura" },
//         { id: 5, name: "Yulya" },
//         { id: 6, name: "Chris" },
//       ],
//       newMessageBody: "",
//     },
//     sidebar: [
//       {
//         id: 2,
//         name: "Roma",
//         avatar: "https://cdn-icons-png.flaticon.com/128/2488/2488833.png",
//       },
//       {
//         id: 3,
//         name: "Pasha",
//         avatar: "https://cdn-icons-png.flaticon.com/128/2488/2488833.png",
//       },
//       {
//         id: 4,
//         name: "Pasha",
//         avatar: "https://cdn-icons-png.flaticon.com/128/2488/2488833.png",
//       },
//     ],
//   },
//   getState() {
//     return this._state;
//   },
//   _callSubscriber() {
//     console.log("State has been changed");
//   },
//   updateNewPostText(newText) {},
//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },
//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.messagesPage = messagesReducer(
//       this._state.messagesPage,
//       action
//     );
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action);

//     this._callSubscriber(this._state);
//   },
// };

// export default store;
// window.store = store;
