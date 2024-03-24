import Link from "next/link";

export default function Login() {
  return (
    <main className="max-h-screen w-full mt-20 p-4 flex flex-col items-center justify-center">
      <div className="min-w-full xsl:min-w-[60vh] p-6 xsl:px-14 xsl:py-20 bg-blue-700 rounded-2xl">
          <div className="w-full h-full text-slate-200 flex flex-col gap-y-4">
            <h1 className="text-xl font-bold">Login</h1>
            <div className="flex flex-col gap-y-5 w-full">
              <div className="w-full ">
                <input type="email" 
                  placeholder="Enter your email address" 
                  className="w-full rounded-lg py-3 px-4"/>
              </div>
              <div>
                <input type="password" 
                  placeholder="Enter your password" 
                  className="w-full rounded-lg py-3 px-4"/>
              </div>
              <div className="flex justify-end -mt-4">
                <Link href={'/'}>Forgot password?</Link>
              </div>
            </div>
            <button className="w-full py-2 text-center font-bold bg-red-800 rounded-lg">
              Login
            </button>
            <span className="text-sm">
              Don't have an account? 
              <Link href={'/register'} className="pl-2 text-green-200">Signup</Link>
            </span>
          </div>
      </div>  
      <div className="bottom-0 left-0 w-full py-10 text-black px-10 bg-white">
        <p className="text-xs px-5 mb-3">
          By clicking "Create Account" above, you acknowledge that you have read and 
          understood and agree to <span className="font-bold px-1">PatientflowHQ's</span> 
          <Link href={'/'} className="underline px-1">Terms & Conditions</Link> and
          <Link href={'/'} className="underline px-1">Privacy Policy</Link>
        </p>
      </div>
    </main>
  );
}
