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
      <DialogContent className="sm:max-w-[425px] bg-[#f2f0ef] p-8">
        <div className="flex flex-col space-y-6">
          <h2 className="font-heading text-4xl font-black text-[#bb6bd9]">
            No time to waste
          </h2>
          
          <div className="bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="space-y-4">
              <p className="text-[#bb6bd9] font-heading italic">Dear you,</p>
              
              <h3 className="text-2xl font-heading font-bold leading-tight">
                Do yourself a favor. Let us do the heavy lifting.
              </h3>
              
              <div className="flex items-baseline gap-1 font-mono">
                <span className="line-through text-gray-500">$29.99</span>
                <span className="text-2xl font-black">USD$19.99</span>
                <span className="text-sm">/mo</span>
              </div>
              
              <div className="text-sm text-gray-600 font-mono">
                14 test flows per month, $1 per test flow thereafter.
              </div>
              
              <div>
                <a href="#plans" className="text-[#bb6bd9] hover:underline text-sm">
                  See plan details
                </a>
              </div>
              
              <div className="font-mono text-xs text-gray-500 italic text-right">
                with love from us,<br />
                Carboncopies
              </div>
            </div>
          </div>
          
          <button 
            className="w-full py-4 px-6 border-2 border-black bg-[#bb6bd9] text-white text-lg font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
          >
            Subscribe Now
          </button>
          
          <p className="text-sm text-gray-500 text-center font-mono">
            Cancel anytime before next payment date ({nextPaymentDate})
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}