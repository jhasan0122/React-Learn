
function ProfilePicture() {
    const imageUrl = './src/assets/profile_pic.jpg';

    const handleClick = (e) => e.target.style.display = "none";
    
    return(<img onClick={(e) => handleClick(e)} src={imageUrl} alt=""/>);
}

export default ProfilePicture