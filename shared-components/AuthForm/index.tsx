import Button from "../Button/Button";

export default function AuthForm({ type }: { type: "login" | "signup" }) {
  return (
    <form className="flex flex-col gap-4">
      {type === "signup" && (
        <>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            className="border-b px-2 py-2 focus:outline-none border-gray-300"
          />
        </>
      )}
      <label htmlFor="emailOrPhone" className="sr-only">Email or Phone Number</label>
      <input
        id="emailOrPhone"
        name="emailOrPhone"
        type="text"
        placeholder="Email or Phone Number"
        className="border-b px-2 py-2 focus:outline-none border-gray-300"
      />
      <label htmlFor="password" className="sr-only">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        className="border-b px-2 py-2 focus:outline-none border-gray-300"
      />
      {type === "login" && (
        <div className="flex justify-end mt-2 text-sm">
          <a href="#" className="text-accent hover:underline">Forget Password?</a>
        </div>
      )}
      <Button type="submit" className="bg-red-600 text-white">
        {type === "login" ? "Log In" : "Create Account"}
      </Button>
      {type === "signup" && (
        <button
          type="button"
          className="border border-gray-300 px-2 py-2 rounded flex items-center justify-center text-gray-700 hover:bg-gray-100"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5 mr-2"
          />{" "}
          Sign up with Google
        </button>
      )}
    </form>
  );
}
