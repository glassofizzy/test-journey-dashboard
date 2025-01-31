import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    // TODO: Implement Google Sign In
    navigate('/');
  };

  const handleLinkedInSignIn = () => {
    // TODO: Implement LinkedIn Sign In
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#f2f0ef] flex">
      {/* Left side with content */}
      <div className="flex-1 p-8 flex flex-col justify-center max-w-xl">
        <h1 className="text-4xl font-bold mb-6 font-heading">
          Meet your new testing team: The CarbonCopies
        </h1>
        
        <p className="text-lg mb-8">
          Save 5 hours a week as CarbonCopies execute your boring repetitive test flows, and point out content, visual, localization bugs and more! Login to TRY FOR FREE.
        </p>

        <div className="space-y-4 w-full max-w-md">
          <Button
            onClick={handleGoogleSignIn}
            className="w-full bg-white text-black border-2 border-black hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[4px] hover:translate-y-[4px]"
          >
            Sign in with Google
          </Button>
          
          <Button
            onClick={handleLinkedInSignIn}
            className="w-full bg-[#0072b1] text-white border-2 border-black hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[4px] hover:translate-y-[4px]"
          >
            Sign in with LinkedIn
          </Button>

          <p className="text-sm text-gray-600 mt-4">
            By signing up, you agree to our terms, privacy policy, and the occasional email. No spam, just helpful updates.
          </p>
        </div>
      </div>

      {/* Right side with image grid */}
      <div className="flex-1 p-8 hidden lg:flex items-center">
        <div className="grid grid-cols-2 grid-rows-3 gap-10 w-full max-w-2xl mx-auto">
          <img 
            src="/lovable-uploads/0ca52954-3b2d-497c-ab3b-a5de9d4ff52e.png"
            alt="Illustration 1"
            className="w-full h-full object-contain p-4 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white"
          />
          <img 
            src="/lovable-uploads/9862242d-d83c-4095-b2b2-04c89dba9956.png"
            alt="Illustration 2"
            className="w-full h-full object-contain p-4 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white"
          />
          <img 
            src="/lovable-uploads/d6b1b52e-c1a6-4844-acca-c8e5ad8e9997.png"
            alt="Illustration 3"
            className="w-full h-full object-contain p-4 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white"
          />
          <img 
            src="/lovable-uploads/ffd56886-42e8-4465-aa45-90be3b02ab93.png"
            alt="Illustration 4"
            className="w-full h-full object-contain p-4 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white"
          />
          <img 
            src="/lovable-uploads/60771938-ea1f-4aef-bbff-2b2ac41bfcbe.png"
            alt="Illustration 5"
            className="w-full h-full object-contain p-4 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white"
          />
          <img 
            src="/lovable-uploads/af1088c0-0f9a-4127-88b0-8ffc95f532c1.png"
            alt="Illustration 6"
            className="w-full h-full object-contain p-4 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white"
          />
        </div>
      </div>
    </div>
  );
}