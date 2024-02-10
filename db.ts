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
		{ id: 1, title: 'Todo', board_id: 1 },
		{ id: 2, title: 'Doing', board_id: 1 },
		{ id: 3, title: 'Done', board_id: 1 },
		{ id: 4, title: 'Todo', board_id: 2 },
		{ id: 5, title: 'Doing', board_id: 2 },
		{ id: 6, title: 'Done', board_id: 2 },
	],
	tasks: [
		{
			id: 1,
			title: 'Build UI for onboarding flow',
			description: 'Complete the user interface for the onboarding flow',
			column_id: 1,
			board_id: 1,
			status: 'Todo',
		},
		{
			id: 2,
			title: 'Build UI for search',
			description: 'Develop the search interface',
			column_id: 1,
			board_id: 1,
			status: 'Todo',
		},
	],
};
