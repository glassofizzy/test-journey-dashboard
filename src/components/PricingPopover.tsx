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
      <DialogContent className="sm:max-w-[425px] bg-white p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex flex-col items-center space-y-8">
          <img 
            src="/lovable-uploads/176c0355-24e5-4fcc-b108-e52ed20d6987.png" 
            alt="Cool Character" 
            className="w-24 h-24 object-contain border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          />
          
          <h2 className="font-heading text-3xl font-black text-center leading-tight">
            Ain't got time for manual testing?
          </h2>
          
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 font-mono text-xl">
              <span className="line-through text-gray-500">$29.99</span>
              <span className="text-3xl font-black">$19.99</span>
              <span className="text-lg">/month</span>
            </div>
          </div>
          
          <div className="text-center font-mono">
            <p className="mb-2">14 test flows per month, $1 per test flow thereafter.</p>
            <a href="#" className="text-accent hover:underline font-medium">See plan details</a>
          </div>
          
          <button 
            className="w-full py-4 px-6 border-2 border-black bg-accent text-white text-lg font-heading font-bold transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px]"
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