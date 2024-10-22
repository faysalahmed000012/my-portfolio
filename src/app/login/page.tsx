import LoginForm from "@/components/custom/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="w-full max-w-md">
        <div className="w-full bg-red-300 border-4 p-6 border-red-500 rounded-xl mb-3 flex flex-col items-center justify-center">
          <h1 className="text-center text-black text-2xl">
            If You Came Here Accidentally
          </h1>
          <Link
            className=" mt-3 portfolio-gradient-text text-lg underline"
            href="/"
          >
            Return Home
          </Link>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
