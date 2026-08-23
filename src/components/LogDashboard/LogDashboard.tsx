import React, { useState, useMemo } from 'react';
import type { LogEntry, LogLevel } from '../../types/log';
import { LogRow } from '../LogRow/LowRow';
import mockLogsData from '../../services/mockdata.json'; // Import directo
import styles from './LogDashboard.module.css';

type FilterLevel = LogLevel | 'ALL';

export const LogDashboard: React.FC = () => {
	// Inicializamos directamente con los datos
	const [logs] = useState<LogEntry[]>(mockLogsData as LogEntry[]);
	const [searchQuery, setSearchQuery] = useState('');
	const [levelFilter, setLevelFilter] = useState<FilterLevel>('ALL');

	const filteredLogs = useMemo(() => {
		return logs.filter((log) => {
			const matchesLevel = levelFilter === 'ALL' || log.level === levelFilter;
			const query = searchQuery.trim().toLowerCase();

			const matchesQuery =
				query === '' ||
				log.message.toLowerCase().includes(query) ||
				log.service.toLowerCase().includes(query);

			return matchesLevel && matchesQuery;
		});
	}, [logs, levelFilter, searchQuery]);


	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1 className={styles.title}>System Log Stream</h1>
				<div className={styles.controls}>
					<input
						type="text"
						placeholder="Search service or message..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className={styles.input}
					/>
					<select
						value={levelFilter}
						onChange={(e) => setLevelFilter(e.target.value)}
						className={styles.input}
					>
						<option value="ALL">All Levels</option>
						<option value="DEBUG">DEBUG</option>
						<option value="INFO">INFO</option>
						<option value="WARN">WARN</option>
						<option value="ERROR">ERROR</option>
					</select>
				</div>
			</header>
			<main className={styles.logWindow}>
				{filteredLogs.length > 0 ? (
					filteredLogs.map((log) => <LogRow key={log.id} log={log} />)
				) : (
					<div className={styles.empty}>No logs match the selected criteria.</div>
				)}
			</main>
		</div>
	);
};
