import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

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
      { name: "NFT Purchase Flow", status: "Completed", date: "2024-02-20" },
      { name: "Collection Browse", status: "In Progress", date: "2024-02-21" }
    ]
  },
  {
    site: "Foundation.app",
    flows: [
      { name: "Artist Profile Review", status: "Completed", date: "2024-02-19" }
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

  const handleInputChange = (field: keyof PersonaDetail) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonaDetails(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <div className="flex gap-8 p-8 min-h-screen bg-background">
      {/* Left Profile Section */}
      <div className="w-1/3">
        <div className="space-y-6">
          <div className="text-center">
            <Avatar className="w-32 h-32 mx-auto mb-4">
              <AvatarImage src="/lovable-uploads/71b75d86-0b81-4ba2-b7a6-cfc16a2005ec.png" />
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

          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Persona Details</h3>
            {Object.entries(personaDetails).map(([key, value]) => (
              <div key={key} className="grid gap-2">
                <Label htmlFor={key} className="capitalize text-sm text-gray-600">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </Label>
                <Input
                  id={key}
                  value={value}
                  onChange={handleInputChange(key as keyof PersonaDetail)}
                  className="border-0 bg-transparent hover:bg-gray-50 focus:bg-white focus:ring-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Content Section */}
      <div className="flex-1">
        <div className="space-y-8">
          {mockTestFlows.map((siteData, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">{siteData.site}</h3>
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead>Flow Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {siteData.flows.map((flow, flowIndex) => (
                    <TableRow key={flowIndex} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{flow.name}</TableCell>
                      <TableCell>{flow.status}</TableCell>
                      <TableCell>{flow.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}