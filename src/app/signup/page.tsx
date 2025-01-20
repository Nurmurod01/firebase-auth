"use client";
import { useDispatch } from "react-redux";
import { emailSignUp, googleSignIn } from "@/utils/firebaseAuth";
import { login } from "@/store/authSlice";

const Signup = () => {
  const dispatch = useDispatch();

  const handleGoogleSignUp = async () => {
    const result = await googleSignIn();
    dispatch(
      login({
        email: result.user.email,
        photoURL: result.user.photoURL,
        displayName: result.user.displayName,
      })
    );
  };

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = (e.target as HTMLFormElement)["email"].value;
    const password = (e.target as HTMLFormElement)["password"].value;
    console.log(email, password);
    const result = await emailSignUp(email, password);
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
      <h2 className="text-2xl mb-4">Sign Up</h2>
      <form onSubmit={handleEmailSignUp} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full text-black p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full text-black p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Sign Up
        </button>
      </form>
      <div className="flex justify-center items-center gap-3 text-gray-300 mt-3">
        <hr className="w-[45%]" />
        <p>or</p>
        <hr className="w-[45%]" />
      </div>
      <button
        onClick={handleGoogleSignUp}
        className="mt-4 w-full bg-gradient-to-r from-yellow-300 to-green-400 text-white p-2 rounded"
      >
        Google
      </button>
    </div>
  );
};

export default Signup;
