
var userConfig = {
	"fixtures": "FAVEIN",
	"strategy": "modules",
	"exts": [
		"tsx",
		"ts",
		"jsx",
		"js"
	],
	"clustering": {
		"neighNum": 1,
		"neighRadius": 0.06
	}
};
var issues = {
	"date": "2022-06-14T01:51:06.415Z",
	"strategy": "modules",
	"description": "Some modules should be transferred, according to Instability & Abstractness modules clustering",
	"issues": [
		{
			"module": "api",
			"similar": [
				"components/code-renderer",
				"components/loader",
				"components/rate",
				"components/text-field",
				"components/user"
			]
		},
		{
			"module": "serviceWorker.ts",
			"similar": [
				"components/code-renderer",
				"components/loader",
				"components/rate",
				"components/text-field",
				"components/user"
			]
		},
		{
			"module": "components/comment",
			"similar": [
				"components/card/add",
				"components/card/form",
				"components/card/item-compact"
			]
		},
		{
			"module": "components/card/sheet",
			"similar": []
		},
		{
			"module": "components/dashboard",
			"similar": []
		},
		{
			"module": "components/header",
			"similar": []
		},
		{
			"module": "store",
			"similar": []
		},
		{
			"module": "components/label",
			"similar": []
		},
		{
			"module": "components/list",
			"similar": []
		},
		{
			"module": "components/markdown",
			"similar": []
		},
		{
			"module": "index.tsx",
			"similar": []
		},
		{
			"module": "pages/errors/404",
			"similar": [
				"pages/auth/sign-in",
				"pages/auth/sign-up",
				"pages/users"
			]
		},
		{
			"module": "pages/card",
			"similar": []
		},
		{
			"module": "pages/dashboard",
			"similar": []
		},
		{
			"module": "pages/labels",
			"similar": []
		},
		{
			"module": "pages/user",
			"similar": []
		},
		{
			"module": "pages/faves",
			"similar": []
		},
		{
			"module": "pages/user-cards",
			"similar": []
		},
		{
			"module": "pages/home",
			"similar": []
		}
	],
	"noise": [
		"pages/admin"
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
				"y": 1,
				"label": "pages/admin"
			}
		]
	},
	{
		"label": "{api|components|serviceWorker.ts}",
		"backgroundColor": "red",
		"pointRadius": 10,
		"data": [
			{
				"x": 0,
				"y": 1,
				"label": "api"
			},
			{
				"x": 0,
				"y": 1,
				"label": "components/code-renderer"
			},
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
				"label": "components/user"
			},
			{
				"x": 0,
				"y": 1,
				"label": "serviceWorker.ts"
			}
		]
	},
	{
		"label": "components/{card|comment}",
		"backgroundColor": "green",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.5,
				"y": 0.8095238095238095,
				"label": "components/card/add"
			},
			{
				"x": 0.5,
				"y": 0.8571428571428572,
				"label": "components/card/form"
			},
			{
				"x": 0.4444444444444444,
				"y": 0.8095238095238095,
				"label": "components/card/item-compact"
			},
			{
				"x": 0.5,
				"y": 0.8095238095238095,
				"label": "components/comment"
			}
		]
	},
	{
		"label": "components/card/sheet/{sheet}",
		"backgroundColor": "blue",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.7777777777777778,
				"y": 0.6190476190476191,
				"label": "components/card/sheet"
			}
		]
	},
	{
		"label": "components/dashboard/{dashboard}",
		"backgroundColor": "pink",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.5,
				"y": 0.5714285714285714,
				"label": "components/dashboard"
			}
		]
	},
	{
		"label": "{components|store}",
		"backgroundColor": "cyan",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.07692307692307693,
				"y": 0.9047619047619048,
				"label": "components/header"
			},
			{
				"x": 0.05263157894736842,
				"y": 0.9523809523809523,
				"label": "store"
			}
		]
	},
	{
		"label": "components/label/{label}",
		"backgroundColor": "yellow",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.2,
				"y": 0.9047619047619048,
				"label": "components/label"
			}
		]
	},
	{
		"label": "components/list/{list}",
		"backgroundColor": "magenta",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.6666666666666666,
				"y": 0.6190476190476191,
				"label": "components/list"
			}
		]
	},
	{
		"label": "components/markdown/{markdown}",
		"backgroundColor": "orange",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.25,
				"y": 0.9523809523809523,
				"label": "components/markdown"
			}
		]
	},
	{
		"label": "index.tsx/{index.tsx}",
		"backgroundColor": "brown",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.8,
				"y": 0,
				"label": "index.tsx"
			}
		]
	},
	{
		"label": "pages/{auth|errors|users}",
		"backgroundColor": "violet",
		"pointRadius": 10,
		"data": [
			{
				"x": 1,
				"y": 0.8095238095238095,
				"label": "pages/auth/sign-in"
			},
			{
				"x": 1,
				"y": 0.8095238095238095,
				"label": "pages/auth/sign-up"
			},
			{
				"x": 1,
				"y": 0.8571428571428572,
				"label": "pages/errors/404"
			},
			{
				"x": 1,
				"y": 0.8095238095238095,
				"label": "pages/users"
			}
		]
	},
	{
		"label": "pages/{card|dashboard|labels|user}",
		"backgroundColor": "CornflowerBlue",
		"pointRadius": 10,
		"data": [
			{
				"x": 1,
				"y": 0,
				"label": "pages/card"
			},
			{
				"x": 1,
				"y": 0,
				"label": "pages/dashboard"
			},
			{
				"x": 1,
				"y": 0,
				"label": "pages/labels"
			},
			{
				"x": 1,
				"y": 0,
				"label": "pages/user"
			}
		]
	},
	{
		"label": "pages/{faves|user-cards}",
		"backgroundColor": "Cornsilk",
		"pointRadius": 10,
		"data": [
			{
				"x": 1,
				"y": 0.7142857142857143,
				"label": "pages/faves"
			},
			{
				"x": 1,
				"y": 0.7142857142857143,
				"label": "pages/user-cards"
			}
		]
	},
	{
		"label": "pages/home/{home}",
		"backgroundColor": "Coral",
		"pointRadius": 10,
		"data": [
			{
				"x": 0.6666666666666666,
				"y": 0,
				"label": "pages/home"
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
	"index.tsx",
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
	"index.tsx",
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
    