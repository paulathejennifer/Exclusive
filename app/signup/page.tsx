import Navbar from "@/shared-components/Navbar";
import Footer from "@/shared-components/Footer";
import AuthForm from "@/shared-components/AuthForm";
import AuthSideImage from "@/shared-components/AuthSideImage";

export default function SignupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-1 items-center justify-center bg-[#f5f5f5] py-8 px-4">
        <div className="flex flex-col md:flex-row max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <AuthSideImage />
          <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-2">Create an account</h2>
            <p className="text-gray-500 text-sm mb-6">Enter your details below</p>
            <AuthForm type="signup" />
            <div className="mt-6 text-sm text-center text-gray-600">
              Already have account?{" "}
              <a href="/login" className="text-accent font-medium hover:underline">Log in</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}