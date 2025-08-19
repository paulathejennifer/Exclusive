import Button from "../Button";

export default function AuthForm({ type }: { type: "login" | "signup" }) {
  return (
    <form className="flex flex-col gap-4">
      {type === "signup" && (
        <input
          type="text"
          placeholder="Name"
          className="border-b px-2 py-2 focus:outline-none"
        />
      )}
      <input
        type="text"
        placeholder={type === "signup" ? "Email or Phone Number" : "Email or Phone Number"}
        className="border-b px-2 py-2 focus:outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        className="border-b px-2 py-2 focus:outline-none"
      />
      {type === "login" && (
        <div className="flex justify-end mt-2 text-sm">
          <a href="#" className="text-accent hover:underline">Forget Password?</a>
        </div>
      )}
      <Button type="submit">{type === "login" ? "Log In" : "Create Account"}</Button>
    </form>
  );
}