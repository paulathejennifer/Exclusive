import Navbar from "@/shared-components/Navbar";
import Footer from "@/shared-components/Footer/Footer";
import AuthForm from "@/shared-components/AuthForm";
import AuthSideImage from "@/shared-components/AuthSideImage";

export default function SignupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-1 items-center justify-center bg-gray-100 py-12 px-4">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
          <AuthSideImage />
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Create an Account</h2>
            <p className="text-gray-600">Enter your details to get started with Exclusive</p>
            <AuthForm type="signup" />
            <div className="text-sm text-center text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-[#A3005A] font-medium hover:underline">Log in</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}