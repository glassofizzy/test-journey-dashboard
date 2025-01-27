import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    <div className="flex gap-6">
      {/* Left Section - Persona Details */}
      <div className="flex-1">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/lovable-uploads/71b75d86-0b81-4ba2-b7a6-cfc16a2005ec.png" />
              <AvatarFallback>MC</AvatarFallback>
            </Avatar>
            <CardTitle>Persona Details</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {Object.entries(personaDetails).map(([key, value]) => (
              <div key={key} className="grid gap-2">
                <Label htmlFor={key} className="capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </Label>
                <Input
                  id={key}
                  value={value}
                  onChange={handleInputChange(key as keyof PersonaDetail)}
                  className="border-black hover:border-accent focus:border-accent"
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Right Section - Test Flows */}
      <div className="flex-1">
        <Card>
          <CardHeader>
            <CardTitle>Test Flows</CardTitle>
          </CardHeader>
          <CardContent>
            {mockTestFlows.map((siteData, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold mb-2">{siteData.site}</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Flow Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {siteData.flows.map((flow, flowIndex) => (
                      <TableRow key={flowIndex}>
                        <TableCell>{flow.name}</TableCell>
                        <TableCell>{flow.status}</TableCell>
                        <TableCell>{flow.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}