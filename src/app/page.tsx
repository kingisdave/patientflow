import Image from "next/image";
import UserIcon from "./icons/UserIcon";
import Footer from "./components/navigations/Footer";

export default function Landing() {
  return (
    <main className="min-h-screen w-full mt-10 flex flex-col items-center justify-center">
      <div className="w-full grid xsl:grid-cols-2 px-6 xsl:px-12 py-4">
        <div className="w-full h-full flex flex-col gap-y-5 py-5">
          <div className="pr-8">
            <h1 className="text-3xl">
              Better Admission Notes in Less Time
            </h1>
            <h6>
              Our Clinician built AI Platform enables comprehensive H&P
              Notes with billable diagnosis and case advisory in record time
            </h6>
          </div>
          <div className="flex gap-x-2">
            <button className="bg-red-800 text-white px-3 py-2">
              Try for free
            </button>
            <button className="border shadow-lg px-3 py-2">
              Schedule a demo
            </button>
          </div>
        </div>
        <div className="w-full h-full">
          <Image src="/home-page-patient-flow.png" 
            alt="homepage" 
            width={100} height={100} 
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="grid xsl:grid-cols-3 gap-y-4 gap-4 px-6 xsl:p-12 bg-blue-700">
        <div className="flex flex-col items-start gap-2 px-2">
          <span className="p-2 bg-red-500 text-white rounded-full">
            <UserIcon className="text-sm" />
          </span>
          <h5 className="text-lg font-bold">
            Decreased Physician Burnout and increase in Satisfaction and Retention
          </h5>
          <p className="text-sm text-slate-300">
            improving well-being and productivity by limiting unnecessary time spent
            documenting using our powerful clinician oriented natural language
            processing platform
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 px-2">
          <span className="p-2 bg-red-500 text-white rounded-full">
            <UserIcon className="text-sm" />
          </span>
          <h5 className="text-lg font-bold">
            Decreased Length of Stay and optimized resource utilization
          </h5>
          <p className="text-sm text-slate-300">
            Our productivity by limiting unnecessary time spent
            documenting using our powerful clinician oriented natural language
            processing platform
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 px-2">
          <span className="p-2 bg-red-500 text-white rounded-full">
            <UserIcon className="text-sm" />
          </span>
          <h5 className="text-lg font-bold">
            Better Reimbursement with optimized assessment and Diagnosis
          </h5>
          <p className="text-sm text-slate-300">
            Our integrated repository of productivity by limiting unnecessary time spent
            documenting using our powerful clinician oriented natural language
            processing platform
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
