import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { format, addMonths } from 'date-fns';

interface PricingPopoverProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PricingPopover({ isOpen, onClose }: PricingPopoverProps) {
  const nextPaymentDate = format(addMonths(new Date(), 1), 'MMMM dd, yyyy');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-[#bb6bd9] p-6 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex flex-col space-y-6">
          {/* Title */}
          <div className="bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-heading text-3xl font-black text-center">
              Ain't got time for manual testing?
            </h2>
          </div>
          
          {/* Pricing */}
          <div className="bg-black p-4 text-white flex items-baseline gap-2 justify-center border border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
            <span className="line-through text-gray-400 text-xl">$29.99</span>
            <span className="text-4xl font-black">$19.99</span>
            <span className="text-xl">/mo</span>
          </div>
          
          {/* Features */}
          <div className="space-y-2 text-white relative">
            <p className="text-xl font-semibold">14 test flows</p>
            <p className="text-lg">$1/test thereafter</p>
            <a href="#plans" className="text-white underline hover:text-yellow-200 transition-colors">
              See plan details
            </a>
            
            {/* Light Bulb Icon */}
            <div className="absolute right-0 top-0">
              <img 
                src="/lovable-uploads/02f204ec-e207-4f57-ae41-30448d1658b9.png" 
                alt="Light Bulb" 
                className="w-16 h-16"
              />
            </div>
          </div>
          
          {/* Subscribe Button */}
          <button 
            className="w-full py-4 px-6 bg-[#01a99d] text-white text-xl font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
          >
            Subscribe Now
          </button>
          
          {/* Cancel Notice */}
          <p className="text-sm text-white text-center">
            Cancel anytime before next payment date ({nextPaymentDate})
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}