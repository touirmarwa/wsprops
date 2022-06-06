import './App.css';
import Profile from './Profile/Profile';

function App() {
  let fullName = 'Touir Marwa'
  let bio = 'I finished my studies as a fashion designer in 2020, i am studying Full Stack Js actually and working at the same time. '
  let profession = 'Customer Service'
  const handleNAlert=(a)=>{
    return alert(`Hello ${a}`)
  }
  return (
    <div className='Marwa'>

    <h1 style={{color :'black', textDecoration :'underline'}}>Profile de Marwa</h1>
    <Profile fullName={fullName} bio={bio} profession={profession} handleNAlert={handleNAlert}>
      <img src='/image.jpg' alt='Not Found'/>
    </Profile>

    </div>

  );
}
export default App;
