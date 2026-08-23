import React from 'react';
import type { LogEntry } from '../../types/log';
import styles from './LowRow.module.css';

interface LogRowProps {
	log: LogEntry;
}

export const LogRow: React.FC<LogRowProps> = ({ log }) => {
	const formattedDate = new Date(log.timestamp).toLocaleTimeString('es-ES', {
		hour12: false,
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	});

	return (
		<div className={styles.row}>
			<span className={styles.timestamp}>{formattedDate}</span>
			<div>
				<span className={styles.badge} data-level={log.level}>
					{log.level}
				</span>
			</div>
			<span className={styles.service}>{log.service}</span>
			<span className={styles.message} title={log.details || log.message}>
				{log.message}
			</span>
		</div>
	);
};
