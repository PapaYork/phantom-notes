export interface Theme {
  // Background colors
  background: string;
  surface: string;
  card: string;
  
  // Text colors
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  
  // Border colors
  border: string;
  
  // Accent colors
  accent: string;
  accentLight: string;
  
  // Status colors
  success: string;
  error: string;
  warning: string;
  
  // Shadow colors
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
  
  // Subtle Star Wars yellow accent for light theme
  accent: '#B8860B',
  accentLight: '#F4E4BC',
  
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  
  shadow: '#000000',
};

export const darkTheme: Theme = {
  // Much darker backgrounds - true black and deep space colors
  background: '#000000',
  surface: '#0A0A0A',
  card: '#1A1A1A',
  
  // Normal, readable text colors for dark theme
  textPrimary: '#FFFFFF',
  textSecondary: '#E2E8F0',
  textTertiary: '#94A3B8',
  
  // Dark borders
  border: '#333333',
  
  // Star Wars yellow as the main accent
  accent: '#FFE81F',
  accentLight: '#FFD700',
  
  // Status colors with Star Wars theme
  success: '#00FF41',
  error: '#FF0040',
  warning: '#FFE81F',
  
  shadow: '#000000',
};
