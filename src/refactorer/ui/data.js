
var userConfig = {
	"fixtures": "GH_FDD",
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
		"neighRadius": 0.1,
		"spread": 0
	},
	"refactorer": {
		"minDist": 1,
		"minDiff": 3
	}
};
var issues = {
	"date": "2022-06-20T18:53:31.139Z",
	"strategy": "modules",
	"description": "Some modules should be transferred, according to Instability & Abstractness modules clustering",
	"issues": [
		{
			"module": "serviceWorker.ts",
			"similar": [
				"shared/components/card",
				"shared/components/simple-pagination",
				"shared/components/tabs",
				"shared/get-env",
				"shared/helpers",
				"shared/hooks"
			],
			"_cluster": 1,
			"similarity": [
				1,
				1
			]
		}
	],
	"noise": [
		".deploy",
		"app",
		"features/auth",
		"features/error",
		"features/repo-details",
		"features/repo-explorer",
		"features/repo-list",
		"features/search",
		"features/user-info",
		"models.ts",
		"pages"
	]
};
var datasets = [
	{
		"label": "Noise",
		"backgroundColor": "gray",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"gray",
			"gray",
			"gray",
			"gray",
			"gray",
			"gray",
			"gray",
			"gray",
			"gray",
			"gray",
			"gray"
		],
		"data": [
			{
				"x": 1,
				"y": 0.6091631603553062,
				"label": ".deploy"
			},
			{
				"x": 1,
				"y": 0.07199625993454883,
				"label": "app"
			},
			{
				"x": 0.4,
				"y": 0.6091631603553062,
				"label": "features/auth"
			},
			{
				"x": 0.3333333333333333,
				"y": 0.648901355773726,
				"label": "features/error"
			},
			{
				"x": 0.6666666666666666,
				"y": 0.6091631603553062,
				"label": "features/repo-details"
			},
			{
				"x": 0.75,
				"y": 0.4137447405329593,
				"label": "features/repo-explorer"
			},
			{
				"x": 0.8888888888888888,
				"y": 0.24824684431977562,
				"label": "features/repo-list"
			},
			{
				"x": 0.8888888888888888,
				"y": 0.24824684431977562,
				"label": "features/search"
			},
			{
				"x": 0.75,
				"y": 0.4137447405329593,
				"label": "features/user-info"
			},
			{
				"x": 0.09090909090909091,
				"y": 0.6886395511921459,
				"label": "models.ts"
			},
			{
				"x": 0.9166666666666666,
				"y": 0,
				"label": "pages"
			}
		]
	},
	{
		"label": "Group#1",
		"backgroundColor": "#B6D0E2",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#B6D0E2",
			"#B6D0E2",
			"#B6D0E2"
		],
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
			}
		]
	},
	{
		"label": "Group#2",
		"backgroundColor": "#A7C7E7",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#953553",
			"#A7C7E7",
			"#A7C7E7",
			"#A7C7E7",
			"#A7C7E7",
			"#A7C7E7",
			"#A7C7E7"
		],
		"data": [
			{
				"x": 0,
				"y": 1,
				"label": "serviceWorker.ts"
			},
			{
				"x": 0,
				"y": 1,
				"label": "shared/components/card"
			},
			{
				"x": 0,
				"y": 1,
				"label": "shared/components/simple-pagination"
			},
			{
				"x": 0,
				"y": 1,
				"label": "shared/components/tabs"
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
				"x": 0.6666666666666666,
				"y": 0.5114539504441328,
				"label": "shared/components/org"
			},
			{
				"x": 0.5,
				"y": 0.5114539504441328,
				"label": "shared/components/repo"
			},
			{
				"x": 0.6666666666666666,
				"y": 0.5114539504441328,
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
    