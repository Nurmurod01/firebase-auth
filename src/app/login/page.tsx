"use client";
import { login } from "@/store/authSlice";
import { emailSignIn, googleSignIn } from "@/utils/firebaseAuth";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const handleGoogleSignIn = async () => {
    const result = await googleSignIn();
    dispatch(
      login({
        email: result.user.email,
        photoURL: result.user.photoURL,
        displayName: result.user.displayName,
      })
    );
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = (e.target as HTMLFormElement)["email"].value;
    const password = (e.target as HTMLFormElement)["password"].value;

    const result = await emailSignIn(email, password);
    dispatch(
      login({
        email: result.user.email,
        photoURL: result.user.photoURL,
        displayName: result.user.displayName,
      })
    );
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Login</h2>
      <form onSubmit={handleEmailSignIn} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 text-black border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 border text-black rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
      <div className="flex justify-center items-center gap-3 text-gray-300 mt-3">
        <hr className="w-[45%]"/>
        <p>or</p>
        <hr className="w-[45%]"/>
      </div>
      <button
        onClick={handleGoogleSignIn}
        className="mt-4 w-full bg-gradient-to-r from-yellow-300 to-green-400 text-white p-2 rounded"
      >
        Google
      </button>
    </div>
  );
};

export default Login;
