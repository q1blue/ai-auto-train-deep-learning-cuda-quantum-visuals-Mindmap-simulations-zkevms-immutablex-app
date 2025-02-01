import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Stats } from './components/Stats';
import { QuantumVisualizer } from './components/QuantumVisualizer';
import { Documentation } from './components/Documentation';
import { Settings } from './components/Settings';
import { Share2, Download } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'docs' | 'settings'>('dashboard');

  const renderContent = () => {
    switch (currentView) {
      case 'docs':
        return <Documentation />;
      case 'settings':
        return <Settings />;
      default:
        return (
          <>
            <Stats />
            <div className="mt-8 grid grid-cols-1 gap-6">
              <QuantumVisualizer />
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar onNavigate={(view) => setCurrentView(view as any)} />
      
      <main className="lg:pl-64">
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-8 sm:flex sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">
                {currentView === 'dashboard' ? 'Quantum Dashboard' : 
                 currentView === 'docs' ? 'Documentation' : 'Settings'}
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                {currentView === 'dashboard' ? 'Monitor quantum simulations and mindmap visualizations in real-time' :
                 currentView === 'docs' ? 'Learn how to integrate and use the Quantum Dashboard' :
                 'Configure your quantum simulation preferences'}
              </p>
            </div>
            {currentView === 'dashboard' && (
              <div className="mt-3 flex sm:mt-0 sm:ml-4">
                <button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </button>
                <button className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                  <Download className="mr-2 h-4 w-4" />
                  Export Data
                </button>
              </div>
            )}
          </div>

          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;