import Link from "next/link";

export default function Register() {
  return (
    <main className="min-h-screen w-full mt-10 p-4 flex flex-col items-center justify-center">
      <div className="max-w-[70vh] mb-20 p-6 xsl:px-10 xsl:py-10 bg-blue-700 rounded-2xl">
          <div className="w-full h-full text-slate-200 flex flex-col gap-y-4">
            <h1 className="text-xl font-bold">Create an Account with PatientflowHQ</h1>
            <div className="text-sm">
              <span>Write Better Notes and Organize Your patient care Work-flow</span>
              <span>Enter Details below to <span className="text-green-200">Signup</span></span>
            </div>
            <div className="flex flex-col gap-y-5 w-full">
              <div className="w-full grid xsl:grid-cols-2 gap-3">
                <div className="w-full">
                  <input type="text" 
                    placeholder="First Name *" 
                    className="w-full rounded-lg py-3 px-4"/>
                </div>
                <div className="w-full ">
                  <input type="text" 
                    placeholder="Last Name *" 
                    className="w-full rounded-lg py-3 px-4"/>
                </div>
              </div>
              <div className="w-full">
                <input type="email" 
                  placeholder="Enter your email address *" 
                  className="w-full rounded-lg py-3 px-4"/>
              </div>
              <div className="w-full ">
                <input type="text" 
                  placeholder="Clinical Role *" 
                  className="w-full rounded-lg py-3 px-4"/>
              </div>
              <div className="w-full">
                <input type="text" 
                  placeholder="Title " 
                  className="w-full rounded-lg py-3 px-4"/>
              </div>
              <div className="w-full bg-slate-200 h-px"></div>
              <div>
                <input type="password" 
                  placeholder="Password *" 
                  className="w-full rounded-lg py-3 px-4"/>
              </div>
              <div>
                <input type="password" 
                  placeholder="Confirm Password *" 
                  className="w-full rounded-lg py-3 px-4"/>
              </div>
            </div>
            <div className="flex items-start">
              <input type="checkbox" name="terms" value="terms" className="mt-2" />
              <span className="text-sm ml-2"> I agree to PatientflowHQ
                <Link href={'/'} className="text-green-200 px-1">Terms & Conditions</Link> and
                <Link href={'/'} className="text-green-200 px-1">Privacy Policy</Link>
              </span>
            </div>
            <div className="flex items-start">
              <input type="checkbox" name="attest" value="attest" className="mt-2" />
              <span className="text-sm ml-2"> I attest that I am a clinician and or Clinical 
                Team Member and I attest that PatientflowHQ is not responsible for use
                without clinician oversight.
              </span>
            </div>
            <button className="w-full py-2 text-center font-bold bg-red-800 rounded-lg">
              Create a PatientflowHQ Account
            </button>
            
          </div>
      </div>  
      <div className="fixed bottom-0 left-0 py-10 text-black px-10 bg-white">
        <p className="text-xs px-5">
          By clicking "Create Account" above, you acknowledge that you have read and 
          understood and agree to <span className="font-bold px-1">PatientflowHQ's</span> 
          <Link href={'/'} className="underline px-1">Terms & Conditions</Link> and
          <Link href={'/'} className="underline px-1">Privacy Policy</Link>
        </p>
      </div>
    </main>
  );
}
