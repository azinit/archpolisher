
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
	"date": "2022-06-19T02:36:11.719Z",
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
			]
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
			]
		},
		{
			"module": "shared/components/card/skeleton/index.tsx",
			"similar": [
				"app/header/hooks.ts",
				"app/hocs/with-antd.tsx",
				"app/hocs/with-router.tsx",
				"pages/helpers.ts",
				"shared/components/simple-pagination/index.tsx"
			]
		},
		{
			"module": "shared/components/tabs/item/index.tsx",
			"similar": [
				"app/header/hooks.ts",
				"app/hocs/with-antd.tsx",
				"app/hocs/with-router.tsx",
				"pages/helpers.ts",
				"shared/components/simple-pagination/index.tsx"
			]
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
			]
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
			]
		},
		{
			"module": "features/auth/consts.ts",
			"similar": []
		},
		{
			"module": "features/error/definitions.ts",
			"similar": []
		},
		{
			"module": "features/repo-details/queries.gen.ts",
			"similar": []
		},
		{
			"module": "features/repo-explorer/queries.gen.ts",
			"similar": []
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
			]
		},
		{
			"module": "features/auth/hooks.ts",
			"similar": []
		},
		{
			"module": "features/auth/index.ts",
			"similar": []
		},
		{
			"module": "features/repo-details/details-card/index.tsx",
			"similar": [
				"features/auth/types.ts",
				"features/repo-explorer/components/readme/code-renderer.tsx",
				"features/repo-explorer/components/skeleton-area/index.tsx",
				"features/repo-explorer/components/toolbar/clone-menu.tsx",
				"models.ts"
			]
		},
		{
			"module": "features/repo-explorer/components/toolbar/index.tsx",
			"similar": [
				"features/error/catcher.tsx",
				"features/repo-details/card-common/index.tsx",
				"features/repo-details/index.tsx",
				"features/user-info/hooks.ts"
			]
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
			]
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
			]
		},
		{
			"module": "features/repo-explorer/components/entries-view/index.tsx",
			"similar": []
		},
		{
			"module": "features/repo-explorer/components/index.tsx",
			"similar": []
		},
		{
			"module": "shared/components/card/skeleton-group/index.tsx",
			"similar": [
				"features/repo-list/hooks.ts",
				"features/search/results/pagination/index.tsx",
				"features/search/results/toolbar/index.tsx",
				"shared/components/repo/lang.tsx"
			]
		},
		{
			"module": "shared/components/card/index.tsx",
			"similar": [
				"features/repo-list/params.ts",
				"features/search/hooks.ts",
				"features/search/results/queries.gen.ts"
			]
		},
		{
			"module": "shared/components/tabs/index.tsx",
			"similar": [
				"features/repo-list/params.ts",
				"features/search/hooks.ts",
				"features/search/results/queries.gen.ts"
			]
		},
		{
			"module": "features/repo-list/queries.gen.ts",
			"similar": []
		},
		{
			"module": "features/search/params.ts",
			"similar": []
		},
		{
			"module": "features/user-info/queries.gen.ts",
			"similar": []
		},
		{
			"module": "index.tsx",
			"similar": []
		},
		{
			"module": "shared/helpers/index.ts",
			"similar": []
		},
		{
			"module": "shared/hooks/index.ts",
			"similar": []
		}
	],
	"noise": []
};
var datasets = [
	{
		"label": "Noise",
		"backgroundColor": "gray",
		"pointRadius": 10,
		"data": []
	},
	{
		"label": "{.deploy|features}",
		"backgroundColor": "red",
		"pointRadius": 10,
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
		"label": "{app|pages|shared}",
		"backgroundColor": "green",
		"pointRadius": 10,
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
		"label": "{app|features|pages}",
		"backgroundColor": "blue",
		"pointRadius": 10,
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
		"label": "{app|features|pages|shared}",
		"backgroundColor": "pink",
		"pointRadius": 10,
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
		"label": "features/{auth|error|repo-details|repo-explorer}",
		"backgroundColor": "cyan",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.28,
				"y": 0.93,
				"label": "features/auth/consts.ts"
			},
			{
				"x": 0.28,
				"y": 0.93,
				"label": "features/error/definitions.ts"
			},
			{
				"x": 0.28,
				"y": 0.93,
				"label": "features/repo-details/queries.gen.ts"
			},
			{
				"x": 0.28,
				"y": 0.88,
				"label": "features/repo-explorer/queries.gen.ts"
			}
		]
	},
	{
		"label": "features/{*}",
		"backgroundColor": "yellow",
		"pointRadius": 10,
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
		"label": "features/auth/hooks.ts/{hooks.ts}",
		"backgroundColor": "magenta",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.63,
				"y": 0.93,
				"label": "features/auth/hooks.ts"
			}
		]
	},
	{
		"label": "features/auth/index.ts/{index.ts}",
		"backgroundColor": "orange",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.43000000000000005,
				"y": 0.93,
				"label": "features/auth/index.ts"
			}
		]
	},
	{
		"label": "{features|models.ts}",
		"backgroundColor": "brown",
		"pointRadius": 10,
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
		"label": "features/{error|repo-details|repo-explorer|user-info}",
		"backgroundColor": "violet",
		"pointRadius": 10,
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
		"label": "{features|models.gen.ts|serviceWorker.ts|shared}",
		"backgroundColor": "CornflowerBlue",
		"pointRadius": 10,
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
		"label": "features/repo-explorer/components/{entries-view|index.tsx}",
		"backgroundColor": "Cornsilk",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.8833333333333334,
				"y": 0.9,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.8971428571428571,
				"y": 0.89,
				"label": "features/repo-explorer/components"
			}
		]
	},
	{
		"label": "{features|shared}",
		"backgroundColor": "Coral",
		"pointRadius": 10,
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
		"label": "{features|shared}",
		"backgroundColor": "Gold",
		"pointRadius": 10,
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
	},
	{
		"label": "features/{repo-list|search}",
		"backgroundColor": "FireBrick",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.23,
				"y": 0.03,
				"label": "features/repo-list/queries.gen.ts"
			},
			{
				"x": 0.23,
				"y": 0.03,
				"label": "features/search/params.ts"
			}
		]
	},
	{
		"label": "features/user-info/queries.gen.ts/{queries.gen.ts}",
		"backgroundColor": "Lime",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.3633333333333333,
				"y": 0.88,
				"label": "features/user-info/queries.gen.ts"
			}
		]
	},
	{
		"label": "index.tsx/{index.tsx}",
		"pointRadius": 10,
		"data": [
			{
				"x": 1.01,
				"y": 0.01,
				"label": "index.tsx"
			}
		]
	},
	{
		"label": "shared/helpers/index.ts/{index.ts}",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.3633333333333333,
				"y": 1.03,
				"label": "shared/helpers/index.ts"
			}
		]
	},
	{
		"label": "shared/hooks/index.ts/{index.ts}",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.53,
				"y": 1.03,
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
    