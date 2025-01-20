"use client";
import { useSelector, useDispatch } from "react-redux";
import { signOutUser } from "@/utils/firebaseAuth";
import { RootState } from "@/store/store";
import { logout } from "@/store/authSlice";
import Link from "next/link";

const Navbar = () => {
  const user = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await signOutUser();
    dispatch(logout());
  };

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-around items-center">
      <h1 className="text-xl font-bold">Firebase Auth</h1>
      {user.email ? (
        <div className="flex items-center space-x-4">
          <img
            src={user.photoURL || ""}
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span>{user.displayName || user.email}</span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="space-x-4">
          <Link
            href="/login"
            className="px-4 py-2 font-bold text-blue-500 rounded"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 font-bold text-green-500 rounded"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
