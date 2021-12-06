import { db, auth } from './firebase'

const boardsRef = db.ref("/boards")
const listsRef = db.ref("/lists")
const tasksRef = db.ref("/tasks")

export default {

    registerUser(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    },
    logoutUser(){
        return auth.signOut()
    },
    getUser(){
        debugger
        return auth.currentUser
    },
    validateUser(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    },
    getBoardByUser(userId){
        const query = boardsRef.orderByChild('owner').equalTo(userId)
        return query.once("value")
    },
    getBoardById(boardId){
        const query = boardsRef.orderByChild("id").equalTo(boardId);
        return query.once("value") 
    },
    postBoard(name, owner = 1) {
        const id = boardsRef.push().key
        const board = { id, name, owner }
        return boardsRef.child(id).set(board).then(() => board)
    },
    getListFromBoard (boardId) {
        const query = listsRef.orderByChild('board').equalTo(boardId)
        return query.once('value')
    },
    getListById(listId){
        const query = listsRef.orderByChild("id").equalTo(listId);
        return query.once("value") 
    },
    postList (board, name){
        const id = listsRef.push().key
        const column = {id, name, board }
        return listsRef.child(id).set(column).then(() => column)
    },
    getTaskFromList (listId){
        const query = tasksRef.orderByChild('list').equalTo(listId)
        return query.once('value')
    },
    getTaskById(taskId){
        const query = tasksRef.orderByChild("id").equalTo(taskId);
        return query.once("value") 
    },
    postTask(list, title){
        const id = tasksRef.push().key
        const task = { id, list, title, completed: false }
        return tasksRef.child(id).set(task).then(() => task)
    },
    deleteTask(taskId){
        return tasksRef.child(taskId).remove()
    },
    completedTask(taskId){
        const query = tasksRef.child(taskId).child('completed')
        return query.once('value').then(snap => snap.val()).then(data => query.set(!data))
    }
}

/***************************************
 EXAMPLE FIREBASE DDL (Data Definition Language)
***************************************
- INSERT
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture : imageUrl
    });
- UPDATA
    const db = getDatabase();

    // A post entry.
    const postData = {
        author: username,
        uid: uid,
        body: body,
        title: title,
        starCount: 0,
        authorPic: picture
    };

    // Get a key for a new Post.
    const newPostKey = push(child(ref(db), 'posts')).key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    return update(ref(db), updates);
- SELECT (LEE Y DETECTA CAMBIOS {ON, ONCE})
    const db = getDatabase();
    const starCountRef = ref(db, 'posts/' + postId + '/starCount');
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        updateStarCount(postElement, data);
    });

    const db = getDatabase();
    const auth = getAuth();
    const userId = auth.currentUser.uid;
    return onValue(ref(db, '/users/' + userId), (snapshot) => {
    const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
        // ...
    }, {
        onlyOnce: true
    });
- SELECT (LEE LOS DATOS UNA VEZ {GET})
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
        console.error(error);
    });
DELETE
    REF.child(id).remove()
*/