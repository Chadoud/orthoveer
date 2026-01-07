/**
 * Circuit breaker pattern for API requests.
 */

enum CircuitState {
  CLOSED = "closed",
  OPEN = "open",
  HALF_OPEN = "half-open",
}

interface CircuitBreakerConfig {
  failureThreshold: number;
  recoveryTimeout: number;
}

class CircuitBreaker {
  private state = CircuitState.CLOSED;
  private failures = 0;
  private lastFailureTime = 0;
  private config: CircuitBreakerConfig;

  constructor(config: CircuitBreakerConfig = { failureThreshold: 5, recoveryTimeout: 60000 }) {
    this.config = config;
  }

  async execute<T>(fn: () => Promise<T>): Promise<T> {
    if (this.state === CircuitState.OPEN) {
      if (Date.now() - this.lastFailureTime > this.config.recoveryTimeout) {
        this.state = CircuitState.HALF_OPEN;
      } else {
        throw new Error("Circuit breaker is OPEN");
      }
    }

    try {
      const result = await fn();
      if (this.state === CircuitState.HALF_OPEN) {
        this.state = CircuitState.CLOSED;
        this.failures = 0;
      }
      return result;
    } catch (error) {
      this.failures++;
      this.lastFailureTime = Date.now();

      if (this.failures >= this.config.failureThreshold) {
        this.state = CircuitState.OPEN;
      }

      throw error;
    }
  }
}

class CircuitBreakerManager {
  private breakers = new Map<string, CircuitBreaker>();

  getBreaker(endpoint: string): CircuitBreaker {
    if (!this.breakers.has(endpoint)) {
      this.breakers.set(endpoint, new CircuitBreaker());
    }
    return this.breakers.get(endpoint)!;
  }
}

export const circuitBreakerManager = new CircuitBreakerManager();

