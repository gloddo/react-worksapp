import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyCyQTT5lSbckU1ReA0vAGgxgB2fc9doYw8",
  authDomain: "react-worksapp.firebaseapp.com",
  databaseURL: "https://react-worksapp.firebaseio.com",
  projectId: "react-worksapp",
  storageBucket: "react-worksapp.appspot.com",
  messagingSenderId: "310211456876"
};
firebase.initializeApp(config);
var db = firebase.firestore();

export const login = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => user.user.uid)
    .catch(function(error) {
      // Handle Errors here.
      console.log(error);
      // ...
    });
};
export const getUsers = callback => {
  let users = {};
  db.collection("users")
    .get()
    .then(coll => {
      coll.forEach(element => {
        users[element.id] = {
          ...element.data(),
          id: element.id
        };
      });
      callback(users);
    });
};
export const getChats = (callback, user) => {
  let chat = [];
  db.collection("chats")
    .where("partecipants", "array-contains", user)
    .get()
    .then(coll => {
      coll.forEach(element => {
        chat.push({
          ...element.data(),
          date: element.data().date.toDate(),
          partecipants: element
            .data()
            .partecipants.find(partecipant => partecipant !== user),
          id: element.id
        });
      });
      callback(chat);
    });
};
export const getRoles = callback => {
  let roles = [];
  db.collection("users")
    .get()
    .then(coll => {
      coll.forEach(element => {
        roles.push(element.data().role);
      });
      callback(new Array(...new Set(roles)));
    });
};
export const getMessages = (callback, chatid) => {
  let message = [];
  db.collection("messages")
    .where("chatID", "==", chatid)
    .get()
    .then(coll => {
      coll.forEach(element => {
        message.push({
          ...element.data(),
          date: element.data().time.toDate()
        });
      });
      callback(message);
    });
};

export const onMessages = (callback, chatid) => {
  db.collection("messages")
    .where("chatID", "==", chatid)
    .orderBy("time", "asc")
    .onSnapshot(coll => {
      let message = [];
      coll.forEach(element => {
        message.push({
          ...element.data(),
          date: element.data().time.toDate()
        });
      });
      callback(message);
    });
};

export const sendMessages = (text, time, chatID, sender) => {
  let message = {
    text: text,
    time: time,
    chatID: chatID,
    sender: sender
  };
  console.log(message);
  db.collection("messages")
    .add(message)
    .then(() => console.log("messaggio inviato"))
    .catch(error => console.log(error));
};

export const autocomplete = (event, results) => {
  event = event.toLowerCase();
  if (event !== "") {
    let name = results.filter(([id, element]) => {
      return element.name.toLowerCase().includes(event);
    });
    let surname = results.filter(([id, element]) => {
      return element.surname.toLowerCase().includes(event);
    });
    let role = results.filter(([id, element]) => {
      return element.role.toLowerCase().includes(event);
    });
    let username = results.filter(([id, element]) => {
      return element.username.toLowerCase().includes(event);
    });
    let result = role.concat(name, surname, username);
    result = [...new Set(result)];
    return result;
  }
  return [];
};
