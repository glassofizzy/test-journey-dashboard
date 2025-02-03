import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import StatusBadge from "@/components/test-run/StatusBadge";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users } from "lucide-react";

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
  language?: string;
  role?: string;
}

const mockTestFlows = [
  {
    site: "Robinhood.com",
    flows: [
      { id: "1", name: "Login, Browse", status: "Completed", date: "2024-02-20" },
      { id: "2", name: "Request to withdraw cash", status: "In Progress", date: "2024-02-21" }
    ]
  }
];

const personas = [
  { id: "macy", name: "Macy" },
  { id: "jordan", name: "Jordan" }
];

const personaData = {
  macy: {
    name: "Macy",
    age: "32",
    socioEcon: "Upper-middle",
    primaryDevice: "Mobile iOS",
    city: "San Francisco",
    currency: "USD",
    digitalExp: "Native",
    frequentedApps: "Reddit, Coinbase, X, TechCrunch",
    username: "macy@ccmail.com",
    password: "*******",
    paymentMethod: "Credit Card",
    paymentDetail: "[Token]",
    language: "English",
    traits: "An experienced finance professional looking to maximize investment strategies and diversify their portfolio. Macy utilizes Robinhood for its advanced trading features and easy account linking."
  },
  jordan: {
    name: "Jordan",
    age: "20",
    socioEcon: "Middle",
    primaryDevice: "Desktop Windows",
    city: "UK",
    currency: "GBP",
    digitalExp: "Native",
    frequentedApps: "Discord, Revolut, X",
    username: "jordan987@ccmail.com",
    password: "**********",
    paymentMethod: "Supp bank card",
    paymentDetail: "[Token]",
    language: "EN-BR",
    role: "Student",
    traits: "A tech savvy student, new to investments, eager to grow their financial knowledge and skills. Jordan uses Robinhood to manage their finances and investments through a user-friendly platform"
  }
};

export default function PersonaDetail() {
  const navigate = useNavigate();
  const [personaDetails, setPersonaDetails] = useState<PersonaDetail>(personaData.jordan);

  const handleInputChange = (field: keyof PersonaDetail) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPersonaDetails(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <div className="flex gap-8 p-8 min-h-screen bg-background">
      <div className="w-1/3 mt-12">
        <div className="space-y-6">
          <div className="mb-8">
            <Select
              defaultValue="jordan"
              onValueChange={(value) => {
                setPersonaDetails(personaData[value as keyof typeof personaData]);
                navigate(`/persona/${value}`);
              }}
            >
              <SelectTrigger className="w-[200px] border border-black bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>CarbonCopies:</span>
                </div>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {personas.map((persona) => (
                  <SelectItem 
                    key={persona.id} 
                    value={persona.id}
                    className="hover:bg-accent hover:text-white cursor-pointer"
                  >
                    {persona.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="text-center">
            <Avatar className="w-32 h-32 mx-auto mb-4 border border-black">
              <AvatarImage src={personaDetails.name === "Macy" ? "/lovable-uploads/cb242363-6fa4-4998-836f-628bec699bdb.png" : "/lovable-uploads/5f5724fb-14fd-4816-98cb-f834353b9ecf.png"} />
              <AvatarFallback>{personaDetails.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-heading font-semibold mb-2">{personaDetails.name}</h2>
            <p className="text-sm text-gray-600">{personaDetails.username}</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-2">About</h3>
            <p className="text-sm">
              {personaDetails.traits}{" "}
              <Sheet>
                <SheetTrigger className="text-accent hover:underline">See details</SheetTrigger>
                <SheetContent side="right" className="w-1/3 bg-[#f2f0ef] border-l border-black">
                  <div className="space-y-4">
                    <h3 className="text-xl font-heading font-semibold">Persona Details</h3>
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
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold mb-2">Skills & Preferences</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{personaDetails.primaryDevice}</Badge>
              <Badge variant="outline">{personaDetails.digitalExp}</Badge>
              <Badge variant="outline">{personaDetails.socioEcon}</Badge>
              {personaDetails.role && <Badge variant="outline">{personaDetails.role}</Badge>}
              {personaDetails.language && <Badge variant="outline">{personaDetails.language}</Badge>}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 mt-12">
        <div className="space-y-8">
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
    </div>
  );
}