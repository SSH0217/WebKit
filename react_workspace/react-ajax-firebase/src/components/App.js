import AppRouter from './Router'
import { useEffect, useState } from "react";
import { authService, dbService, storageService } from "../firebase.conf";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [carList, setCarList] = useState([]);
  
  function logginEffect() {
    authService.onAuthStateChanged((user)=>{
      setIsLoggedIn(user);
    })
  }

  function loadCarList() {
    const carCollection = dbService.collection('car');

  }
  
  useEffect(() => {
    logginEffect();
    loadCarList();
  }, [])

  async function onLogin(email, password) {
    let data = await authService.signInWithEmailAndPassword(email, password);
    if(data) {
      console.log(data);
      setIsLoggedIn(true);
    }
  }

  async function onLogout() {
    let data = await authService.signOut();
    setIsLoggedIn(false);
  }

  return (
    <div className="container">
      <AppRouter isLoggedIn={isLoggedIn} onLogin={onLogin} onLogout={onLogout}/>
    </div>
  );
}

export default App;
