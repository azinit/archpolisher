
var userConfig = {
	"fixtures": "GH_FDD__SPEC",
	"strategy": "modules",
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
	"date": "2022-06-19T02:59:22.963Z",
	"strategy": "modules",
	"description": "Some modules should be transferred, according to Instability & Abstractness modules clustering",
	"issues": [
		{
			"module": ".deploy",
			"similar": []
		},
		{
			"module": "app",
			"similar": []
		},
		{
			"module": "features/auth",
			"similar": []
		},
		{
			"module": "features/error",
			"similar": []
		},
		{
			"module": "features/hero-sheet",
			"similar": [
				"models.gen.ts",
				"serviceWorker.ts",
				"shared/get-env",
				"shared/helpers",
				"shared/hooks"
			]
		},
		{
			"module": "features/origin",
			"similar": [
				"models.gen.ts",
				"serviceWorker.ts",
				"shared/get-env",
				"shared/helpers",
				"shared/hooks"
			]
		},
		{
			"module": "features/repo-details",
			"similar": []
		},
		{
			"module": "features/repo-explorer",
			"similar": []
		},
		{
			"module": "features/user-info",
			"similar": []
		},
		{
			"module": "shared/components/repo",
			"similar": [
				"features/repo-list",
				"features/search",
				"index.tsx"
			]
		},
		{
			"module": "models.ts",
			"similar": []
		},
		{
			"module": "pages",
			"similar": []
		},
		{
			"module": "shared/components/card",
			"similar": []
		},
		{
			"module": "shared/components/org",
			"similar": []
		},
		{
			"module": "shared/components/tabs",
			"similar": []
		},
		{
			"module": "shared/components/user",
			"similar": []
		}
	],
	"noise": [
		"shared/components/simple-pagination"
	]
};
var datasets = [
	{
		"label": "Noise",
		"backgroundColor": "gray",
		"pointRadius": 10,
		"data": [
			{
				"x": null,
				"y": 1.03,
				"label": "shared/components/simple-pagination"
			}
		]
	},
	{
		"label": ".deploy",
		"backgroundColor": "#B6D0E2",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.51,
				"y": 0.86,
				"label": ".deploy"
			}
		]
	},
	{
		"label": "app",
		"backgroundColor": "#A7C7E7",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.8671428571428571,
				"y": 0.01,
				"label": "app"
			}
		]
	},
	{
		"label": "features/auth",
		"backgroundColor": "#7393B3",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.35333333333333333,
				"y": 0.92,
				"label": "features/auth"
			}
		]
	},
	{
		"label": "features/error",
		"backgroundColor": "#4682B4",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.27,
				"y": 0.92,
				"label": "features/error"
			}
		]
	},
	{
		"label": "{*}",
		"backgroundColor": "#6082B6",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.02,
				"y": 1.02,
				"label": "features/hero-sheet"
			},
			{
				"x": 0.02,
				"y": 1.02,
				"label": "features/origin"
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
				"x": 0.02,
				"y": 1.02,
				"label": "shared/get-env"
			},
			{
				"x": 0.02,
				"y": 1.02,
				"label": "shared/helpers"
			},
			{
				"x": 0.02,
				"y": 1.02,
				"label": "shared/hooks"
			}
		]
	},
	{
		"label": "features/repo-details",
		"backgroundColor": "#6495ED",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.52,
				"y": 0.92,
				"label": "features/repo-details"
			}
		]
	},
	{
		"label": "features/{repo-explorer|user-info}",
		"backgroundColor": "#0096FF",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.62,
				"y": 0.87,
				"label": "features/repo-explorer"
			},
			{
				"x": 0.62,
				"y": 0.87,
				"label": "features/user-info"
			}
		]
	},
	{
		"label": "{*}",
		"backgroundColor": "#1434A4",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.7342857142857143,
				"y": 0.02,
				"label": "features/repo-list"
			},
			{
				"x": 0.6866666666666666,
				"y": 0.02,
				"label": "features/search"
			},
			{
				"x": 0.6966666666666667,
				"y": 0.03,
				"label": "shared/components/repo"
			},
			{
				"x": 0.6638461538461539,
				"y": 0.01,
				"label": "index.tsx"
			}
		]
	},
	{
		"label": "models.ts",
		"backgroundColor": "#3F00FF",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.09333333333333332,
				"y": 0.96,
				"label": "models.ts"
			}
		]
	},
	{
		"label": "pages",
		"backgroundColor": "#000080",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.9330769230769231,
				"y": 0.01,
				"label": "pages"
			}
		]
	},
	{
		"label": "shared/components/{*}",
		"backgroundColor": "#0437F2",
		"pointRadius": 10,
		"data": [
			{
				"x": 1.03,
				"y": 0.03,
				"label": "shared/components/card"
			},
			{
				"x": 1.03,
				"y": 0.03,
				"label": "shared/components/org"
			},
			{
				"x": 1.03,
				"y": 0.03,
				"label": "shared/components/tabs"
			},
			{
				"x": 1.03,
				"y": 0.03,
				"label": "shared/components/user"
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
    