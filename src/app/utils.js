// Create a new user and store in localStorage
export const CreateUser = (username, email, pass) => {
    // Get existing users (if none, empty array)
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(u => u.email === email);
    if (exists) {
        return "Email already registered!";
    }
    users.push({
        name: username,
        email: email,
        password: pass
    });
    localStorage.setItem("users", JSON.stringify(users));
    const user = users.find(u => u.email === email);
    return "User created successfully!";

};

export const LoginUser = (usermail, userpass) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user by email
    const user = users.find(u => u.email === usermail);

    if (!user) {
        return "Invalid email";
    } else if (user.password !== userpass) {
        return "Invalid password";
    } else {
        return "Login Success"
    }
};

export const getCurrentUser = (data) =>{
   const userInfo = {
    data
   }
    return userInfo
}