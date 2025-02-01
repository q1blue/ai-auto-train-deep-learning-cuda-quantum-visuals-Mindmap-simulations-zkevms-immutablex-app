import { z } from 'zod';

// API Types
export const QuantumStateSchema = z.object({
  coherence: z.number(),
  stability: z.number(),
  performance: z.number(),
  timestamp: z.string(),
});

export type QuantumState = z.infer<typeof QuantumStateSchema>;

// API Client
class QuantumAPI {
  private baseUrl: string;
  
  constructor(baseUrl = '/api') {
    this.baseUrl = baseUrl;
  }

  async getQuantumState(): Promise<QuantumState> {
    const response = await fetch(`${this.baseUrl}/quantum/state`);
    const data = await response.json();
    return QuantumStateSchema.parse(data);
  }

  async updateQuantumState(state: Partial<QuantumState>): Promise<QuantumState> {
    const response = await fetch(`${this.baseUrl}/quantum/state`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state),
    });
    const data = await response.json();
    return QuantumStateSchema.parse(data);
  }
}

export const api = new QuantumAPI();