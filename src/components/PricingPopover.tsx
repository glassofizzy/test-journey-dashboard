import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { format, addMonths } from 'date-fns';

interface PricingPopoverProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PricingPopover({ isOpen, onClose }: PricingPopoverProps) {
  const nextPaymentDate = format(addMonths(new Date(), 1), 'MMM dd, yyyy');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-[#ffc000] p-8 rounded-2xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="bg-[#bb6bd9] p-6 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-6">
          <div className="text-center space-y-1">
            <h2 className="font-heading text-3xl">
              Ain't got time for
            </h2>
            <h2 className="font-heading text-4xl font-black">
              Manual Testing?
            </h2>
          </div>
          
          <div className="bg-white p-6 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
            <div className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="line-through text-gray-500 font-heading">$29.99</span>
                <span className="text-3xl font-heading font-black">$19.99</span>
                <span className="text-sm">/mo</span>
              </div>
              
              <div className="space-y-1">
                <div className="text-base">14 test flows</div>
                <div className="text-base">$1/test thereafter</div>
                <div>
                  <a href="#plans" className="text-black underline hover:no-underline">
                    See plan details
                  </a>
                </div>
              </div>
            </div>
            
            <img 
              src="/lovable-uploads/8443863b-5636-4f71-82a1-e75f7a69e5ad.png"
              alt="Light bulb"
              className="absolute bottom-0 right-0 w-12 h-12 transform translate-x-2 translate-y-2"
            />
          </div>
          
          <button 
            className="w-full py-4 px-6 bg-[#01a99d] text-white text-xl font-heading rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
          >
            Subscribe Now
          </button>
          
          <p className="text-sm text-white text-center">
            Cancel anytime before next payment date ({nextPaymentDate})
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}