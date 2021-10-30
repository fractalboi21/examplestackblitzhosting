// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDPjcj4BxmOCX5Nu-5KZXuqIckP7E3OcXw',
  authDomain: 'fir-basics-69ac4.firebaseapp.com',
  databaseURL:
    'https://fir-basics-69ac4-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'fir-basics-69ac4',
  storageBucket: 'fir-basics-69ac4.appspot.com',
  messagingSenderId: '547020170883',
  appId: '1:547020170883:web:15a74f1d93a42f298c9db6',
  measurementId: 'G-4VYDVVPSEY',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const functions = firebase.functions();
db.settings({ timestampsInSnapshots: true });

// add data to firestore
function addData() {
  let title = document.getElementById('title');
  let desc = document.getElementById('desc');
  let payload = {
    title: title.value,
    desc: desc.value,
    createdAt: new Date().toISOString(),
  };
  db.collection('posts').add(payload);
  console.log('data added to the firestore successfully');
  title.value = '';
  desc.value = '';
}


