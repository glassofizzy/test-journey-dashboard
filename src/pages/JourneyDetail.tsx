import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserRound } from 'lucide-react';

const JourneyDetail = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState("concerns");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="mb-6 text-sm font-medium hover:underline"
        >
          ← Back to Test Runs
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Mobile Preview */}
          <div className="space-y-6">
            <div className="bg-white border-2 border-black p-4 aspect-[9/16] rounded-3xl shadow-lg">
              <img 
                src="/lovable-uploads/f583cb41-075c-4d3a-8c96-e421a3b178aa.png" 
                alt="NFT Listing"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="flex justify-center">
              <Button
                variant="outline"
                className="border-2 border-black font-medium hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px]"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? 'Pause' : 'Play'}
              </Button>
            </div>
          </div>

          {/* Right Panel - Conversation */}
          <div className="space-y-6">
            <Tabs defaultValue="concerns" className="w-full">
              <TabsList className="w-full justify-start border-2 border-black bg-white mb-6">
                <TabsTrigger 
                  value="concerns"
                  className="data-[state=active]:bg-accent data-[state=active]:text-black"
                >
                  Concerns
                </TabsTrigger>
                <TabsTrigger 
                  value="improvements"
                  className="data-[state=active]:bg-accent data-[state=active]:text-black"
                >
                  UX Improvements
                </TabsTrigger>
                <TabsTrigger 
                  value="generated"
                  className="data-[state=active]:bg-accent data-[state=active]:text-black"
                >
                  Generated UI
                </TabsTrigger>
              </TabsList>

              <div className="space-y-4">
                <Card className="p-4 border-2 border-black">
                  <h3 className="font-heading font-bold mb-2">Goal</h3>
                  <p>Find the cheapest Bored Ape Yacht Club NFT with bunny ears</p>
                </Card>

                <Card className="p-4 border-2 border-black">
                  <h3 className="font-heading font-bold mb-2">Observations</h3>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <div className="size-8 rounded-full border-2 border-black bg-white flex items-center justify-center">
                        <UserRound className="size-5 stroke-[1.5]" />
                      </div>
                    </div>
                    <p>Now, the NFT results have bunny ears.</p>
                  </div>
                </Card>

                <Card className="p-4 border-2 border-black">
                  <h3 className="font-heading font-bold mb-2">Thoughts and concerns</h3>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <div className="size-8 rounded-full border-2 border-black bg-white flex items-center justify-center">
                        <UserRound className="size-5 stroke-[1.5]" />
                      </div>
                    </div>
                    <p>Need to sort the NFTs by price to find the cheapest one</p>
                  </div>
                </Card>

                <Card className="p-4 border-2 border-black">
                  <h3 className="font-heading font-bold mb-2">Actions</h3>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <div className="size-8 rounded-full border-2 border-black bg-white flex items-center justify-center">
                        <UserRound className="size-5 stroke-[1.5]" />
                      </div>
                    </div>
                    <p>
                      Tap on [031] to ensure the sorting is set to "Price: Low to High". 
                      Scroll through the results by swiping up to browse through other NFTs 
                      and compare prices
                    </p>
                  </div>
                </Card>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyDetail;