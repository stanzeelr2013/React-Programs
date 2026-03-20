import './Usercard.css';
const Usercard=({ name, image, description })=>{
return(
    <div className="User-container">
        <p id='user-Name'>{name}</p>
        <img id='User-Img' src={image} alt='User'/>
        <p id= 'User-Desc'>{description}</p>
    </div>
)
}
export default Usercard