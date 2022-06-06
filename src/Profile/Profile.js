import PropTypes, { string } from 'prop-types';
const Profile=({fullName, bio, profession,handleNAlert,children})=>{
    return(
        <div>
            {children}
            <h2>My name is {fullName}</h2>
            <h2>{bio}</h2>
            <h2>I am a {profession}</h2>
            <button onClick={()=>handleNAlert(fullName)}>Click</button>

        </div>
    )
}
Profile.defaultProps={
    fullName : 'Touir Marwa',
    bio : 'I finished my studies as a fashion designer in 2020, i am studying Full Stack Js actually and working at the same time. ',
    profession : 'Customer Service',
}

Profile.propTypes = {
    fullName : PropTypes.string,
    bio : PropTypes.string,
    profession : string,
 }


export default Profile
