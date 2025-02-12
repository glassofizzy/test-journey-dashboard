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
    <div className="h-screen bg-[#f2f0ef] flex">
      {/* Left side with content */}
      <div className="flex-1 px-8 flex flex-col justify-center max-w-xl">
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

      {/* Right side with full-length image */}
      <div className="flex-1 hidden lg:block">
        <img 
          src="/lovable-uploads/e9b9a90e-a7c3-4588-965e-8114437db0fb.png"
          alt="CarbonCopies Features"
          className="h-screen w-full object-cover border-l-2 border-black"
        />
      </div>
    </div>
  );
}