import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Ticket {
  id: string;
  title: string;
  testId: string;
  url: string;
}

interface TicketsCreatedProps {
  tickets: Ticket[];
}

const TicketsCreated = ({ tickets }: TicketsCreatedProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border border-black">
      <h2 className="text-2xl font-bold mb-4">Tickets created (beta)</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Ticket ID</TableHead>
            <TableHead>Ticket title</TableHead>
            <TableHead>Test ID</TableHead>
            <TableHead>Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tickets.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell>{ticket.id}</TableCell>
              <TableCell>{ticket.title}</TableCell>
              <TableCell>{ticket.testId}</TableCell>
              <TableCell>
                <Link to={ticket.url} className="text-accent hover:underline">
                  View Ticket
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TicketsCreated;