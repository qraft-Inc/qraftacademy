import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export default handleAuth({
  async login(req, res) {
    await handleLogin(req, res, {
      // returnTo: "https://www.dashboard.qraftacademy.com/dashboard",
      returnTo: "https://www.qraftacademy.com",
    });
  },
});
 