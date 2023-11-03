import { auth, provider } from "../../firebase-config";
import { signInWithPopup,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"; //importamos metodos

//Acceso de usuarios existentes
export function signInUsers (email, password) {

  console.log(email, password)
  return signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  console.log(auth, email, password, userCredential.user)
  return user 
})
.catch((error) => {
  console.log('ACA CATCH 2===>', error)
  const errorCode = error.code;
  const errorMessage = error.message;
  return errorMessage
});
}

//funcion de boton de google
export function call_login_google() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log({user});
      return user
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log({errorMessage});
      return errorMessage
      //...
    });
}

 //Funcion registrar usuarios nuevos 
 export function createUser(email, password) {
 return createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("usuario registrado:", user);
    return userCredential
    //..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error al registrar usuario:", errorMessage); 
   return errorMessage
    // ..
  });
 }
