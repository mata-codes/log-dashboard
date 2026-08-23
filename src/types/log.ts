export type LogLevel = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';

export interface LogEntry {
	id: string;
	timestamp: string;
	level: LogLevel;
	service: string;
	message: string;
	details?: string;
}
