module.exports = {
	boards: [
		{
			id: 1,
			title: 'Project Alpha',
		},
		{
			id: 2,
			title: 'Project Beta',
		},
	],
	columns: [
		{ id: 1, title: 'Todo', boardId: 1 },
		{ id: 2, title: 'Doing', boardId: 1 },
		{ id: 3, title: 'Done', boardId: 1 },
		{ id: 4, title: 'Todo', boardId: 2 },
		{ id: 5, title: 'Doing', boardId: 2 },
		{ id: 6, title: 'Done', boardId: 2 },
	],
	tasks: [
		{
			id: 1,
			title: 'Build UI for onboarding flow',
			description: 'Complete the user interface for the onboarding flow',
			columnId: 1,
			boardId: 1,
			status: 'Todo',
			subtasks: [
				{ id: 1, title: 'Design login page', status: 'Incomplete' },
				{ id: 2, title: 'Implement authentication', status: 'Incomplete' },
				{ id: 3, title: 'Create user profile setup', status: 'Incomplete' },
			],
		},
		{
			id: 2,
			title: 'Build UI for search',
			description: 'Develop the search interface',
			columnId: 1,
			boardId: 1,
			status: 'Todo',
			subtasks: [
				{ id: 4, title: 'Design search page', status: 'Incomplete' },
				{ id: 5, title: 'Implement search logic', status: 'Incomplete' },
			],
		},
	],
};
