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
      <DialogContent className="sm:max-w-[425px] bg-[#bb6bd9] p-8 rounded-2xl border-none relative">
        <div className="flex flex-col space-y-6">
          {/* Title */}
          <div className="text-left">
            <h2 className="font-heading text-4xl font-black leading-tight">
              Ain't got time for
              <br />
              Manual
              <br />
              Testing?
            </h2>
          </div>
          
          {/* Pricing Box */}
          <div className="bg-white p-6 rounded-xl relative shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)]">
            {/* Price */}
            <div className="flex items-baseline gap-2 mb-4">
              <span className="line-through text-gray-400 text-xl">$29.99</span>
              <span className="text-4xl font-black">$19.99/mo</span>
            </div>
            
            {/* Features */}
            <div className="space-y-2">
              <p className="text-xl font-semibold">14 test flows</p>
              <p className="text-lg">$1/test thereafter</p>
              <a href="#plans" className="text-black underline hover:text-gray-700 transition-colors">
                See plan details
              </a>
            </div>
            
            {/* Light Bulb Icon */}
            <div className="absolute -bottom-4 right-4">
              <img 
                src="/lovable-uploads/3f21e474-fc2e-4d5f-bc6b-5a59b5bb7e48.png" 
                alt="Light Bulb" 
                className="w-12 h-12"
              />
            </div>
          </div>
          
          {/* Subscribe Button */}
          <button 
            className="w-full py-4 px-6 bg-[#01a99d] text-white text-xl font-bold rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] transition-all hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            Subscribe Now
          </button>
          
          {/* Cancel Notice */}
          <p className="text-sm text-white text-center opacity-80">
            Cancel anytime before next payment date ({nextPaymentDate})
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}