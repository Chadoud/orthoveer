/**
 * Health monitoring for API requests.
 */

interface HealthMetrics {
  totalRequests: number;
  successfulRequests: number;
  failedRequests: number;
  averageLatency: number;
}

class HealthMonitor {
  private metrics: HealthMetrics = {
    totalRequests: 0,
    successfulRequests: 0,
    failedRequests: 0,
    averageLatency: 0,
  };

  private latencies: number[] = [];
  private readonly MAX_LATENCIES = 100;

  recordRequest(latency: number, success: boolean): void {
    this.metrics.totalRequests++;
    if (success) {
      this.metrics.successfulRequests++;
    } else {
      this.metrics.failedRequests++;
    }

    this.latencies.push(latency);
    if (this.latencies.length > this.MAX_LATENCIES) {
      this.latencies.shift();
    }

    this.metrics.averageLatency =
      this.latencies.reduce((a, b) => a + b, 0) / this.latencies.length;
  }

  getThrottlingFactor(): number {
    const errorRate = this.metrics.failedRequests / this.metrics.totalRequests;
    if (errorRate > 0.5 || this.metrics.averageLatency > 2000) {
      return 0.5;
    }
    if (errorRate > 0.3 || this.metrics.averageLatency > 1000) {
      return 0.75;
    }
    return 1.0;
  }

  getMetrics(): HealthMetrics {
    return { ...this.metrics };
  }
}

export const healthMonitor = new HealthMonitor();

