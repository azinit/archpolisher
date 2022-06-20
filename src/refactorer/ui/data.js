
var userConfig = {
	"fixtures": "GH_FDD",
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
		"neighRadius": 0.06,
		"spread": 0
	},
	"refactorer": {
		"minDist": 1,
		"minDiff": 4
	}
};
var issues = {
	"date": "2022-06-20T00:00:19.166Z",
	"strategy": "files",
	"description": "Some modules should be transferred, according to Instability & Abstractness modules clustering",
	"issues": [
		{
			"module": "features/search/results/queries.gen.ts",
			"similar": [
				"features/auth/consts.ts",
				"features/error/definitions.ts",
				"features/repo-details/queries.gen.ts",
				"features/repo-explorer/queries.gen.ts",
				"features/repo-list/queries.gen.ts",
				"features/search/hooks.ts",
				"features/search/params.ts",
				"features/repo-list/params.ts",
				"features/user-info/queries.gen.ts"
			],
			"_cluster": 6,
			"similarity": [
				0.8786881562134088,
				0.880050505050505
			]
		},
		{
			"module": "features/search/results/toolbar/sort-select.tsx",
			"similar": [
				"features/auth/firebase/auth-github.ts",
				"features/auth/user/index.tsx",
				"features/error/helpers.ts",
				"features/error/index.ts",
				"features/repo-details/card-collaborators/index.tsx",
				"features/repo-explorer/components/entries-view/git-file-view.tsx",
				"features/repo-explorer/components/hooks.ts",
				"features/repo-explorer/components/readme/index.tsx",
				"features/repo-explorer/hooks.ts",
				"features/user-info/index.tsx"
			],
			"_cluster": 7,
			"similarity": [
				0.787978510453258,
				0.880050505050505
			]
		},
		{
			"module": "features/search/results/pagination/index.tsx",
			"similar": [
				"features/auth/firebase/index.ts",
				"features/auth/firebase/init.ts",
				"features/index.ts",
				"features/repo-explorer/components/branches-menu/index.tsx",
				"features/repo-explorer/components/entries-view/last-commit-header.tsx",
				"features/repo-explorer/index.ts",
				"features/repo-list/hooks.ts",
				"features/repo-stat/queries.gen.ts"
			],
			"_cluster": 8,
			"similarity": [
				0.9546451771199245,
				0.880050505050505
			]
		},
		{
			"module": "features/search/results/toolbar/index.tsx",
			"similar": [
				"features/auth/firebase/index.ts",
				"features/auth/firebase/init.ts",
				"features/index.ts",
				"features/repo-explorer/components/branches-menu/index.tsx",
				"features/repo-explorer/components/entries-view/last-commit-header.tsx",
				"features/repo-explorer/index.ts",
				"features/repo-list/hooks.ts",
				"features/repo-stat/queries.gen.ts"
			],
			"_cluster": 8,
			"similarity": [
				0.9546451771199245,
				0.880050505050505
			]
		},
		{
			"module": "features/repo-explorer/components/entries-view/index.tsx",
			"similar": [
				"features/auth/index.ts",
				"features/error/catcher.tsx",
				"features/repo-details/card-common/index.tsx",
				"features/repo-details/index.tsx",
				"features/repo-explorer/components/index.tsx",
				"features/repo-list/index.tsx",
				"features/repo-list/items/index.tsx",
				"features/repo-list/pagination/index.tsx",
				"features/repo-list/tabs/index.tsx",
				"features/repo-stat/index.tsx",
				"features/search/filters/index.tsx",
				"features/search/index.tsx",
				"features/search/results/index.tsx",
				"features/user-info/hooks.ts"
			],
			"_cluster": 10,
			"similarity": [
				0.6213118437865912,
				0.880050505050505
			]
		},
		{
			"module": "features/repo-explorer/components/toolbar/index.tsx",
			"similar": [
				"features/auth/index.ts",
				"features/error/catcher.tsx",
				"features/repo-details/card-common/index.tsx",
				"features/repo-details/index.tsx",
				"features/repo-explorer/components/index.tsx",
				"features/repo-list/index.tsx",
				"features/repo-list/items/index.tsx",
				"features/repo-list/pagination/index.tsx",
				"features/repo-list/tabs/index.tsx",
				"features/repo-stat/index.tsx",
				"features/search/filters/index.tsx",
				"features/search/index.tsx",
				"features/search/results/index.tsx",
				"features/user-info/hooks.ts"
			],
			"_cluster": 10,
			"similarity": [
				0.7046451771199245,
				0.880050505050505
			]
		},
		{
			"module": "features/search/results/list/index.tsx",
			"similar": [
				"features/auth/index.ts",
				"features/error/catcher.tsx",
				"features/repo-details/card-common/index.tsx",
				"features/repo-details/index.tsx",
				"features/repo-explorer/components/index.tsx",
				"features/repo-list/index.tsx",
				"features/repo-list/items/index.tsx",
				"features/repo-list/pagination/index.tsx",
				"features/repo-list/tabs/index.tsx",
				"features/repo-stat/index.tsx",
				"features/search/filters/index.tsx",
				"features/search/index.tsx",
				"features/search/results/index.tsx",
				"features/user-info/hooks.ts"
			],
			"_cluster": 10,
			"similarity": [
				0.6546451771199244,
				0.880050505050505
			]
		},
		{
			"module": "features/repo-details/details-card/index.tsx",
			"similar": [
				"features/auth/types.ts",
				"features/hero-sheet/index.tsx",
				"features/origin/index.tsx",
				"features/repo-explorer/components/readme/code-renderer.tsx",
				"features/repo-explorer/components/skeleton-area/index.tsx",
				"features/repo-explorer/components/toolbar/clone-menu.tsx",
				"features/repo-stat/fixtures.tsx"
			],
			"_cluster": 11,
			"similarity": [
				0.5453548228800755,
				0.880050505050505
			]
		},
		{
			"module": "shared/get-env/index.ts",
			"similar": [
				"models.gen.ts",
				"serviceWorker.ts",
				"shared/helpers/alert.ts",
				"shared/helpers/compose.ts",
				"shared/helpers/dom.ts",
				"shared/helpers/string.ts",
				"shared/hooks/use-debounce.ts",
				"shared/hooks/use-local-storage.ts",
				"shared/hooks/use-previous.ts"
			],
			"_cluster": 12,
			"similarity": [
				0.5453548228800755,
				0.36994949494949503
			]
		},
		{
			"module": "shared/components/card/skeleton-group/index.tsx",
			"similar": [
				"shared/components/index.ts",
				"shared/components/repo/lang.tsx",
				"shared/components/tabs/index.tsx"
			],
			"_cluster": 19,
			"similarity": [
				0.9546451771199245,
				0.619949494949495
			]
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
			"#B6D0E2"
		],
		"data": [
			{
				"x": 1,
				"y": 0.125,
				"label": ".deploy/index.ts"
			}
		]
	},
	{
		"label": "Group#2",
		"backgroundColor": "#A7C7E7",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#A7C7E7"
		],
		"data": [
			{
				"x": 0.5,
				"y": 0.125,
				"label": ".deploy/temp-stand.ts"
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
			"#7393B3"
		],
		"data": [
			{
				"x": 0,
				"y": 0,
				"label": "app/header/hooks.ts"
			},
			{
				"x": 0,
				"y": 0,
				"label": "app/hocs/with-antd.tsx"
			},
			{
				"x": 0,
				"y": 0,
				"label": "app/hocs/with-router.tsx"
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
			"#4682B4",
			"#4682B4"
		],
		"data": [
			{
				"x": 0.75,
				"y": 0,
				"label": "app/header/index.tsx"
			},
			{
				"x": 0.8,
				"y": 0,
				"label": "app/hocs/with-error-handling.tsx"
			},
			{
				"x": 0.8333333333333334,
				"y": 0,
				"label": "app/hocs/index.ts"
			}
		]
	},
	{
		"label": "Group#5",
		"backgroundColor": "#6082B6",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#6082B6"
		],
		"data": [
			{
				"x": 0.6666666666666666,
				"y": 0,
				"label": "app/hocs/with-apollo.tsx"
			}
		]
	},
	{
		"label": "Group#6",
		"backgroundColor": "#6495ED",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#6495ED"
		],
		"data": [
			{
				"x": 1,
				"y": 0,
				"label": "app/index.tsx"
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
			"#0096FF",
			"#0096FF",
			"#0096FF",
			"#0096FF",
			"#0096FF",
			"#953553",
			"#0096FF"
		],
		"data": [
			{
				"x": 0.25,
				"y": 0.25,
				"label": "features/auth/consts.ts"
			},
			{
				"x": 0.25,
				"y": 0.25,
				"label": "features/error/definitions.ts"
			},
			{
				"x": 0.25,
				"y": 0.25,
				"label": "features/repo-details/queries.gen.ts"
			},
			{
				"x": 0.25,
				"y": 0.25,
				"label": "features/repo-explorer/queries.gen.ts"
			},
			{
				"x": 0.2,
				"y": 0.25,
				"label": "features/repo-list/queries.gen.ts"
			},
			{
				"x": 0.2857142857142857,
				"y": 0.25,
				"label": "features/search/hooks.ts"
			},
			{
				"x": 0.2,
				"y": 0.25,
				"label": "features/search/params.ts"
			},
			{
				"x": 0.3333333333333333,
				"y": 0.25,
				"label": "features/repo-list/params.ts"
			},
			{
				"x": 0.3333333333333333,
				"y": 0.25,
				"label": "features/search/results"
			},
			{
				"x": 0.3333333333333333,
				"y": 0.25,
				"label": "features/user-info/queries.gen.ts"
			}
		]
	},
	{
		"label": "Group#8",
		"backgroundColor": "#1434A4",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#1434A4",
			"#1434A4",
			"#1434A4",
			"#1434A4",
			"#1434A4",
			"#953553",
			"#953553",
			"#953553",
			"#1434A4",
			"#953553",
			"#1434A4"
		],
		"data": [
			{
				"x": 0.6666666666666666,
				"y": 0.25,
				"label": "features/auth/firebase"
			},
			{
				"x": 0.6666666666666666,
				"y": 0.25,
				"label": "features/auth/user"
			},
			{
				"x": 0.6666666666666666,
				"y": 0.25,
				"label": "features/error/helpers.ts"
			},
			{
				"x": 0.6666666666666666,
				"y": 0.25,
				"label": "features/error/index.ts"
			},
			{
				"x": 0.6666666666666666,
				"y": 0.25,
				"label": "features/repo-details/card-collaborators"
			},
			{
				"x": 0.6666666666666666,
				"y": 0.25,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.6666666666666666,
				"y": 0.25,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.6666666666666666,
				"y": 0.25,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.6666666666666666,
				"y": 0.25,
				"label": "features/repo-explorer/hooks.ts"
			},
			{
				"x": 0.6666666666666666,
				"y": 0.25,
				"label": "features/search/results"
			},
			{
				"x": 0.6666666666666666,
				"y": 0.25,
				"label": "features/user-info/index.tsx"
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
			"#3F00FF",
			"#3F00FF",
			"#953553",
			"#953553",
			"#3F00FF",
			"#3F00FF",
			"#3F00FF",
			"#953553",
			"#953553"
		],
		"data": [
			{
				"x": 0.5,
				"y": 0.25,
				"label": "features/auth/firebase"
			},
			{
				"x": 0.5,
				"y": 0.25,
				"label": "features/auth/firebase"
			},
			{
				"x": 0.47619047619047616,
				"y": 0.25,
				"label": "features/index.ts"
			},
			{
				"x": 0.5,
				"y": 0.25,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.5,
				"y": 0.25,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.5,
				"y": 0.25,
				"label": "features/repo-explorer/index.ts"
			},
			{
				"x": 0.5,
				"y": 0.25,
				"label": "features/repo-list/hooks.ts"
			},
			{
				"x": 0.5,
				"y": 0.25,
				"label": "features/repo-stat/queries.gen.ts"
			},
			{
				"x": 0.5,
				"y": 0.25,
				"label": "features/search/results"
			},
			{
				"x": 0.5,
				"y": 0.25,
				"label": "features/search/results"
			}
		]
	},
	{
		"label": "Group#10",
		"backgroundColor": "#000080",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#000080"
		],
		"data": [
			{
				"x": 0.6,
				"y": 0.25,
				"label": "features/auth/hooks.ts"
			}
		]
	},
	{
		"label": "Group#11",
		"backgroundColor": "#0437F2",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#0437F2",
			"#0437F2",
			"#0437F2",
			"#0437F2",
			"#953553",
			"#953553",
			"#953553",
			"#0437F2",
			"#0437F2",
			"#0437F2",
			"#0437F2",
			"#0437F2",
			"#0437F2",
			"#0437F2",
			"#953553",
			"#953553",
			"#0437F2"
		],
		"data": [
			{
				"x": 0.8,
				"y": 0.25,
				"label": "features/auth/index.ts"
			},
			{
				"x": 0.75,
				"y": 0.25,
				"label": "features/error/catcher.tsx"
			},
			{
				"x": 0.75,
				"y": 0.25,
				"label": "features/repo-details/card-common"
			},
			{
				"x": 0.8,
				"y": 0.25,
				"label": "features/repo-details/index.tsx"
			},
			{
				"x": 0.8333333333333334,
				"y": 0.25,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.8571428571428571,
				"y": 0.25,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.75,
				"y": 0.25,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.8333333333333334,
				"y": 0.25,
				"label": "features/repo-list/index.tsx"
			},
			{
				"x": 0.8,
				"y": 0.25,
				"label": "features/repo-list/items"
			},
			{
				"x": 0.75,
				"y": 0.25,
				"label": "features/repo-list/pagination"
			},
			{
				"x": 0.8,
				"y": 0.25,
				"label": "features/repo-list/tabs"
			},
			{
				"x": 0.75,
				"y": 0.25,
				"label": "features/repo-stat/index.tsx"
			},
			{
				"x": 0.8,
				"y": 0.25,
				"label": "features/search/filters"
			},
			{
				"x": 0.75,
				"y": 0.25,
				"label": "features/search/index.tsx"
			},
			{
				"x": 0.8333333333333334,
				"y": 0.25,
				"label": "features/search/results"
			},
			{
				"x": 0.8,
				"y": 0.25,
				"label": "features/search/results"
			},
			{
				"x": 0.75,
				"y": 0.25,
				"label": "features/user-info/hooks.ts"
			}
		]
	},
	{
		"label": "Group#12",
		"backgroundColor": "#0818A8",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#0818A8",
			"#0818A8",
			"#0818A8",
			"#953553",
			"#953553",
			"#953553",
			"#953553",
			"#0818A8"
		],
		"data": [
			{
				"x": 0,
				"y": 0.25,
				"label": "features/auth/types.ts"
			},
			{
				"x": 0,
				"y": 0.25,
				"label": "features/hero-sheet/index.tsx"
			},
			{
				"x": 0,
				"y": 0.25,
				"label": "features/origin/index.tsx"
			},
			{
				"x": 0,
				"y": 0.25,
				"label": "features/repo-details/details-card"
			},
			{
				"x": 0,
				"y": 0.25,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0,
				"y": 0.25,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0,
				"y": 0.25,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0,
				"y": 0.25,
				"label": "features/repo-stat/fixtures.tsx"
			}
		]
	},
	{
		"label": "Group#13",
		"backgroundColor": "#40B5AD",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#40B5AD",
			"#40B5AD",
			"#953553",
			"#40B5AD",
			"#40B5AD",
			"#40B5AD",
			"#40B5AD",
			"#40B5AD",
			"#40B5AD",
			"#40B5AD"
		],
		"data": [
			{
				"x": 0,
				"y": 1,
				"label": "models.gen.ts"
			},
			{
				"x": 0,
				"y": 1,
				"label": "serviceWorker.ts"
			},
			{
				"x": 0,
				"y": 1,
				"label": "shared/get-env/index.ts"
			},
			{
				"x": 0,
				"y": 1,
				"label": "shared/helpers/alert.ts"
			},
			{
				"x": 0,
				"y": 1,
				"label": "shared/helpers/compose.ts"
			},
			{
				"x": 0,
				"y": 1,
				"label": "shared/helpers/dom.ts"
			},
			{
				"x": 0,
				"y": 1,
				"label": "shared/helpers/string.ts"
			},
			{
				"x": 0,
				"y": 1,
				"label": "shared/hooks/use-debounce.ts"
			},
			{
				"x": 0,
				"y": 1,
				"label": "shared/hooks/use-local-storage.ts"
			},
			{
				"x": 0,
				"y": 1,
				"label": "shared/hooks/use-previous.ts"
			}
		]
	},
	{
		"label": "Group#14",
		"backgroundColor": "#008080",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#008080"
		],
		"data": [
			{
				"x": 0.037037037037037035,
				"y": 0.875,
				"label": "models.ts"
			}
		]
	},
	{
		"label": "Group#15",
		"backgroundColor": "#40E0D0",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#40E0D0",
			"#40E0D0",
			"#40E0D0"
		],
		"data": [
			{
				"x": 0.75,
				"y": 0.125,
				"label": "pages/auth/index.tsx"
			},
			{
				"x": 0.75,
				"y": 0.125,
				"label": "pages/error/index.tsx"
			},
			{
				"x": 0.75,
				"y": 0.125,
				"label": "pages/repository/index.tsx"
			}
		]
	},
	{
		"label": "Group#16",
		"backgroundColor": "#96DED1",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#96DED1"
		],
		"data": [
			{
				"x": 0,
				"y": 0.125,
				"label": "pages/helpers.ts"
			}
		]
	},
	{
		"label": "Group#17",
		"backgroundColor": "#00A36C",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#00A36C",
			"#00A36C",
			"#00A36C"
		],
		"data": [
			{
				"x": 0.6666666666666666,
				"y": 0.125,
				"label": "pages/home/index.tsx"
			},
			{
				"x": 0.6666666666666666,
				"y": 0.125,
				"label": "pages/search/index.tsx"
			},
			{
				"x": 0.6666666666666666,
				"y": 0.125,
				"label": "pages/user/index.tsx"
			}
		]
	},
	{
		"label": "Group#18",
		"backgroundColor": "#9FE2BF",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#9FE2BF"
		],
		"data": [
			{
				"x": 0.875,
				"y": 0.125,
				"label": "pages/index.tsx"
			}
		]
	},
	{
		"label": "Group#19",
		"backgroundColor": "#C1E1C1",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#953553"
		],
		"data": [
			{
				"x": 0.3333333333333333,
				"y": 0.75,
				"label": "shared/components/card"
			}
		]
	},
	{
		"label": "Group#20",
		"backgroundColor": "#ECFFDC",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#953553",
			"#ECFFDC",
			"#ECFFDC",
			"#ECFFDC"
		],
		"data": [
			{
				"x": 0.5,
				"y": 0.75,
				"label": "shared/components/card"
			},
			{
				"x": 0.5454545454545454,
				"y": 0.75,
				"label": "shared/components/index.ts"
			},
			{
				"x": 0.5,
				"y": 0.75,
				"label": "shared/components/repo"
			},
			{
				"x": 0.5,
				"y": 0.75,
				"label": "shared/components/tabs"
			}
		]
	},
	{
		"label": "Group#21",
		"backgroundColor": "#AFE1AF",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#953553",
			"#AFE1AF",
			"#AFE1AF"
		],
		"data": [
			{
				"x": 0,
				"y": 0.75,
				"label": "shared/components/card"
			},
			{
				"x": 0,
				"y": 0.75,
				"label": "shared/components/simple-pagination"
			},
			{
				"x": 0,
				"y": 0.75,
				"label": "shared/components/tabs"
			}
		]
	},
	{
		"label": "Group#22",
		"backgroundColor": "#90EE90",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#90EE90",
			"#90EE90"
		],
		"data": [
			{
				"x": 0.6666666666666666,
				"y": 0.75,
				"label": "shared/components/org"
			},
			{
				"x": 0.6666666666666666,
				"y": 0.75,
				"label": "shared/components/user"
			}
		]
	},
	{
		"label": "Group#23",
		"backgroundColor": "#98FB98",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#98FB98"
		],
		"data": [
			{
				"x": 0.75,
				"y": 0.75,
				"label": "shared/components/repo"
			}
		]
	},
	{
		"label": "Group#24",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			null
		],
		"data": [
			{
				"x": 0.3333333333333333,
				"y": 1,
				"label": "shared/helpers/index.ts"
			}
		]
	},
	{
		"label": "Group#25",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			null
		],
		"data": [
			{
				"x": 0.5,
				"y": 1,
				"label": "shared/hooks/index.ts"
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
	"features/index.ts",
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
	"features/repo-stat/fixtures.tsx",
	"features/repo-stat/index.tsx",
	"features/repo-stat/queries.gen.ts",
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
	"shared/components/index.ts",
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
	"features",
	"models.gen.ts",
	"models.ts",
	"pages",
	"serviceWorker.ts",
	"shared/components",
	"shared/get-env",
	"shared/helpers",
	"shared/hooks"
];
    