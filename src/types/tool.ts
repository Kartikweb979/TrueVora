export type VerificationStatus = 'verified' | 'caution' | 'flagged' | 'pending';

export type PricingChange = {
  date: string;
  description: string;
  type: 'positive' | 'negative' | 'neutral';
};

export type UsageLimit = {
  metric: string;
  limit: string;
  period: string;
};

export type Tool = {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  status: VerificationStatus;
  lastTested: string;
  requiresCreditCard: boolean;
  usageLimits: UsageLimit[];
  pricingHistory: PricingChange[];
  notes?: string;
  logoUrl?: string;
};
