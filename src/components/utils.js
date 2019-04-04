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

export const autocomplete = (event, results) => {
  event = event.toLowerCase();
  if (event != "") {
    let name = results.filter(element => {
      return element.name.toLowerCase().includes(event);
    });
    let surname = results.filter(element => {
      return element.surname.toLowerCase().includes(event);
    });
    let role = results.filter(element => {
      return element.role.toLowerCase().includes(event);
    });
    let username = results.filter(element => {
      return element.username.toLowerCase().includes(event);
    });
    let result = role.concat(name, surname, username);
    result = [...new Set(result)];
    return result;
  }
  return [];
};
