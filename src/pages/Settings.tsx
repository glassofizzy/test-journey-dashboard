
import { useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, MessageSquare, User, Award, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Settings = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100; // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <h1 className="text-3xl font-heading font-bold mb-8">Account Settings</h1>
      
      <Tabs defaultValue="account" className="w-full mb-8">
        <TabsList className="w-full justify-start bg-[#f2f0ef] p-1 border border-black">
          <TabsTrigger
            value="account"
            onClick={() => scrollToSection('account')}
            className="flex items-center gap-2 data-[state=active]:bg-accent data-[state=active]:text-white"
          >
            <User className="w-4 h-4" />
            Account
          </TabsTrigger>
          <TabsTrigger
            value="billing"
            onClick={() => scrollToSection('billing')}
            className="flex items-center gap-2 data-[state=active]:bg-accent data-[state=active]:text-white"
          >
            <CreditCard className="w-4 h-4" />
            Billing
          </TabsTrigger>
          <TabsTrigger
            value="support"
            onClick={() => scrollToSection('support')}
            className="flex items-center gap-2 data-[state=active]:bg-accent data-[state=active]:text-white"
          >
            <MessageSquare className="w-4 h-4" />
            Support
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="space-y-16">
        <section id="account" className="bg-white border border-black p-8 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
          <h2 className="text-2xl font-heading font-semibold mb-6 flex items-center gap-2">
            <User className="w-5 h-5" />
            Account
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-8">
              <Avatar className="w-24 h-24">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold mb-2">Profile Photo</h3>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="border-black hover:bg-accent hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-4px] hover:translate-y-[-4px]"
                  >
                    Upload new photo
                  </Button>
                  <Button
                    variant="outline"
                    className="border-black text-accent hover:bg-accent hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-4px] hover:translate-y-[-4px]"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Login Information</h3>
                <div className="grid gap-4">
                  <div className="bg-[#f2f0ef] p-4 border border-black">
                    <div className="text-sm text-gray-500">Email</div>
                    <div>john.doe@example.com</div>
                  </div>
                  <Button 
                    className="w-fit border border-black bg-black text-white hover:bg-accent hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-4px] hover:translate-y-[-4px]"
                  >
                    Change password
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Organization</h3>
                <div className="bg-[#f2f0ef] p-4 border border-black">
                  <div className="text-sm text-gray-500">Company Name</div>
                  <div>Acme Corp</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Community & Rewards</h3>
                <div className="grid gap-4">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-black text-accent hover:bg-accent hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-4px] hover:translate-y-[-4px]"
                  >
                    <Award className="mr-2 h-4 w-4" />
                    Feedback & Earn
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-black text-accent hover:bg-accent hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-4px] hover:translate-y-[-4px]"
                  >
                    <UserPlus className="mr-2 h-4 w-4" />
                    Refer & Earn
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="billing" className="bg-white border border-black p-8 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
          <h2 className="text-2xl font-heading font-semibold mb-6 flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Billing
          </h2>
          
          <div className="space-y-4">
            <p className="text-gray-600">Manage your subscription and see your payment history on Stripe</p>
            <Button 
              className="border border-black bg-black text-white hover:bg-accent hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-4px] hover:translate-y-[-4px]"
            >
              Go to Stripe
            </Button>
          </div>
        </section>

        <section id="support" className="bg-white border border-black p-8 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
          <h2 className="text-2xl font-heading font-semibold mb-6 flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Support
          </h2>
          
          <div className="space-y-4">
            <p className="text-gray-600">Need help? Our support team is here to assist you.</p>
            <Button 
              className="border border-black bg-black text-white hover:bg-accent hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-4px] hover:translate-y-[-4px]"
            >
              Submit a ticket
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings;
