import React, { useState } from 'react';
import TestRunRow from '@/components/TestRunRow';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const MOCK_DATA = [
  {
    id: '#123',
    name: 'Login, Add to Cart',
    status: 'Completed' as const,
    user: {
      name: 'Macy',
      type: 'New User'
    },
    createdAt: '8/31/2022',
    journey: ['Login', 'Browse', 'Add Item', 'Cart', 'Checkout'],
    mood: ['happy', 'neutral', 'happy', 'happy', 'happy'] as ('happy' | 'neutral' | 'sad')[],
    screenshots: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
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
    name: 'Request for Refund',
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
    name: 'Leave Customer Review',
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
    name: 'Purchase with stolen card',
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
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Test Run History</h1>
          <button className="px-4 py-2 bg-accent text-black border-2 border-black font-medium hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px]">
            New Test +
          </button>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {['All', 'Succeeded', 'Failed', 'Cancelled'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={cn(
                  "px-4 py-2 border-2 border-black font-medium transition-all duration-200",
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
              className="pl-10 pr-4 py-2 border-2 border-black bg-white w-[300px] focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>

        <div className="space-y-4">
          {/* Table Headers */}
          <div className="grid grid-cols-5 gap-4 p-4 bg-gray-100 border-2 border-black font-medium">
            <div>Test ID</div>
            <div>Name</div>
            <div>Status</div>
            <div>User</div>
            <div>Date</div>
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
