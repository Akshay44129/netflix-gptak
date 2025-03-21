const checkValidaData = (email, password) =>{


    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/.test(password);

    if (! isEmailValid) return "Email Id is not Vailid";
    if(!isPasswordValid) return "Password is not Vailid";
     
    return null;
};

export default checkValidaData;