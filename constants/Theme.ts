export interface Theme {
  background: string;
  surface: string;
  card: string;
  
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  
  border: string;
  
  accent: string;
  accentLight: string;
  
  success: string;
  error: string;
  warning: string;
  
  shadow: string;
}

export const lightTheme: Theme = {
  background: '#F8FAFC',
  surface: '#FFFFFF',
  card: '#F3F4F6',
  
  textPrimary: '#1F2937',
  textSecondary: '#374151',
  textTertiary: '#9CA3AF',
  
  border: '#E2E8F0',
  
  accent: '#B8860B',
  accentLight: '#F4E4BC',
  
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  
  shadow: '#000000',
};

export const darkTheme: Theme = {
  background: '#000000',
  surface: '#0A0A0A',
  card: '#1A1A1A',
  
  textPrimary: '#FFFFFF',
  textSecondary: '#E2E8F0',
  textTertiary: '#94A3B8',
  
  border: '#333333',
  
  accent: '#FFE81F',
  accentLight: '#FFD700',
  
  success: '#00FF41',
  error: '#FF0040',
  warning: '#FFE81F',
  
  shadow: '#000000',
};
