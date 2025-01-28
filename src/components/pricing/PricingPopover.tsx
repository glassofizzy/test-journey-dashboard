import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingPopoverProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
}

const PricingPopover = ({ isOpen, onOpenChange, trigger }: PricingPopoverProps) => {
  const nextMonth = new Date();
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  const formattedDate = nextMonth.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        {trigger || <Button>Open Pricing</Button>}
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-full sm:w-[540px] border-l border-black bg-[#f2f0ef]"
      >
        <div className="space-y-8 p-6">
          {/* Savings Offer Block */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-start gap-4">
              <img 
                src="/lovable-uploads/ee6b1dfa-71a8-4817-ae15-020f9083b5d4.png" 
                alt="Savings illustration" 
                className="w-24 h-24 object-contain"
              />
              <div>
                <h3 className="font-heading text-xl font-bold mb-2">Ready for some savings?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Ready to take our commitment to the next level? Switch to an annual plan to save up to 22% on your Groove account!
                </p>
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-600">Your savings per year</p>
                  <p className="text-3xl font-bold">$480</p>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  When you move from a monthly to annual plan you'll continue to get all the time-saving and productivity-enhancing benefits of Groove's Inbox and Knowledge Base at a better rate.
                </p>
                <Button 
                  className="w-full bg-accent hover:bg-accent/90"
                >
                  Upgrade me to annual
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-6">
            <h2 className="font-heading text-4xl font-bold">"I ain't got time for this"</h2>
            
            <div className="space-y-2">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold">$29.99</span>
                <span className="text-xl text-gray-600">per month</span>
              </div>
              <p className="text-gray-600">
                14 test flows per month, $1 per test flow thereafter.{" "}
                <a href="#" className="text-accent underline hover:text-accent/90">
                  See plan details
                </a>
              </p>
            </div>

            <Button 
              className={cn(
                "w-full bg-accent hover:bg-accent/90 text-white",
                "border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
                "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
                "transition-all duration-200"
              )}
            >
              Upgrade Now
            </Button>

            <p className="text-sm text-gray-600">
              Cancel anytime before next payment date ({formattedDate})
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default PricingPopover;