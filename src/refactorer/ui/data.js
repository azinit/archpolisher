
var userConfig = {
	"fixtures": "GH_FDD__SPEC",
	"strategy": "files",
	"analyzer": {
		"extensions": [
			"tsx",
			"ts",
			"jsx",
			"js"
		],
		"abstractnessDepth": 5
	},
	"clustering": {
		"neighNum": 1,
		"neighRadius": 0.06
	}
};
var issues = {
	"date": "2022-06-19T03:54:22.140Z",
	"strategy": "files",
	"description": "Some modules should be transferred, according to Instability & Abstractness modules clustering",
	"issues": [
		{
			"module": "features/repo-explorer/components/branches-menu/index.tsx",
			"similar": [
				".deploy/index.ts",
				".deploy/temp-stand.ts",
				"features/repo-explorer/index.ts",
				"features/auth/firebase/index.ts",
				"features/auth/firebase/init.ts",
				"features/error/index.ts"
			],
			"_cluster": 0
		},
		{
			"module": "features/repo-explorer/components/entries-view/last-commit-header.tsx",
			"similar": [
				".deploy/index.ts",
				".deploy/temp-stand.ts",
				"features/repo-explorer/index.ts",
				"features/auth/firebase/index.ts",
				"features/auth/firebase/init.ts",
				"features/error/index.ts"
			],
			"_cluster": 0
		},
		{
			"module": "shared/components/card/skeleton/index.tsx",
			"similar": [
				"app/header/hooks.ts",
				"app/hocs/with-antd.tsx",
				"app/hocs/with-router.tsx",
				"pages/helpers.ts",
				"shared/components/simple-pagination/index.tsx"
			],
			"_cluster": 1
		},
		{
			"module": "shared/components/tabs/item/index.tsx",
			"similar": [
				"app/header/hooks.ts",
				"app/hocs/with-antd.tsx",
				"app/hocs/with-router.tsx",
				"pages/helpers.ts",
				"shared/components/simple-pagination/index.tsx"
			],
			"_cluster": 1
		},
		{
			"module": "features/search/results/list/index.tsx",
			"similar": [
				"app/header/index.tsx",
				"app/hocs/with-error-handling.tsx",
				"app/index.tsx",
				"features/repo-list/pagination/index.tsx",
				"features/search/index.tsx",
				"pages/auth/index.tsx",
				"pages/repository/index.tsx",
				"pages/user/index.tsx",
				"app/hocs/index.ts",
				"features/repo-list/index.tsx",
				"features/repo-list/items/index.tsx",
				"features/repo-list/tabs/index.tsx",
				"features/search/filters/index.tsx",
				"features/search/results/index.tsx",
				"pages/error/index.tsx",
				"pages/index.tsx"
			],
			"_cluster": 2
		},
		{
			"module": "features/search/results/toolbar/sort-select.tsx",
			"similar": [
				"app/hocs/with-apollo.tsx",
				"pages/home/index.tsx",
				"pages/search/index.tsx",
				"shared/components/org/index.tsx",
				"shared/components/repo/index.tsx",
				"shared/components/user/index.tsx"
			],
			"_cluster": 3
		},
		{
			"module": "features/repo-details/card-collaborators/index.tsx",
			"similar": [
				"features/auth/firebase/auth-github.ts",
				"features/auth/user/index.tsx",
				"features/error/helpers.ts",
				"features/repo-explorer/components/entries-view/git-file-view.tsx",
				"features/repo-explorer/components/hooks.ts",
				"features/repo-explorer/components/readme/index.tsx",
				"features/repo-explorer/hooks.ts",
				"features/user-info/index.tsx"
			],
			"_cluster": 5
		},
		{
			"module": "features/repo-details/details-card/index.tsx",
			"similar": [
				"features/auth/types.ts",
				"features/repo-explorer/components/readme/code-renderer.tsx",
				"features/repo-explorer/components/skeleton-area/index.tsx",
				"features/repo-explorer/components/toolbar/clone-menu.tsx",
				"models.ts"
			],
			"_cluster": 8
		},
		{
			"module": "features/repo-explorer/components/toolbar/index.tsx",
			"similar": [
				"features/error/catcher.tsx",
				"features/repo-details/card-common/index.tsx",
				"features/repo-details/index.tsx",
				"features/user-info/hooks.ts"
			],
			"_cluster": 9
		},
		{
			"module": "features/hero-sheet/index.tsx",
			"similar": [
				"models.gen.ts",
				"serviceWorker.ts",
				"shared/get-env/index.ts",
				"shared/helpers/alert.ts",
				"shared/helpers/compose.ts",
				"shared/helpers/dom.ts",
				"shared/helpers/string.ts",
				"shared/hooks/use-debounce.ts",
				"shared/hooks/use-local-storage.ts",
				"shared/hooks/use-previous.ts"
			],
			"_cluster": 10
		},
		{
			"module": "features/origin/index.tsx",
			"similar": [
				"models.gen.ts",
				"serviceWorker.ts",
				"shared/get-env/index.ts",
				"shared/helpers/alert.ts",
				"shared/helpers/compose.ts",
				"shared/helpers/dom.ts",
				"shared/helpers/string.ts",
				"shared/hooks/use-debounce.ts",
				"shared/hooks/use-local-storage.ts",
				"shared/hooks/use-previous.ts"
			],
			"_cluster": 10
		},
		{
			"module": "shared/components/card/skeleton-group/index.tsx",
			"similar": [
				"features/repo-list/hooks.ts",
				"features/search/results/pagination/index.tsx",
				"features/search/results/toolbar/index.tsx",
				"shared/components/repo/lang.tsx"
			],
			"_cluster": 12
		},
		{
			"module": "shared/components/card/index.tsx",
			"similar": [
				"features/repo-list/params.ts",
				"features/search/hooks.ts",
				"features/search/results/queries.gen.ts"
			],
			"_cluster": 13
		},
		{
			"module": "shared/components/tabs/index.tsx",
			"similar": [
				"features/repo-list/params.ts",
				"features/search/hooks.ts",
				"features/search/results/queries.gen.ts"
			],
			"_cluster": 13
		}
	],
	"noise": []
};
var datasets = [
	{
		"label": "Noise",
		"backgroundColor": "gray",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [],
		"data": []
	},
	{
		"label": "Group#1",
		"backgroundColor": "#B6D0E2",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#B6D0E2",
			"#B6D0E2",
			"#953553",
			"#953553",
			"#B6D0E2",
			"#B6D0E2",
			"#B6D0E2",
			"#B6D0E2"
		],
		"data": [
			{
				"x": 0.52,
				"y": 0.87,
				"label": ".deploy/index.ts"
			},
			{
				"x": 0.52,
				"y": 0.87,
				"label": ".deploy/temp-stand.ts"
			},
			{
				"x": 0.55,
				"y": 0.9,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.55,
				"y": 0.9,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.53,
				"y": 0.88,
				"label": "features/repo-explorer/index.ts"
			},
			{
				"x": 0.54,
				"y": 0.9400000000000001,
				"label": "features/auth/firebase"
			},
			{
				"x": 0.54,
				"y": 0.9400000000000001,
				"label": "features/auth/firebase"
			},
			{
				"x": 0.53,
				"y": 0.93,
				"label": "features/error/index.ts"
			}
		]
	},
	{
		"label": "Group#2",
		"backgroundColor": "#A7C7E7",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#A7C7E7",
			"#A7C7E7",
			"#A7C7E7",
			"#A7C7E7",
			"#953553",
			"#A7C7E7",
			"#953553"
		],
		"data": [
			{
				"x": 0.03,
				"y": 0.03,
				"label": "app/header/hooks.ts"
			},
			{
				"x": 0.03,
				"y": 0.03,
				"label": "app/hocs/with-antd.tsx"
			},
			{
				"x": 0.03,
				"y": 0.03,
				"label": "app/hocs/with-router.tsx"
			},
			{
				"x": 0.02,
				"y": 0.02,
				"label": "pages/helpers.ts"
			},
			{
				"x": 0.05,
				"y": 0.05,
				"label": "shared/components/card"
			},
			{
				"x": 0.04,
				"y": 0.04,
				"label": "shared/components/simple-pagination"
			},
			{
				"x": 0.05,
				"y": 0.05,
				"label": "shared/components/tabs"
			}
		]
	},
	{
		"label": "Group#3",
		"backgroundColor": "#7393B3",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#7393B3",
			"#7393B3",
			"#7393B3",
			"#7393B3",
			"#7393B3",
			"#7393B3",
			"#7393B3",
			"#7393B3",
			"#7393B3",
			"#7393B3",
			"#7393B3",
			"#7393B3",
			"#7393B3",
			"#953553",
			"#7393B3",
			"#7393B3",
			"#953553"
		],
		"data": [
			{
				"x": 0.78,
				"y": 0.03,
				"label": "app/header/index.tsx"
			},
			{
				"x": 0.8300000000000001,
				"y": 0.03,
				"label": "app/hocs/with-error-handling.tsx"
			},
			{
				"x": 0.77,
				"y": 0.02,
				"label": "app/index.tsx"
			},
			{
				"x": 0.79,
				"y": 0.04,
				"label": "features/repo-list/pagination"
			},
			{
				"x": 0.78,
				"y": 0.03,
				"label": "features/search/index.tsx"
			},
			{
				"x": 0.78,
				"y": 0.03,
				"label": "pages/auth/index.tsx"
			},
			{
				"x": 0.8300000000000001,
				"y": 0.03,
				"label": "pages/repository/index.tsx"
			},
			{
				"x": 0.78,
				"y": 0.03,
				"label": "pages/user/index.tsx"
			},
			{
				"x": 0.8633333333333334,
				"y": 0.03,
				"label": "app/hocs/index.ts"
			},
			{
				"x": 0.8633333333333334,
				"y": 0.03,
				"label": "features/repo-list/index.tsx"
			},
			{
				"x": 0.8733333333333334,
				"y": 0.04,
				"label": "features/repo-list/items"
			},
			{
				"x": 0.8400000000000001,
				"y": 0.04,
				"label": "features/repo-list/tabs"
			},
			{
				"x": 0.8400000000000001,
				"y": 0.04,
				"label": "features/search/filters"
			},
			{
				"x": 0.8733333333333334,
				"y": 0.04,
				"label": "features/search/results"
			},
			{
				"x": 0.8633333333333334,
				"y": 0.03,
				"label": "pages/error/index.tsx"
			},
			{
				"x": 0.9088888888888889,
				"y": 0.02,
				"label": "pages/index.tsx"
			},
			{
				"x": 0.925,
				"y": 0.05,
				"label": "features/search/results"
			}
		]
	},
	{
		"label": "Group#4",
		"backgroundColor": "#4682B4",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#4682B4",
			"#953553",
			"#4682B4",
			"#4682B4",
			"#4682B4",
			"#4682B4",
			"#4682B4"
		],
		"data": [
			{
				"x": 0.6966666666666667,
				"y": 0.03,
				"label": "app/hocs/with-apollo.tsx"
			},
			{
				"x": 0.7166666666666667,
				"y": 0.05,
				"label": "features/search/results"
			},
			{
				"x": 0.6966666666666667,
				"y": 0.03,
				"label": "pages/home/index.tsx"
			},
			{
				"x": 0.6966666666666667,
				"y": 0.03,
				"label": "pages/search/index.tsx"
			},
			{
				"x": 0.7066666666666667,
				"y": 0.04,
				"label": "shared/components/org"
			},
			{
				"x": 0.64,
				"y": 0.04,
				"label": "shared/components/repo"
			},
			{
				"x": 0.7066666666666667,
				"y": 0.04,
				"label": "shared/components/user"
			}
		]
	},
	{
		"label": "Group#5",
		"backgroundColor": "#6082B6",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#6082B6",
			"#6082B6",
			"#6082B6",
			"#953553",
			"#953553",
			"#953553",
			"#953553",
			"#6082B6",
			"#6082B6"
		],
		"data": [
			{
				"x": 0.7066666666666667,
				"y": 0.9400000000000001,
				"label": "features/auth/firebase"
			},
			{
				"x": 0.7066666666666667,
				"y": 0.9400000000000001,
				"label": "features/auth/user"
			},
			{
				"x": 0.6966666666666667,
				"y": 0.93,
				"label": "features/error/helpers.ts"
			},
			{
				"x": 0.7066666666666667,
				"y": 0.9400000000000001,
				"label": "features/repo-details/card-collaborators"
			},
			{
				"x": 0.7166666666666667,
				"y": 0.9,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.7066666666666667,
				"y": 0.89,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.7166666666666667,
				"y": 0.9,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.6966666666666667,
				"y": 0.88,
				"label": "features/repo-explorer/hooks.ts"
			},
			{
				"x": 0.6966666666666667,
				"y": 0.88,
				"label": "features/user-info/index.tsx"
			}
		]
	},
	{
		"label": "Group#6",
		"backgroundColor": "#6495ED",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#6495ED",
			"#953553",
			"#953553",
			"#953553",
			"#953553",
			"#6495ED"
		],
		"data": [
			{
				"x": 0.03,
				"y": 0.93,
				"label": "features/auth/types.ts"
			},
			{
				"x": 0.04,
				"y": 0.9400000000000001,
				"label": "features/repo-details/details-card"
			},
			{
				"x": 0.05,
				"y": 0.9,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.05,
				"y": 0.9,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.05,
				"y": 0.9,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.048461538461538466,
				"y": 0.96,
				"label": "models.ts"
			}
		]
	},
	{
		"label": "Group#7",
		"backgroundColor": "#0096FF",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#0096FF",
			"#0096FF",
			"#0096FF",
			"#953553",
			"#0096FF"
		],
		"data": [
			{
				"x": 0.78,
				"y": 0.93,
				"label": "features/error/catcher.tsx"
			},
			{
				"x": 0.79,
				"y": 0.9400000000000001,
				"label": "features/repo-details/card-common"
			},
			{
				"x": 0.8300000000000001,
				"y": 0.93,
				"label": "features/repo-details/index.tsx"
			},
			{
				"x": 0.8,
				"y": 0.9,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.78,
				"y": 0.88,
				"label": "features/user-info/hooks.ts"
			}
		]
	},
	{
		"label": "Group#8",
		"backgroundColor": "#1434A4",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#953553",
			"#953553",
			"#1434A4",
			"#1434A4",
			"#1434A4",
			"#1434A4",
			"#1434A4",
			"#1434A4",
			"#1434A4",
			"#1434A4",
			"#1434A4",
			"#1434A4"
		],
		"data": [
			{
				"x": 0.03,
				"y": 1.03,
				"label": "features/hero-sheet/index.tsx"
			},
			{
				"x": 0.03,
				"y": 1.03,
				"label": "features/origin/index.tsx"
			},
			{
				"x": 0.01,
				"y": 1.01,
				"label": "models.gen.ts"
			},
			{
				"x": 0.01,
				"y": 1.01,
				"label": "serviceWorker.ts"
			},
			{
				"x": 0.03,
				"y": 1.03,
				"label": "shared/get-env/index.ts"
			},
			{
				"x": 0.03,
				"y": 1.03,
				"label": "shared/helpers/alert.ts"
			},
			{
				"x": 0.03,
				"y": 1.03,
				"label": "shared/helpers/compose.ts"
			},
			{
				"x": 0.03,
				"y": 1.03,
				"label": "shared/helpers/dom.ts"
			},
			{
				"x": 0.03,
				"y": 1.03,
				"label": "shared/helpers/string.ts"
			},
			{
				"x": 0.03,
				"y": 1.03,
				"label": "shared/hooks/use-debounce.ts"
			},
			{
				"x": 0.03,
				"y": 1.03,
				"label": "shared/hooks/use-local-storage.ts"
			},
			{
				"x": 0.03,
				"y": 1.03,
				"label": "shared/hooks/use-previous.ts"
			}
		]
	},
	{
		"label": "Group#9",
		"backgroundColor": "#3F00FF",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#3F00FF",
			"#953553",
			"#953553",
			"#953553",
			"#3F00FF"
		],
		"data": [
			{
				"x": 0.53,
				"y": 0.03,
				"label": "features/repo-list/hooks.ts"
			},
			{
				"x": 0.55,
				"y": 0.05,
				"label": "features/search/results"
			},
			{
				"x": 0.55,
				"y": 0.05,
				"label": "features/search/results"
			},
			{
				"x": 0.55,
				"y": 0.05,
				"label": "shared/components/card"
			},
			{
				"x": 0.54,
				"y": 0.04,
				"label": "shared/components/repo"
			}
		]
	},
	{
		"label": "Group#10",
		"backgroundColor": "#000080",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#000080",
			"#000080",
			"#953553",
			"#953553",
			"#953553"
		],
		"data": [
			{
				"x": 0.3633333333333333,
				"y": 0.03,
				"label": "features/repo-list/params.ts"
			},
			{
				"x": 0.3157142857142857,
				"y": 0.03,
				"label": "features/search/hooks.ts"
			},
			{
				"x": 0.3733333333333333,
				"y": 0.04,
				"label": "features/search/results"
			},
			{
				"x": 0.3257142857142857,
				"y": 0.04,
				"label": "shared/components/card"
			},
			{
				"x": 0.3733333333333333,
				"y": 0.04,
				"label": "shared/components/tabs"
			}
		]
	}
];
var files = [
	".deploy/index.ts",
	".deploy/temp-stand.ts",
	"app/header/hooks.ts",
	"app/header/index.tsx",
	"app/hocs/index.ts",
	"app/hocs/with-antd.tsx",
	"app/hocs/with-apollo.tsx",
	"app/hocs/with-error-handling.tsx",
	"app/hocs/with-router.tsx",
	"app/index.tsx",
	"features/auth/consts.ts",
	"features/auth/firebase/auth-github.ts",
	"features/auth/firebase/index.ts",
	"features/auth/firebase/init.ts",
	"features/auth/hooks.ts",
	"features/auth/index.ts",
	"features/auth/types.ts",
	"features/auth/user/index.tsx",
	"features/error/catcher.tsx",
	"features/error/definitions.ts",
	"features/error/helpers.ts",
	"features/error/index.ts",
	"features/hero-sheet/index.tsx",
	"features/origin/index.tsx",
	"features/repo-details/card-collaborators/index.tsx",
	"features/repo-details/card-common/index.tsx",
	"features/repo-details/details-card/index.tsx",
	"features/repo-details/index.tsx",
	"features/repo-details/queries.gen.ts",
	"features/repo-explorer/components/branches-menu/index.tsx",
	"features/repo-explorer/components/entries-view/git-file-view.tsx",
	"features/repo-explorer/components/entries-view/index.tsx",
	"features/repo-explorer/components/entries-view/last-commit-header.tsx",
	"features/repo-explorer/components/hooks.ts",
	"features/repo-explorer/components/index.tsx",
	"features/repo-explorer/components/readme/code-renderer.tsx",
	"features/repo-explorer/components/readme/index.tsx",
	"features/repo-explorer/components/skeleton-area/index.tsx",
	"features/repo-explorer/components/toolbar/clone-menu.tsx",
	"features/repo-explorer/components/toolbar/index.tsx",
	"features/repo-explorer/hooks.ts",
	"features/repo-explorer/index.ts",
	"features/repo-explorer/queries.gen.ts",
	"features/repo-list/hooks.ts",
	"features/repo-list/index.tsx",
	"features/repo-list/items/index.tsx",
	"features/repo-list/pagination/index.tsx",
	"features/repo-list/params.ts",
	"features/repo-list/queries.gen.ts",
	"features/repo-list/tabs/index.tsx",
	"features/search/filters/index.tsx",
	"features/search/hooks.ts",
	"features/search/index.tsx",
	"features/search/params.ts",
	"features/search/results/index.tsx",
	"features/search/results/list/index.tsx",
	"features/search/results/pagination/index.tsx",
	"features/search/results/queries.gen.ts",
	"features/search/results/toolbar/index.tsx",
	"features/search/results/toolbar/sort-select.tsx",
	"features/user-info/hooks.ts",
	"features/user-info/index.tsx",
	"features/user-info/queries.gen.ts",
	"index.tsx",
	"models.gen.ts",
	"models.ts",
	"pages/auth/index.tsx",
	"pages/error/index.tsx",
	"pages/helpers.ts",
	"pages/home/index.tsx",
	"pages/index.tsx",
	"pages/repository/index.tsx",
	"pages/search/index.tsx",
	"pages/user/index.tsx",
	"serviceWorker.ts",
	"shared/components/card/index.tsx",
	"shared/components/card/skeleton-group/index.tsx",
	"shared/components/card/skeleton/index.tsx",
	"shared/components/org/index.tsx",
	"shared/components/repo/index.tsx",
	"shared/components/repo/lang.tsx",
	"shared/components/simple-pagination/index.tsx",
	"shared/components/tabs/index.tsx",
	"shared/components/tabs/item/index.tsx",
	"shared/components/user/index.tsx",
	"shared/get-env/index.ts",
	"shared/helpers/alert.ts",
	"shared/helpers/compose.ts",
	"shared/helpers/dom.ts",
	"shared/helpers/index.ts",
	"shared/helpers/string.ts",
	"shared/hooks/index.ts",
	"shared/hooks/use-debounce.ts",
	"shared/hooks/use-local-storage.ts",
	"shared/hooks/use-previous.ts"
];
var modules = [
	".deploy",
	"app",
	"features/auth",
	"features/error",
	"features/hero-sheet",
	"features/origin",
	"features/repo-details",
	"features/repo-explorer",
	"features/repo-list",
	"features/search",
	"features/user-info",
	"index.tsx",
	"models.gen.ts",
	"models.ts",
	"pages",
	"serviceWorker.ts",
	"shared/components/card",
	"shared/components/org",
	"shared/components/repo",
	"shared/components/simple-pagination",
	"shared/components/tabs",
	"shared/components/user",
	"shared/get-env",
	"shared/helpers",
	"shared/hooks"
];
    