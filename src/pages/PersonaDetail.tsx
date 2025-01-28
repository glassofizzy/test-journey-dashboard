import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import StatusBadge from "@/components/test-run/StatusBadge";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PencilIcon } from "lucide-react";

interface PersonaDetail {
  name: string;
  age: string;
  socioEcon: string;
  primaryDevice: string;
  city: string;
  currency: string;
  digitalExp: string;
  frequentedApps: string;
  username: string;
  password: string;
  paymentMethod: string;
  paymentDetail: string;
  traits: string;
}

const mockTestFlows = [
  {
    site: "Opensea.com",
    flows: [
      { id: "1", name: "NFT Purchase Flow", status: "Completed", date: "2024-02-20" },
      { id: "2", name: "Collection Browse", status: "In Progress", date: "2024-02-21" }
    ]
  },
  {
    site: "Foundation.app",
    flows: [
      { id: "3", name: "Artist Profile Review", status: "Completed", date: "2024-02-19" }
    ]
  }
];

export default function PersonaDetail() {
  const [personaDetails, setPersonaDetails] = useState<PersonaDetail>({
    name: "Macy",
    age: "40",
    socioEcon: "High Income Earner",
    primaryDevice: "iOS Mobile",
    city: "Chicago",
    currency: "USD $",
    digitalExp: "Intermediate",
    frequentedApps: "Outlook, Calendly, Classpass",
    username: "macy@ccmail.com",
    password: "******************",
    paymentMethod: "Credit Card",
    paymentDetail: "[Token]",
    traits: "Macy is a crypto executive, who collects NFT from projects she is interested in."
  });

  const handleInputChange = (field: keyof PersonaDetail) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPersonaDetails(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <div className="flex gap-8 min-h-screen bg-background">
      {/* Main Profile Section */}
      <div className="w-full">
        <div className="space-y-6">
          <div className="text-center">
            <Avatar className="w-32 h-32 mx-auto mb-4">
              <AvatarImage src="/lovable-uploads/6f60b6fa-c815-4911-b84f-51dbc31b3e61.png" />
              <AvatarFallback>MC</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-heading font-semibold mb-2">{personaDetails.name}</h2>
            <p className="text-sm text-gray-600">{personaDetails.username}</p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold mb-2">About</h3>
            <p className="text-sm">{personaDetails.traits}</p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold mb-2">Skills & Preferences</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{personaDetails.primaryDevice}</Badge>
              <Badge variant="outline">{personaDetails.digitalExp}</Badge>
              <Badge variant="outline">{personaDetails.socioEcon}</Badge>
            </div>
          </div>

          {/* Test Flows Table */}
          <div className="space-y-8 mt-8">
            {mockTestFlows.map((siteData, index) => (
              <div key={index} className="bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border border-black">
                <div className="p-4 border-b border-black">
                  <h3 className="text-lg font-semibold">{siteData.site}</h3>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent border-b border-black">
                      <TableHead>Flow Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {siteData.flows.map((flow, flowIndex) => (
                      <TableRow 
                        key={flowIndex} 
                        className="hover:bg-gray-50 border-b border-black last:border-b-0"
                      >
                        <TableCell className="font-medium">
                          <Link to={`/journey/${flow.id}`} className="hover:text-accent">
                            {flow.name}
                          </Link>
                        </TableCell>
                        <TableCell>
                          <StatusBadge status={flow.status as 'Completed' | 'In Progress' | 'Cancelled'} />
                        </TableCell>
                        <TableCell>{flow.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ))}
          </div>
        </div>

        {/* Edit Details Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="fixed bottom-8 right-8 gap-2">
              <PencilIcon className="w-4 h-4" />
              Edit Details
            </Button>
          </SheetTrigger>
          <SheetContent className="w-1/3 min-w-[400px] bg-[#f2f0ef] border-l border-black">
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-semibold mb-4">Persona Details</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(personaDetails).map(([key, value]) => {
                  if (key === 'traits') {
                    return (
                      <div key={key} className="col-span-2">
                        <Label htmlFor={key} className="capitalize text-sm text-gray-600">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </Label>
                        <Textarea
                          id={key}
                          value={value}
                          onChange={handleInputChange(key as keyof PersonaDetail)}
                          className="mt-1 border-0 bg-transparent hover:bg-white hover:border hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:bg-white focus:border focus:border-black focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                        />
                      </div>
                    );
                  }
                  return (
                    <div key={key}>
                      <Label htmlFor={key} className="capitalize text-sm text-gray-600">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </Label>
                      <Input
                        id={key}
                        value={value}
                        onChange={handleInputChange(key as keyof PersonaDetail)}
                        className="mt-1 border-0 bg-transparent hover:bg-white hover:border hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:bg-white focus:border focus:border-black focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}