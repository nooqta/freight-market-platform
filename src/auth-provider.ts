const mockUsers = [{ username: "admin" }, { username: "editor" }];

const authProvider = {
    login: ({ username, password: string, remember }:any) => {
        if (username === "admin") {
            localStorage.setItem("username", username);
            return Promise.resolve();
        }

        return Promise.reject();
    },
    logout: () => {
        localStorage.removeItem("username");
        return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () =>
        localStorage.getItem("username")
            ? Promise.resolve()
            : Promise.reject(),
    getPermissions: () => Promise.resolve(["admin"]),
};

export default authProvider;