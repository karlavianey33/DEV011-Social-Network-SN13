import { auth, provider } from "../../firebase-config";
import { signInWithPopup,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"; //importamos metodos

//Función para el botón de inicio de sesión usuarios existentes
export function signInUsers (email, password) {
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

//Función para el botón de inicio de sesión con Google
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
    });
}

 //Función para el botón de registrar nuevos usuarios  
 export function createUser(email, password) {
 return createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    auth.signOut();
    // Enviar un correo de verificación al usuario
    sendEmailVerification(auth.currentUser)
    .then(() => {
      console.log('Correo de verificación enviado');
    })
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error al registrar usuario:", errorMessage); 
   return errorMessage
    // ..
  });
 }
