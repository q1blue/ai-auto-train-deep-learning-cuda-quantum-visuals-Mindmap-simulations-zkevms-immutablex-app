import React from 'react';
import { Settings as SettingsIcon, Save, RefreshCw } from 'lucide-react';

export function Settings() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <SettingsIcon className="h-6 w-6 text-indigo-600 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-900">Settings</h2>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Performance</h3>
          <div className="space-y-4">
            <div>
              <label className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Auto-Optimization</span>
                <input type="checkbox" className="rounded text-indigo-600" defaultChecked />
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Update Frequency
              </label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                <option>Real-time</option>
                <option>Every 5 seconds</option>
                <option>Every minute</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Accessibility</h3>
          <div className="space-y-4">
            <div>
              <label className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">High Contrast Mode</span>
                <input type="checkbox" className="rounded text-indigo-600" />
              </label>
            </div>
            <div>
              <label className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Reduce Motion</span>
                <input type="checkbox" className="rounded text-indigo-600" />
              </label>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">System</h3>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset to Defaults
          </button>
        </div>
      </div>
    </div>
  );
}