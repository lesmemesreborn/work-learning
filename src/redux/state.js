import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    postsData: [
      { id: 1, message: "Hi, how r u?", likes: 4 },
      { id: 2, message: "It's my 1st post", likes: 15 },
    ],
    newPostText: "",
  },

  messagesPage: {
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
  },
  sidebar: [
    {
      id: 2,
      name: "Roma",
      avatar: "https://cdn-icons-png.flaticon.com/128/2488/2488833.png",
    },
    {
      id: 3,
      name: "Pasha",
      avatar: "https://cdn-icons-png.flaticon.com/128/2488/2488833.png",
    },
    {
      id: 4,
      name: "Pasha",
      avatar: "https://cdn-icons-png.flaticon.com/128/2488/2488833.png",
    },
  ],
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likes: 0,
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree();
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree();
};

export default state;