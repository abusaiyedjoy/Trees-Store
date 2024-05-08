const ProfilePic = (Image) => {
    const reader = new FileReader();
    reader.readAsDataURL(Image);

    return new Promise((resolve, reject) =>{
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
};

export default ProfilePic;
