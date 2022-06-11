
var userConfig = {
	"fixtures": "GH_FDD",
	"strategy": "files",
	"extensions": [
		"tsx",
		"ts",
		"jsx",
		"js"
	],
	"clustering": {
		"neighNum": 1,
		"neighRadius": 0.05
	}
};
var issues = {
	"date": "2022-06-11T17:44:31.073Z",
	"strategy": "files",
	"description": "Some modules should be transferred, according to Instability&Abstractness modules clustering",
	"issues": [
		{
			"module": ".deploy/index.ts",
			"similar": []
		},
		{
			"module": ".deploy/temp-stand.ts",
			"similar": []
		},
		{
			"module": "shared/components/tabs/item/index.scss",
			"similar": [
				"app/header/hooks.ts",
				"app/hocs/with-antd.tsx",
				"app/hocs/with-router.tsx",
				"features/auth/types.ts",
				"features/hero-sheet/assets/github-icon-sad.svg",
				"features/hero-sheet/assets/github-icon.svg",
				"features/origin/index.tsx",
				"features/repo-details/details-card/index.tsx",
				"features/repo-explorer/components/branches-menu/index.scss",
				"features/repo-explorer/components/entries-view/file.svg",
				"features/repo-explorer/components/entries-view/folder.svg",
				"features/repo-explorer/components/entries-view/index.scss",
				"features/repo-explorer/components/entries-view/placeholder.png",
				"features/repo-explorer/components/readme/code-renderer.tsx",
				"features/repo-explorer/components/readme/index.scss",
				"features/repo-explorer/components/skeleton-area/index.scss",
				"features/repo-explorer/components/toolbar/clone-menu.tsx",
				"features/repo-explorer/components/toolbar/index.scss",
				"features/repo-stat/fixtures.tsx",
				"features/search/results/list/index.scss",
				"features/search/results/toolbar/index.scss",
				"pages/helpers.ts",
				"shared/components/card/index.scss",
				"shared/components/card/skeleton/index.scss",
				"shared/components/org/index.scss",
				"shared/components/repo/index.scss",
				"shared/components/simple-pagination/index.scss"
			]
		},
		{
			"module": "shared/components/org/index.tsx",
			"similar": [
				"app/header/index.tsx",
				"app/index.tsx",
				"features/error/catcher.tsx",
				"features/repo-details/card-common/index.tsx",
				"features/repo-explorer/components/readme/index.tsx",
				"features/repo-list/pagination/index.tsx",
				"features/repo-stat/index.tsx",
				"features/search/index.tsx",
				"features/user-info/hooks.ts",
				"pages/auth/index.tsx",
				"pages/error/index.tsx",
				"pages/repository/index.tsx"
			]
		},
		{
			"module": "shared/components/repo/index.tsx",
			"similar": [
				"app/hocs/index.ts",
				"app/hocs/with-error-handling.tsx",
				"features/auth/index.ts",
				"features/repo-details/index.tsx",
				"features/repo-explorer/components/entries-view/git-file-view.tsx",
				"features/repo-explorer/components/entries-view/index.tsx",
				"features/repo-explorer/components/index.tsx",
				"features/repo-explorer/components/toolbar/index.tsx",
				"features/repo-list/index.tsx",
				"features/repo-list/items/index.tsx",
				"features/repo-list/tabs/index.tsx",
				"features/search/filters/index.tsx",
				"features/search/results/index.tsx",
				"features/search/results/list/index.tsx",
				"pages/index.tsx"
			]
		},
		{
			"module": "shared/components/user/index.tsx",
			"similar": [
				"app/hocs/with-apollo.tsx",
				"features/auth/firebase/auth-github.ts",
				"features/auth/user/index.tsx",
				"features/error/helpers.ts",
				"features/error/index.ts",
				"features/hero-sheet/index.tsx",
				"features/repo-details/card-collaborators/index.tsx",
				"features/repo-explorer/components/branches-menu/index.tsx",
				"features/repo-explorer/components/entries-view/last-commit-header.tsx",
				"features/repo-explorer/components/hooks.ts",
				"features/repo-explorer/hooks.ts",
				"features/search/results/toolbar/index.tsx",
				"features/search/results/toolbar/sort-select.tsx",
				"features/user-info/index.tsx",
				"pages/home/index.tsx",
				"pages/search/index.tsx",
				"pages/user/index.tsx"
			]
		},
		{
			"module": "shared/components/card/skeleton/index.tsx",
			"similar": [
				"features/auth/consts.ts",
				"features/error/definitions.ts",
				"features/repo-details/queries.gen.ts",
				"features/repo-explorer/queries.gen.ts",
				"features/repo-list/queries.gen.ts",
				"features/search/hooks.ts",
				"features/search/params.ts",
				"features/repo-explorer/components/skeleton-area/index.tsx",
				"features/repo-list/params.ts",
				"features/search/results/queries.gen.ts",
				"features/user-info/queries.gen.ts"
			]
		},
		{
			"module": "features/search/results/pagination/index.tsx",
			"similar": [
				"features/auth/firebase/index.ts",
				"features/auth/firebase/init.ts",
				"features/index.ts",
				"features/repo-explorer/index.ts",
				"features/repo-list/hooks.ts",
				"features/repo-stat/queries.gen.ts",
				"shared/components/card/skeleton-group/index.tsx",
				"shared/components/index.ts",
				"shared/components/repo/lang.tsx",
				"shared/components/simple-pagination/index.tsx",
				"shared/components/tabs/index.tsx",
				"shared/components/tabs/item/index.tsx",
				"shared/components/card/index.tsx"
			]
		},
		{
			"module": "features/auth/hooks.ts",
			"similar": []
		},
		{
			"module": "index.tsx",
			"similar": []
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
			]
		},
		{
			"module": "models.ts",
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
		"label": ".deploy/{index.ts|temp-stand.ts}",
		"backgroundColor": "red",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.5,
				"y": 0.33333333333333337,
				"label": ".deploy/index.ts"
			},
			{
				"x": 0.5,
				"y": 0.33333333333333337,
				"label": ".deploy/temp-stand.ts"
			}
		]
	},
	{
		"label": "{app|features|pages|shared}",
		"backgroundColor": "green",
		"pointRadius": 10,
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
			},
			{
				"x": 0,
				"y": 0,
				"label": "features/auth/types.ts"
			},
			{
				"x": 0,
				"y": 0,
				"label": "features/hero-sheet/assets"
			},
			{
				"x": 0,
				"y": 0,
				"label": "features/hero-sheet/assets"
			},
			{
				"x": 0,
				"y": 0,
				"label": "features/origin/index.tsx"
			},
			{
				"x": 0,
				"y": 0,
				"label": "features/repo-details/details-card"
			},
			{
				"x": 0,
				"y": 0,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0,
				"y": 0,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0,
				"y": 0,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0,
				"y": 0,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0,
				"y": 0,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0,
				"y": 0,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0,
				"y": 0,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0,
				"y": 0,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0,
				"y": 0,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0,
				"y": 0,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0,
				"y": 0,
				"label": "features/repo-stat/fixtures.tsx"
			},
			{
				"x": 0,
				"y": 0,
				"label": "features/search/results"
			},
			{
				"x": 0,
				"y": 0,
				"label": "features/search/results"
			},
			{
				"x": 0,
				"y": 0,
				"label": "pages/helpers.ts"
			},
			{
				"x": 0,
				"y": 0,
				"label": "shared/components/card"
			},
			{
				"x": 0,
				"y": 0,
				"label": "shared/components/card"
			},
			{
				"x": 0,
				"y": 0,
				"label": "shared/components/org"
			},
			{
				"x": 0,
				"y": 0,
				"label": "shared/components/repo"
			},
			{
				"x": 0,
				"y": 0,
				"label": "shared/components/simple-pagination"
			},
			{
				"x": 0,
				"y": 0,
				"label": "shared/components/tabs"
			}
		]
	},
	{
		"label": "{app|features|pages|shared}",
		"backgroundColor": "blue",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.75,
				"y": 0,
				"label": "app/header/index.tsx"
			},
			{
				"x": 0.75,
				"y": 0,
				"label": "app/index.tsx"
			},
			{
				"x": 0.75,
				"y": 0,
				"label": "features/error/catcher.tsx"
			},
			{
				"x": 0.75,
				"y": 0,
				"label": "features/repo-details/card-common"
			},
			{
				"x": 0.75,
				"y": 0,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.75,
				"y": 0,
				"label": "features/repo-list/pagination"
			},
			{
				"x": 0.75,
				"y": 0,
				"label": "features/repo-stat/index.tsx"
			},
			{
				"x": 0.75,
				"y": 0,
				"label": "features/search/index.tsx"
			},
			{
				"x": 0.75,
				"y": 0,
				"label": "features/user-info/hooks.ts"
			},
			{
				"x": 0.75,
				"y": 0,
				"label": "pages/auth/index.tsx"
			},
			{
				"x": 0.75,
				"y": 0,
				"label": "pages/error/index.tsx"
			},
			{
				"x": 0.75,
				"y": 0,
				"label": "pages/repository/index.tsx"
			},
			{
				"x": 0.75,
				"y": 0,
				"label": "shared/components/org"
			}
		]
	},
	{
		"label": "{app|features|pages|shared}",
		"backgroundColor": "pink",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.8333333333333334,
				"y": 0,
				"label": "app/hocs/index.ts"
			},
			{
				"x": 0.8,
				"y": 0,
				"label": "app/hocs/with-error-handling.tsx"
			},
			{
				"x": 0.8,
				"y": 0,
				"label": "features/auth/index.ts"
			},
			{
				"x": 0.8,
				"y": 0,
				"label": "features/repo-details/index.tsx"
			},
			{
				"x": 0.8,
				"y": 0,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.8571428571428571,
				"y": 0,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.8571428571428571,
				"y": 0,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.8,
				"y": 0,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.8333333333333334,
				"y": 0,
				"label": "features/repo-list/index.tsx"
			},
			{
				"x": 0.8,
				"y": 0,
				"label": "features/repo-list/items"
			},
			{
				"x": 0.8,
				"y": 0,
				"label": "features/repo-list/tabs"
			},
			{
				"x": 0.8,
				"y": 0,
				"label": "features/search/filters"
			},
			{
				"x": 0.8333333333333334,
				"y": 0,
				"label": "features/search/results"
			},
			{
				"x": 0.8333333333333334,
				"y": 0,
				"label": "features/search/results"
			},
			{
				"x": 0.875,
				"y": 0,
				"label": "pages/index.tsx"
			},
			{
				"x": 0.8,
				"y": 0,
				"label": "shared/components/repo"
			}
		]
	},
	{
		"label": "{app|features|pages|shared}",
		"backgroundColor": "cyan",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.6666666666666666,
				"y": 0,
				"label": "app/hocs/with-apollo.tsx"
			},
			{
				"x": 0.6666666666666666,
				"y": 0,
				"label": "features/auth/firebase"
			},
			{
				"x": 0.6666666666666666,
				"y": 0,
				"label": "features/auth/user"
			},
			{
				"x": 0.6666666666666666,
				"y": 0,
				"label": "features/error/helpers.ts"
			},
			{
				"x": 0.6666666666666666,
				"y": 0,
				"label": "features/error/index.ts"
			},
			{
				"x": 0.6666666666666666,
				"y": 0,
				"label": "features/hero-sheet/index.tsx"
			},
			{
				"x": 0.6666666666666666,
				"y": 0,
				"label": "features/repo-details/card-collaborators"
			},
			{
				"x": 0.6666666666666666,
				"y": 0,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.6666666666666666,
				"y": 0,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.6666666666666666,
				"y": 0,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.6666666666666666,
				"y": 0,
				"label": "features/repo-explorer/hooks.ts"
			},
			{
				"x": 0.6666666666666666,
				"y": 0,
				"label": "features/search/results"
			},
			{
				"x": 0.6666666666666666,
				"y": 0,
				"label": "features/search/results"
			},
			{
				"x": 0.6666666666666666,
				"y": 0,
				"label": "features/user-info/index.tsx"
			},
			{
				"x": 0.6666666666666666,
				"y": 0,
				"label": "pages/home/index.tsx"
			},
			{
				"x": 0.6666666666666666,
				"y": 0,
				"label": "pages/search/index.tsx"
			},
			{
				"x": 0.6666666666666666,
				"y": 0,
				"label": "pages/user/index.tsx"
			},
			{
				"x": 0.6666666666666666,
				"y": 0,
				"label": "shared/components/user"
			}
		]
	},
	{
		"label": "{features|shared}",
		"backgroundColor": "yellow",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.25,
				"y": 0,
				"label": "features/auth/consts.ts"
			},
			{
				"x": 0.25,
				"y": 0,
				"label": "features/error/definitions.ts"
			},
			{
				"x": 0.25,
				"y": 0,
				"label": "features/repo-details/queries.gen.ts"
			},
			{
				"x": 0.25,
				"y": 0,
				"label": "features/repo-explorer/queries.gen.ts"
			},
			{
				"x": 0.2,
				"y": 0,
				"label": "features/repo-list/queries.gen.ts"
			},
			{
				"x": 0.2857142857142857,
				"y": 0,
				"label": "features/search/hooks.ts"
			},
			{
				"x": 0.2,
				"y": 0,
				"label": "features/search/params.ts"
			},
			{
				"x": 0.3333333333333333,
				"y": 0,
				"label": "features/repo-explorer/components"
			},
			{
				"x": 0.3333333333333333,
				"y": 0,
				"label": "features/repo-list/params.ts"
			},
			{
				"x": 0.3333333333333333,
				"y": 0,
				"label": "features/search/results"
			},
			{
				"x": 0.3333333333333333,
				"y": 0,
				"label": "features/user-info/queries.gen.ts"
			},
			{
				"x": 0.3333333333333333,
				"y": 0,
				"label": "shared/components/card"
			}
		]
	},
	{
		"label": "{features|shared}",
		"backgroundColor": "magenta",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.5,
				"y": 0,
				"label": "features/auth/firebase"
			},
			{
				"x": 0.5,
				"y": 0,
				"label": "features/auth/firebase"
			},
			{
				"x": 0.47619047619047616,
				"y": 0,
				"label": "features/index.ts"
			},
			{
				"x": 0.5,
				"y": 0,
				"label": "features/repo-explorer/index.ts"
			},
			{
				"x": 0.5,
				"y": 0,
				"label": "features/repo-list/hooks.ts"
			},
			{
				"x": 0.5,
				"y": 0,
				"label": "features/repo-stat/queries.gen.ts"
			},
			{
				"x": 0.5,
				"y": 0,
				"label": "features/search/results"
			},
			{
				"x": 0.5,
				"y": 0,
				"label": "shared/components/card"
			},
			{
				"x": 0.5454545454545454,
				"y": 0,
				"label": "shared/components/index.ts"
			},
			{
				"x": 0.5,
				"y": 0,
				"label": "shared/components/repo"
			},
			{
				"x": 0.5,
				"y": 0,
				"label": "shared/components/simple-pagination"
			},
			{
				"x": 0.5,
				"y": 0,
				"label": "shared/components/tabs"
			},
			{
				"x": 0.5,
				"y": 0,
				"label": "shared/components/tabs"
			},
			{
				"x": 0.42857142857142855,
				"y": 0,
				"label": "shared/components/card"
			}
		]
	},
	{
		"label": "features/auth/hooks.ts/{hooks.ts}",
		"backgroundColor": "orange",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.6,
				"y": 0,
				"label": "features/auth/hooks.ts"
			}
		]
	},
	{
		"label": "index.tsx/{index.tsx}",
		"backgroundColor": "brown",
		"pointRadius": 10,
		"data": [
			{
				"x": 1,
				"y": 0,
				"label": "index.tsx"
			}
		]
	},
	{
		"label": "{models.gen.ts|serviceWorker.ts|shared}",
		"backgroundColor": "violet",
		"pointRadius": 10,
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
		"label": "models.ts/{models.ts}",
		"backgroundColor": "CornflowerBlue",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.037037037037037035,
				"y": 0.9166666666666666,
				"label": "models.ts"
			}
		]
	},
	{
		"label": "shared/helpers/index.ts/{index.ts}",
		"backgroundColor": "Cornsilk",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.3333333333333333,
				"y": 1,
				"label": "shared/helpers/index.ts"
			}
		]
	},
	{
		"label": "shared/hooks/index.ts/{index.ts}",
		"backgroundColor": "Coral",
		"pointRadius": 10,
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
	"features/hero-sheet/assets/github-icon-sad.svg",
	"features/hero-sheet/assets/github-icon.svg",
	"features/hero-sheet/index.tsx",
	"features/index.ts",
	"features/origin/index.tsx",
	"features/repo-details/card-collaborators/index.tsx",
	"features/repo-details/card-common/index.tsx",
	"features/repo-details/details-card/index.tsx",
	"features/repo-details/index.tsx",
	"features/repo-details/queries.gen.ts",
	"features/repo-explorer/components/branches-menu/index.scss",
	"features/repo-explorer/components/branches-menu/index.tsx",
	"features/repo-explorer/components/entries-view/file.svg",
	"features/repo-explorer/components/entries-view/folder.svg",
	"features/repo-explorer/components/entries-view/git-file-view.tsx",
	"features/repo-explorer/components/entries-view/index.scss",
	"features/repo-explorer/components/entries-view/index.tsx",
	"features/repo-explorer/components/entries-view/last-commit-header.tsx",
	"features/repo-explorer/components/entries-view/placeholder.png",
	"features/repo-explorer/components/hooks.ts",
	"features/repo-explorer/components/index.tsx",
	"features/repo-explorer/components/readme/code-renderer.tsx",
	"features/repo-explorer/components/readme/index.scss",
	"features/repo-explorer/components/readme/index.tsx",
	"features/repo-explorer/components/skeleton-area/index.scss",
	"features/repo-explorer/components/skeleton-area/index.tsx",
	"features/repo-explorer/components/toolbar/clone-menu.tsx",
	"features/repo-explorer/components/toolbar/index.scss",
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
	"features/search/results/list/index.scss",
	"features/search/results/list/index.tsx",
	"features/search/results/pagination/index.tsx",
	"features/search/results/queries.gen.ts",
	"features/search/results/toolbar/index.scss",
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
	"shared/components/card/index.scss",
	"shared/components/card/index.tsx",
	"shared/components/card/skeleton-group/index.tsx",
	"shared/components/card/skeleton/index.scss",
	"shared/components/card/skeleton/index.tsx",
	"shared/components/index.ts",
	"shared/components/org/index.scss",
	"shared/components/org/index.tsx",
	"shared/components/repo/index.scss",
	"shared/components/repo/index.tsx",
	"shared/components/repo/lang.tsx",
	"shared/components/simple-pagination/index.scss",
	"shared/components/simple-pagination/index.tsx",
	"shared/components/tabs/index.tsx",
	"shared/components/tabs/item/index.scss",
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
	"index.tsx",
	"models.gen.ts",
	"models.ts",
	"pages",
	"serviceWorker.ts",
	"shared/components",
	"shared/get-env",
	"shared/helpers",
	"shared/hooks"
];
    