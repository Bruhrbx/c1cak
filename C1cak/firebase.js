<script>
const firebaseConfig={/* ISI CONFIG */};
firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();
const db=firebase.firestore();
const storage=firebase.storage();
function login(){auth.signInWithEmailAndPassword(email.value,password.value).then(()=>location.href='main.html')}
function signup(){auth.createUserWithEmailAndPassword(email.value,password.value)}
function logout(){auth.signOut().then(()=>location.href='login.html')}
async function upload(){
const f=file.files[0];
const ref=storage.ref('memes/'+Date.now());
await ref.put(f);
const url=await ref.getDownloadURL();
await db.collection('memes').add({url,caption:caption.value,likes:0,created:Date.now()});
location.href='main.html';
}
async function like(id){db.collection('memes').doc(id).update({likes:firebase.firestore.FieldValue.increment(1)})}
function report(id){alert('Meme dilaporkan 🚨');}
</script>
