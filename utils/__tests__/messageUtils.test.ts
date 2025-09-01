import { 
  calculateExpiryTime, 
  getTimeRemaining, 
  formatTimeRemaining, 
  isMessageExpired,
  shouldShowTimer,
  getTimerColor 
} from '../messageUtils';
import { DisappearTimer } from '../../types/message';

describe('Message Utils', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('calculateExpiryTime', () => {
    it('should calculate correct expiry time for 5 minutes', () => {
      const now = new Date('2023-01-01T12:00:00Z');
      jest.setSystemTime(now);
      
      const expiryTime = calculateExpiryTime(5);
      const expectedTime = new Date('2023-01-01T12:05:00Z');
      
      expect(expiryTime).toEqual(expectedTime);
    });

    it('should calculate correct expiry time for 1 hour', () => {
      const now = new Date('2023-01-01T12:00:00Z');
      jest.setSystemTime(now);
      
      const expiryTime = calculateExpiryTime(60);
      const expectedTime = new Date('2023-01-01T13:00:00Z');
      
      expect(expiryTime).toEqual(expectedTime);
    });
  });

  describe('getTimeRemaining', () => {
    it('should return correct time remaining', () => {
      const now = new Date('2023-01-01T12:00:00Z');
      const expiryTime = new Date('2023-01-01T12:05:00Z');
      jest.setSystemTime(now);
      
      const remaining = getTimeRemaining(expiryTime);
      expect(remaining).toBe(300); // 5 minutes in seconds
    });

    it('should return 0 for expired messages', () => {
      const now = new Date('2023-01-01T12:10:00Z');
      const expiryTime = new Date('2023-01-01T12:05:00Z');
      jest.setSystemTime(now);
      
      const remaining = getTimeRemaining(expiryTime);
      expect(remaining).toBe(0);
    });
  });

  describe('formatTimeRemaining', () => {
    it('should format seconds correctly', () => {
      expect(formatTimeRemaining(30)).toBe('30s');
    });

    it('should format minutes correctly', () => {
      expect(formatTimeRemaining(90)).toBe('1m 30s');
    });

    it('should format hours correctly', () => {
      expect(formatTimeRemaining(3661)).toBe('1h 1m');
    });

    it('should format days correctly', () => {
      expect(formatTimeRemaining(172800)).toBe('2d 0h');
    });

    it('should return "Expired" for zero or negative time', () => {
      expect(formatTimeRemaining(0)).toBe('Expired');
      expect(formatTimeRemaining(-10)).toBe('Expired');
    });
  });

  describe('getTimerColor', () => {
    it('should return red for last minute', () => {
      expect(getTimerColor(30)).toBe('#F44336');
      expect(getTimerColor(60)).toBe('#F44336');
    });

    it('should return orange for last 5 minutes', () => {
      expect(getTimerColor(180)).toBe('#FF9800');
      expect(getTimerColor(300)).toBe('#FF9800');
    });

    it('should return green for normal time', () => {
      expect(getTimerColor(600)).toBe('#4CAF50');
      expect(getTimerColor(3600)).toBe('#4CAF50');
    });
  });
});
