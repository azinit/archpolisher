
var userConfig = {
	"fixtures": "_FAVEIN",
	"strategy": "modules",
	"clustering": {
		"neighNum": 10,
		"neihRadius": 0.15
	}
};
var issues = {
	"date": "2022-06-11T14:16:47.739Z",
	"strategy": "modules",
	"description": "Some modules should be transferred, according to Instability&Abstractness modules clustering",
	"issues": [
		{
			"module": "pages/errors/404",
			"similar": [
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
				"index.css",
				"pages/auth/sign-in",
				"pages/auth/sign-up",
				"pages/faves",
				"pages/user-cards",
				"serviceWorker.ts",
				"store",
				"index.tsx",
				"pages/card",
				"pages/dashboard",
				"pages/home",
				"pages/user",
				"pages/users",
				"pages/labels"
			]
		}
	],
	"noise": [
		"pages/admin"
	]
};
var datasets = [
	{
		"label": "pages/admin/{admin}",
		"backgroundColor": "gray",
		"pointRadius": 10,
		"data": [
			{
				"x": null,
				"y": 1,
				"label": "pages/admin"
			}
		]
	},
	{
		"label": "{*}",
		"backgroundColor": "red",
		"pointRadius": 10,
		"data": [
			{
				"x": 0,
				"y": 1,
				"label": "api"
			},
			{
				"x": 0.5,
				"y": 0.8666666666666667,
				"label": "components/card/add"
			},
			{
				"x": 0.5,
				"y": 0.9,
				"label": "components/card/form"
			},
			{
				"x": 0.4444444444444444,
				"y": 0.8666666666666667,
				"label": "components/card/item-compact"
			},
			{
				"x": 0.7777777777777778,
				"y": 0.7333333333333334,
				"label": "components/card/sheet"
			},
			{
				"x": 0,
				"y": 1,
				"label": "components/code-renderer"
			},
			{
				"x": 0.5,
				"y": 0.8666666666666667,
				"label": "components/comment"
			},
			{
				"x": 0.5,
				"y": 0.7,
				"label": "components/dashboard"
			},
			{
				"x": 0.07692307692307693,
				"y": 0.9333333333333333,
				"label": "components/header"
			},
			{
				"x": 0.2,
				"y": 0.9333333333333333,
				"label": "components/label"
			},
			{
				"x": 0.6666666666666666,
				"y": 0.7333333333333334,
				"label": "components/list"
			},
			{
				"x": 0,
				"y": 1,
				"label": "components/loader"
			},
			{
				"x": 0.25,
				"y": 0.9666666666666667,
				"label": "components/markdown"
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
				"label": "components/user"
			},
			{
				"x": 0,
				"y": 1,
				"label": "index.css"
			},
			{
				"x": 0.75,
				"y": 0.8666666666666667,
				"label": "pages/auth/sign-in"
			},
			{
				"x": 0.75,
				"y": 0.8666666666666667,
				"label": "pages/auth/sign-up"
			},
			{
				"x": 0.5,
				"y": 0.9,
				"label": "pages/errors/404"
			},
			{
				"x": 0.75,
				"y": 0.8,
				"label": "pages/faves"
			},
			{
				"x": 0.6,
				"y": 0.8,
				"label": "pages/user-cards"
			},
			{
				"x": 0,
				"y": 1,
				"label": "serviceWorker.ts"
			},
			{
				"x": 0.05263157894736842,
				"y": 0.9666666666666667,
				"label": "store"
			},
			{
				"x": 0.8529411764705882,
				"y": 0,
				"label": "index.tsx"
			},
			{
				"x": 0.8333333333333334,
				"y": 0,
				"label": "pages/card"
			},
			{
				"x": 0.8333333333333334,
				"y": 0,
				"label": "pages/dashboard"
			},
			{
				"x": 0.75,
				"y": 0,
				"label": "pages/home"
			},
			{
				"x": 0.9,
				"y": 0,
				"label": "pages/user"
			},
			{
				"x": 1,
				"y": 0.8666666666666667,
				"label": "pages/users"
			},
			{
				"x": 1,
				"y": 0,
				"label": "pages/labels"
			}
		]
	}
];
    