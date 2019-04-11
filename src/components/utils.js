import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCyQTT5lSbckU1ReA0vAGgxgB2fc9doYw8",
  authDomain: "react-worksapp.firebaseapp.com",
  databaseURL: "https://react-worksapp.firebaseio.com",
  projectId: "react-worksapp",
  storageBucket: "react-worksapp.appspot.com",
  messagingSenderId: "310211456876"
};
firebase.initializeApp(config);
const db = firebase.firestore();
const storage = firebase.storage();

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
      callback([...new Set(roles)]);
    });
};
export const getMessages = (callback, chatid) => {
  let message = [];
  db.collection("messages")
    .where("chatID", "==", chatid)
    .orderBy("time", "desc")
    .limit(15)
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
    .orderBy("time", "desc")
    .limit(15)
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

export const sendMessages = (
  text,
  time,
  chatID,
  sender,
  mediaUrl,
  mediaType,
  mediaName
) => {
  let message = {
    text: text,
    time: time,
    chatID: chatID,
    sender: sender,
    mediaUrl: mediaUrl,
    mediaType: mediaType,
    mediaName: mediaName
  };
  console.log(message);
  return db
    .collection("messages")
    .add(message)
    .then(() => console.log("messaggio inviato"))
    .catch(error => console.log(error));
};

export const autocomplete = (event, users) => {
  event = event.toLowerCase()
  if (event !== "") {
    let results = Object.values(users)
    let name = results.filter((element) => {
      return element.name.toLowerCase().includes(event);
    })       
    let surname = results.filter((element) => {
      return element.surname.toLowerCase().includes(event);
    });
    let role = results.filter((element) => {
      return element.role.toLowerCase().includes(event);
    });
    let username = results.filter((element) => {
      return element.username.toLowerCase().includes(event);
    });
    let result = name.concat(surname, role, username);
    result = [...new Set(result)];
    return result;
  }
  return []
};

const updateProfilePic = (userId, mediaUrl) => {
  db.collection("users")
    .doc(userId)
    .update({
      img: mediaUrl
    })
    .then(() => console.log("immagine aggiornata"))
    .catch(error => console.log(error));
};

export const uploadPicture = (file, type, userId, chatId) => {
  const url = `${type}-${chatId || userId}/${Date.now()}-${file.name}`;
  var ref = storage.ref().child(url);
  ref.put(file).then(async result => {
    let mediaUrl = await result.ref.getDownloadURL();
    let mediaType = result.metadata.contentType;
    let mediaName = file.name;
    if (chatId) {
      return sendMessages(
        "",
        new Date(),
        chatId,
        userId,
        mediaUrl,
        mediaType,
        mediaName
      );
    }
    return updateProfilePic(userId, mediaUrl);
  });
};

export const updateState = (userId, state) => {
  return db
    .collection("users")
    .doc(userId)
    .update({
      state: state
    })
    .then(() => console.log("stato aggiornato"));
};

export const onUsers = callback => {
  let users = {};
  db.collection("users").onSnapshot(coll => {
    coll.forEach(element => {
      users[element.id] = {
        ...element.data(),
        id: element.id
      };
    });
    callback(users);
  });
};

export const onChats = (callback, user) => {
  let chat = [];
  db.collection("chats")
    .where("partecipants", "array-contains", user)
    .onSnapshot(coll => {
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
