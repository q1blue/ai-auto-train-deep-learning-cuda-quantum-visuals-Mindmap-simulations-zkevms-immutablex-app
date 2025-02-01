import React from 'react';
import { Book, Code, Terminal } from 'lucide-react';

export function Documentation() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Documentation</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg p-4">
          <div className="flex items-center mb-4">
            <Book className="h-6 w-6 text-indigo-600 mr-2" />
            <h3 className="text-lg font-medium">Getting Started</h3>
          </div>
          <div className="prose prose-sm">
            <p>Learn how to integrate and use the Quantum Dashboard in your projects.</p>
            <ul className="mt-2 space-y-1">
              <li>Installation Guide</li>
              <li>Basic Concepts</li>
              <li>First Integration</li>
            </ul>
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <div className="flex items-center mb-4">
            <Code className="h-6 w-6 text-indigo-600 mr-2" />
            <h3 className="text-lg font-medium">API Reference</h3>
          </div>
          <div className="prose prose-sm">
            <p>Complete API documentation for quantum operations.</p>
            <pre className="bg-gray-50 p-2 rounded mt-2">
              <code>
                GET /api/quantum/state
                POST /api/quantum/simulate
              </code>
            </pre>
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <div className="flex items-center mb-4">
            <Terminal className="h-6 w-6 text-indigo-600 mr-2" />
            <h3 className="text-lg font-medium">SDK</h3>
          </div>
          <div className="prose prose-sm">
            <p>Use our SDK to integrate quantum features:</p>
            <pre className="bg-gray-50 p-2 rounded mt-2">
              <code>
                npm install @quantum/sdk
                yarn add @quantum/sdk
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}