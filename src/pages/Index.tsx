
import React, { useState } from 'react';
import TestRunRow from '@/components/TestRunRow';
import { Search, ArrowUpDown, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

const MOCK_DATA = [
  {
    id: '#123',
    name: 'Login, Browse',
    status: 'Completed' as const,
    user: {
      name: 'Macy',
      type: 'New User'
    },
    createdAt: '8/31/2022',
    journey: ['Login', 'Search', 'Input Nvidia', 'View Company'],
    mood: ['happy', 'neutral', 'happy', 'happy'] as ('happy' | 'neutral' | 'sad')[],
    screenshots: [
      '/lovable-uploads/571e44cb-b445-44ba-beef-e394f707c5ee.png',
      '/lovable-uploads/01a0367f-ee54-4e21-8cd8-ad28f1b6b74c.png',
      '/lovable-uploads/4a7d5d9d-ec3d-4d46-9a66-74b07f37c107.png',
      '/lovable-uploads/7799e137-5232-4b50-b8e7-f6cb29ff944e.png'
    ]
  },
  {
    id: '#124',
    name: 'Change Profile',
    status: 'In Progress' as const,
    user: {
      name: 'Macy',
      type: 'New User'
    },
    createdAt: '8/31/2022',
    journey: ['Profile', 'Edit', 'Save'],
    mood: ['neutral', 'neutral', 'happy'] as ('happy' | 'neutral' | 'sad')[]
  },
  {
    id: '#125',
    name: 'Request to withdraw cash',
    status: 'In Progress' as const,
    user: {
      name: 'Macy',
      type: 'New User'
    },
    createdAt: '8/31/2022',
    journey: ['Orders', 'Details', 'Refund Form', 'Submit'],
    mood: ['neutral', 'sad', 'neutral', 'happy'] as ('happy' | 'neutral' | 'sad')[]
  },
  {
    id: '#126',
    name: 'File a Support Ticket',
    status: 'Cancelled' as const,
    user: {
      name: 'Macy',
      type: 'New User'
    },
    createdAt: '8/31/2022',
    journey: ['Product', 'Reviews', 'Write Review'],
    mood: ['happy', 'happy', 'neutral'] as ('happy' | 'neutral' | 'sad')[]
  },
  {
    id: '#127',
    name: 'Fraudulent Deposit',
    status: 'In Progress' as const,
    user: {
      name: 'Macy',
      type: 'New User'
    },
    createdAt: '8/31/2022',
    journey: ['Cart', 'Checkout', 'Payment', 'Error'],
    mood: ['neutral', 'neutral', 'sad', 'sad'] as ('happy' | 'neutral' | 'sad')[]
  }
];

const Index = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'All' | 'Succeeded' | 'Failed' | 'Cancelled'>('All');

  const filteredData = MOCK_DATA.filter(test => {
    const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         test.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'All') return matchesSearch;
    if (filter === 'Succeeded') return matchesSearch && test.status === 'Completed';
    if (filter === 'Failed') return matchesSearch && test.status === 'In Progress';
    if (filter === 'Cancelled') return matchesSearch && test.status === 'Cancelled';
    
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Test Run History</h1>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-black font-medium hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px]">
              <Filter size={20} />
              All Filters
            </button>
            {['All', 'Succeeded', 'Failed', 'Cancelled'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={cn(
                  "px-4 py-2 border border-black font-medium transition-all duration-200",
                  filter === f ? "bg-black text-white" : "bg-white text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px]"
                )}
              >
                {f}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search tests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-black bg-white w-[300px] focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>

        <div className="bg-white border border-black">
          <div className="grid grid-cols-5 gap-4 p-4 bg-white border-b border-black font-medium">
            <div className="flex items-center gap-2 cursor-pointer hover:text-accent">
              Test ID
              <ArrowUpDown size={16} />
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-accent">
              Name
              <ArrowUpDown size={16} />
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-accent">
              Status
              <ArrowUpDown size={16} />
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-accent">
              User
              <ArrowUpDown size={16} />
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-accent">
              Date
              <ArrowUpDown size={16} />
            </div>
          </div>
          
          {filteredData.map((testRun) => (
            <TestRunRow
              key={testRun.id}
              testRun={testRun}
              isExpanded={expandedId === testRun.id}
              onToggle={() => setExpandedId(expandedId === testRun.id ? null : testRun.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;

