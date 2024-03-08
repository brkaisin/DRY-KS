// Base class
class Logger {
  log(message: string): void {
    console.log(`Log: ${message}`);
  }
}

// Subclass that extends Logger and overrides the log method
class TimestampLogger extends Logger {
  log(message: string): void {
    const timestamp = new Date().toISOString();
    super.log(`${timestamp} - ${message}`); // Relies on specific behavior of Logger's log
  }
}

// Usage
const logger: TimestampLogger = new TimestampLogger();
logger.log("Hello, world!"); // Logs with timestamp


// Modified base class with a seemingly innocuous change
/*
class Logger {
  // Now expects a second parameter
  log(message: string, level: string = "info"): void {
    console.log(`[${level}] ${message}`);
  }
}
*/

// Resulting issue: The TimestampLogger's log method now behaves unexpectedly because it doesn't account for the new
// parameter in the base Logger's log method.
