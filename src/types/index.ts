
export type LogStatus = 'info' | 'warn' | 'error' | 'debug';

export interface LogEntry {
	id: string;
	timestamp: string;
	ip: string;
	process: string;
	status: LogStatus;
	header: string;
	assignedTo?: string;
	details?: Record<string, unknown>;
}

export interface User {
	id: string;
	name: string;
	email: string;
	avatar?: string;
	role: 'admin' | 'analyst' | 'viewer';
}

export interface AnalyticsData {
	statusCounts: Record<LogStatus, number>;
	processCounts: Record<string, number>;
	ipCounts: Record<string, number>;
}
