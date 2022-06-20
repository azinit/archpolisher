
var userConfig = {
	"fixtures": "FAVEIN",
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
	"date": "2022-06-20T02:05:15.799Z",
	"strategy": "modules",
	"description": "Some modules should be transferred, according to Instability & Abstractness modules clustering",
	"issues": [
		{
			"module": "pages/admin",
			"similar": [
				"components/loader",
				"components/rate",
				"components/text-field",
				"components/user"
			],
			"_cluster": 9,
			"similarity": [
				1,
				1
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
				"x": 0,
				"y": 1,
				"label": "api"
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
			"#A7C7E7"
		],
		"data": [
			{
				"x": 0.6666666666666666,
				"y": 0.5642633228840125,
				"label": "components/card/add"
			},
			{
				"x": 0.6666666666666666,
				"y": 0.602403343782654,
				"label": "components/card/form"
			},
			{
				"x": 0.6666666666666666,
				"y": 0.5642633228840125,
				"label": "components/comment"
			}
		]
	},
	{
		"label": "Group#3",
		"backgroundColor": "#7393B3",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#7393B3"
		],
		"data": [
			{
				"x": 0.5,
				"y": 0.41901776384535,
				"label": "components/card/item-compact"
			}
		]
	},
	{
		"label": "Group#4",
		"backgroundColor": "#4682B4",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#4682B4"
		],
		"data": [
			{
				"x": 0.875,
				"y": 0.1750261233019854,
				"label": "components/card/sheet"
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
				"x": 0,
				"y": 1,
				"label": "components/code-renderer"
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
				"x": 0.6,
				"y": 0.2664576802507837,
				"label": "components/dashboard"
			}
		]
	},
	{
		"label": "Group#7",
		"backgroundColor": "#0096FF",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#0096FF"
		],
		"data": [
			{
				"x": 0.08333333333333333,
				"y": 0.7246603970741902,
				"label": "components/header"
			}
		]
	},
	{
		"label": "Group#8",
		"backgroundColor": "#1434A4",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#1434A4"
		],
		"data": [
			{
				"x": 0.25,
				"y": 0.7246603970741902,
				"label": "components/label"
			}
		]
	},
	{
		"label": "Group#9",
		"backgroundColor": "#3F00FF",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#3F00FF"
		],
		"data": [
			{
				"x": 0.8,
				"y": 0.2664576802507837,
				"label": "components/list"
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
			"#000080",
			"#953553",
			"#000080"
		],
		"data": [
			{
				"x": 0,
				"y": 1,
				"label": "components/loader"
			},
			{
				"x": 0,
				"y": 1,
				"label": "components/rate"
			},
			{
				"x": 0,
				"y": 1,
				"label": "components/text-field"
			},
			{
				"x": 0,
				"y": 1,
				"label": "pages/admin"
			},
			{
				"x": 0,
				"y": 1,
				"label": "components/user"
			}
		]
	},
	{
		"label": "Group#11",
		"backgroundColor": "#0437F2",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#0437F2"
		],
		"data": [
			{
				"x": 0.3333333333333333,
				"y": 0.7857889237199581,
				"label": "components/markdown"
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
			"#0818A8"
		],
		"data": [
			{
				"x": 1,
				"y": 0.5031347962382445,
				"label": "pages/auth/sign-in"
			},
			{
				"x": 1,
				"y": 0.5031347962382445,
				"label": "pages/auth/sign-up"
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
			"#40B5AD"
		],
		"data": [
			{
				"x": 1,
				"y": 0.12173458725182866,
				"label": "pages/card"
			},
			{
				"x": 1,
				"y": 0.083594566353187,
				"label": "pages/dashboard"
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
				"x": 0.25,
				"y": 0.6635318704284222,
				"label": "pages/errors/404"
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
				"x": 1,
				"y": 0.38087774294670845,
				"label": "pages/faves"
			},
			{
				"x": 1,
				"y": 0.38087774294670845,
				"label": "pages/labels"
			},
			{
				"x": 1,
				"y": 0.38087774294670845,
				"label": "pages/user-cards"
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
				"x": 1,
				"y": 0.6635318704284222,
				"label": "pages/home"
			}
		]
	},
	{
		"label": "Group#17",
		"backgroundColor": "#00A36C",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#00A36C"
		],
		"data": [
			{
				"x": 1,
				"y": 0,
				"label": "pages/user"
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
				"x": 1,
				"y": 0.5031347962382445,
				"label": "pages/users"
			}
		]
	},
	{
		"label": "Group#19",
		"backgroundColor": "#C1E1C1",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#C1E1C1"
		],
		"data": [
			{
				"x": 0,
				"y": 1,
				"label": "serviceWorker.ts"
			}
		]
	},
	{
		"label": "Group#20",
		"backgroundColor": "#ECFFDC",
		"pointRadius": 10,
		"borderWidth": 2,
		"pointBorderColor": [
			"#ECFFDC"
		],
		"data": [
			{
				"x": 0.05555555555555555,
				"y": 0.7857889237199581,
				"label": "store"
			}
		]
	}
];
var files = [
	"api/helpers/index.ts",
	"api/index.tsx",
	"components/card/add/index.tsx",
	"components/card/form/index.tsx",
	"components/card/item-compact/index.tsx",
	"components/card/sheet/actions/index.tsx",
	"components/card/sheet/comments/comment-form/index.tsx",
	"components/card/sheet/comments/index.tsx",
	"components/card/sheet/content/editor/index.tsx",
	"components/card/sheet/content/index.tsx",
	"components/card/sheet/header/index.tsx",
	"components/card/sheet/index.tsx",
	"components/card/sheet/labels/index.tsx",
	"components/card/sheet/rates/index.tsx",
	"components/code-renderer/index.tsx",
	"components/comment/index.tsx",
	"components/dashboard/add/index.tsx",
	"components/dashboard/form/index.tsx",
	"components/dashboard/index.tsx",
	"components/dashboard/item/dashboard-actions/index.tsx",
	"components/dashboard/item/index.tsx",
	"components/header/index.tsx",
	"components/label/index.tsx",
	"components/label/mutable/index.tsx",
	"components/list/form/index.tsx",
	"components/list/index.tsx",
	"components/loader/index.tsx",
	"components/markdown/index.tsx",
	"components/rate/index.tsx",
	"components/text-field/index.tsx",
	"components/user/index.tsx",
	"pages/admin/index.tsx",
	"pages/app.tsx",
	"pages/auth/sign-in/index.tsx",
	"pages/auth/sign-up/index.tsx",
	"pages/card/index.tsx",
	"pages/dashboard/index.tsx",
	"pages/errors/404/index.tsx",
	"pages/faves/index.tsx",
	"pages/home/fixtures.ts",
	"pages/home/index.tsx",
	"pages/home/screen/index.tsx",
	"pages/labels/form/index.tsx",
	"pages/labels/index.tsx",
	"pages/user-cards/index.tsx",
	"pages/user/index.tsx",
	"pages/users/index.tsx",
	"serviceWorker.ts",
	"store/auth/service.ts",
	"store/auth/slice.tsx",
	"store/entities/index.ts",
	"store/entities/service.ts",
	"store/helpers/index.ts",
	"store/index.ts"
];
var modules = [
	"api",
	"components/card/add",
	"components/card/form",
	"components/card/item-compact",
	"components/card/sheet",
	"components/code-renderer",
	"components/comment",
	"components/dashboard",
	"components/header",
	"components/label",
	"components/list",
	"components/loader",
	"components/markdown",
	"components/rate",
	"components/text-field",
	"components/user",
	"pages/admin",
	"pages/auth/sign-in",
	"pages/auth/sign-up",
	"pages/card",
	"pages/dashboard",
	"pages/errors/404",
	"pages/faves",
	"pages/home",
	"pages/labels",
	"pages/user-cards",
	"pages/user",
	"pages/users",
	"serviceWorker.ts",
	"store"
];
    