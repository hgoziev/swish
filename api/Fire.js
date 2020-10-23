import app from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

class Fire {
  uid = '';
  messageReference = null;
  constructor() {
    this.init();
    this.checkAuth();
  }

  init = () => {
    if (!app.apps.length) {
      app.initializeApp({
        apiKey: 'AIzaSyBbjPEM4YSqno4YaqjgUnkCzYOnoUV-VsI',
        clientId:
          '111261486161-eo90f05ms5ht99svsvb554k2se85oo45.apps.googleusercontent.com',
        appId: '1:111261486161:android:d1d3a2bfaa2b0addb7fc70',
        databaseURL: 'https://swish-19d92.firebaseio.com',
        storageBucket: 'swish-19d92.appspot.com',
        projectId: 'swish-19d92',
        messagingSenderId: '111261486161',
      });
    }
  };

  checkAuth = () => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setUid(user.uid);
      } else {
        auth().signInAnonymously();
      }
    });
  };

  setUid(value) {
    this.uid = value;
  }

  getUid() {
    return this.uid;
  }

  //get messages from Backend
  loadMessages(callback) {
    this.messageReference = database().ref('messages');
    this.messageReference.off();

    const onReceive = (data) => {
      const message = data.val();
      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name,
        },
      });
    };
    this.messageReference.limitToLast(20).on('child_added', onReceive);
  }

  //send message

  sendMessage(message) {
    for (let i = 0; i < message.length; i++) {
      this.messageReference.push({
        text: message[i].text,
        user: message[i].user,
        createdAt: database.ServerValue.TIMESTAMP,
      });
    }
  }

  //close connection with backend

  closeChat() {
    if (this.messageReference) {
      this.messageReference.off();
    }
  }
}

export default new Fire();
