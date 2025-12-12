/**
 * Exercise 3: Resource Management (Medium)
 *
 * Create a DatabaseConnection class that uses static properties
 * to limit and track active database connections.
 *
 * See README.md for full requirements and example usage.
 */

// Your code here

class DatabaseConnection {
  public static maxConnections: number = 5;
  public static activeConnections: number = 0;
  public static connectionHistory: string[];

  public connectionId: string;
  public isActive: boolean = false;
  public connectedAt: Date;

  constructor(connectionId: string) {
    this.connectionId = connectionId;
    this.isActive = true;
    this.connectedAt = new Date();

    if (
      DatabaseConnection.activeConnections >= DatabaseConnection.maxConnections
    ) {
      throw new Error("Too many connections!");
    } else {
      DatabaseConnection.activeConnections++;
      DatabaseConnection.connectionHistory = [
        ...(DatabaseConnection.connectionHistory || []),
        connectionId,
      ];
      this.isActive = true;
    }
  }

  public disconnect() {
    DatabaseConnection.activeConnections--;
    this.isActive = false;
  }

  public reconnect() {
    if (
      DatabaseConnection.activeConnections >= DatabaseConnection.maxConnections
    ) {
      throw new Error("Too many connections!");
    } else {
      DatabaseConnection.activeConnections++;
      this.isActive = true;
    }
  }

  public static getStatus() {
    return `There are currently ${DatabaseConnection.activeConnections}
    active connections! There are ${DatabaseConnection.maxConnections} allowed connections!`;
  }

  public static canConnect() {
    if (
      DatabaseConnection.activeConnections >= DatabaseConnection.maxConnections
    ) {
      return false;
    } else {
      return true;
    }
  }

  public static getHistory() {
    return DatabaseConnection.connectionHistory;
  }
}

console.log(DatabaseConnection.canConnect());

const conn1 = new DatabaseConnection("conn-1");
const conn2 = new DatabaseConnection("conn-2");
const conn3 = new DatabaseConnection("conn-3");

console.log(DatabaseConnection.getStatus());

conn1.disconnect();

console.log(DatabaseConnection.getStatus());
