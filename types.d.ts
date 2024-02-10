type Status = 'Todo' | 'Doing' | 'Done';

interface Board {
	id: number;
	title: string;
	description: string;
}

interface Column {
	id: number;
	title: string;
	boardId: number;
}

interface Subtask {
	id: number;
	title: string;
	status: 'Incomplete' | 'Complete';
}

interface Task {
	id: number;
	title: string;
	description: string;
	columnId: number;
	boardId: number;
	status: 'Todo' | 'Doing' | 'Done';
	subtasks: Subtask[];
}

interface ProjectManagementData {
	boards: Board[];
	columns: Column[];
	tasks: Task[];
}
