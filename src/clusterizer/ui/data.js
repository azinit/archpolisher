
var userConfig = {
	"fixtures": "GH_FDD__SPEC",
	"strategy": "modules",
	"clustering": {
		"neighNum": 1,
		"neighRadius": 0.05
	}
};
var issues = {
	"date": "2022-06-11T16:57:44.808Z",
	"strategy": "modules",
	"description": "Some modules should be transferred, according to Instability&Abstractness modules clustering",
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
			"module": "shared/components/simple-pagination",
			"similar": [
				"features/hero-sheet",
				"features/origin",
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
			"module": "features/user-info",
			"similar": []
		},
		{
			"module": "features/repo-explorer",
			"similar": []
		},
		{
			"module": "shared/components/org",
			"similar": [
				"features/repo-list",
				"features/search",
				"index.tsx"
			]
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
			"module": "shared/components/tabs",
			"similar": []
		},
		{
			"module": "shared/components/user",
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
		"label": ".deploy/{.deploy}",
		"backgroundColor": "red",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.5,
				"y": 0.88,
				"label": ".deploy"
			}
		]
	},
	{
		"label": "app/{app}",
		"backgroundColor": "green",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.8571428571428571,
				"y": 0,
				"label": "app"
			}
		]
	},
	{
		"label": "features/auth/{auth}",
		"backgroundColor": "blue",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.3333333333333333,
				"y": 0.92,
				"label": "features/auth"
			}
		]
	},
	{
		"label": "features/error/{error}",
		"backgroundColor": "pink",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.25,
				"y": 0.92,
				"label": "features/error"
			}
		]
	},
	{
		"label": "{features|models.gen.ts|serviceWorker.ts|shared}",
		"backgroundColor": "cyan",
		"pointRadius": 10,
		"data": [
			{
				"x": 0,
				"y": 1,
				"label": "features/hero-sheet"
			},
			{
				"x": 0,
				"y": 1,
				"label": "features/origin"
			},
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
				"label": "shared/components/simple-pagination"
			},
			{
				"x": 0,
				"y": 1,
				"label": "shared/get-env"
			},
			{
				"x": 0,
				"y": 1,
				"label": "shared/helpers"
			},
			{
				"x": 0,
				"y": 1,
				"label": "shared/hooks"
			}
		]
	},
	{
		"label": "features/{repo-details|user-info}",
		"backgroundColor": "yellow",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.6,
				"y": 0.88,
				"label": "features/repo-details"
			},
			{
				"x": 0.6,
				"y": 0.88,
				"label": "features/user-info"
			}
		]
	},
	{
		"label": "features/repo-explorer/{repo-explorer}",
		"backgroundColor": "magenta",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.6666666666666666,
				"y": 0.84,
				"label": "features/repo-explorer"
			}
		]
	},
	{
		"label": "{features|index.tsx|shared}",
		"backgroundColor": "orange",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.7142857142857143,
				"y": 0,
				"label": "features/repo-list"
			},
			{
				"x": 0.6666666666666666,
				"y": 0,
				"label": "features/search"
			},
			{
				"x": 0.7,
				"y": 0,
				"label": "index.tsx"
			},
			{
				"x": 0.6666666666666666,
				"y": 0,
				"label": "shared/components/org"
			},
			{
				"x": 0.6666666666666666,
				"y": 0,
				"label": "shared/components/repo"
			}
		]
	},
	{
		"label": "models.ts/{models.ts}",
		"backgroundColor": "brown",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.08333333333333333,
				"y": 0.96,
				"label": "models.ts"
			}
		]
	},
	{
		"label": "pages/{pages}",
		"backgroundColor": "violet",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.9230769230769231,
				"y": 0,
				"label": "pages"
			}
		]
	},
	{
		"label": "shared/components/{card|tabs}",
		"backgroundColor": "CornflowerBlue",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.5,
				"y": 0,
				"label": "shared/components/card"
			},
			{
				"x": 0.5,
				"y": 0,
				"label": "shared/components/tabs"
			}
		]
	},
	{
		"label": "shared/components/user/{user}",
		"backgroundColor": "Cornsilk",
		"pointRadius": 10,
		"data": [
			{
				"x": 1,
				"y": 0,
				"label": "shared/components/user"
			}
		]
	}
];
var files = [
	".deploy/index.ts",
	".deploy/temp-stand.ts",
	"app/header/hooks.ts",
	"app/header/index.scss",
	"app/header/index.tsx",
	"app/header/logo.svg",
	"app/hocs/index.ts",
	"app/hocs/with-antd.tsx",
	"app/hocs/with-apollo.tsx",
	"app/hocs/with-error-handling.tsx",
	"app/hocs/with-router.tsx",
	"app/index.scss",
	"app/index.tsx",
	"app/styles/normalize-antd.scss",
	"app/styles/normalize.scss",
	"app/styles/utils.scss",
	"app/styles/vars.scss",
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
	"features/hero-sheet/index.scss",
	"features/hero-sheet/index.tsx",
	"features/origin/index.scss",
	"features/origin/index.tsx",
	"features/repo-details/card-collaborators/index.tsx",
	"features/repo-details/card-common/index.tsx",
	"features/repo-details/details-card/index.scss",
	"features/repo-details/details-card/index.tsx",
	"features/repo-details/index.scss",
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
	"features/repo-list/index.scss",
	"features/repo-list/index.tsx",
	"features/repo-list/items/index.tsx",
	"features/repo-list/pagination/index.tsx",
	"features/repo-list/params.ts",
	"features/repo-list/queries.gen.ts",
	"features/repo-list/tabs/index.tsx",
	"features/search/filters/index.scss",
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
	"features/user-info/index.scss",
	"features/user-info/index.tsx",
	"features/user-info/queries.gen.ts",
	"index.tsx",
	"models.gen.ts",
	"models.ts",
	"pages/auth/index.scss",
	"pages/auth/index.tsx",
	"pages/error/index.tsx",
	"pages/helpers.ts",
	"pages/home/index.tsx",
	"pages/index.tsx",
	"pages/repository/index.scss",
	"pages/repository/index.tsx",
	"pages/search/index.tsx",
	"pages/user/index.scss",
	"pages/user/index.tsx",
	"serviceWorker.ts",
	"shared/components/card/index.scss",
	"shared/components/card/index.tsx",
	"shared/components/card/skeleton-group/index.tsx",
	"shared/components/card/skeleton/index.scss",
	"shared/components/card/skeleton/index.tsx",
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
	"shared/hooks/use-previous.ts",
	"shared/mixins.scss"
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
    