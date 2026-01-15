
export const Logout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("loggedUser")
}