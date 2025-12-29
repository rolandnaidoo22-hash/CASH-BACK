export interface ReceiptItem {
  name: string;
  price: number;
  discount?: number;
  isHealthy: boolean;
  isHealthyCare: boolean;
}

export interface Receipt {
  id: string;
  storeName: string;
  date: string;
  items: ReceiptItem[];
  total: number;
  healthyTotal: number;
  healthyCareTotal: number;
  estimatedRewards: number; 
  healthyRewards: number;   
  healthyCareRewards: number;
  moneyRewards: number;     
  milesRewards: number; 
  milesDayRewards: number; 
  healthyRate: number;
  healthyCareRate: number;
  moneyRate: number;
  milesRate: number; 
  category: string;
  imageUrl?: string;
}

export interface RewardSettings {
  healthyRate: number; 
  healthyCareRate: number;
  moneyRate: number;
  milesRate: number; 
}

export interface MerchantSettings {
  bankName: string;
  accountNumber: string;
  branchCode: string;
  payoutGateway: 'paystack' | 'stripe' | 'peach';
}
