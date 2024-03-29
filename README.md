# [🍰 archpolisher](https://www.npmjs.com/package/archpolisher)

> `WIP:` At the moment at work  - **use carefully**
>
> <sup>(C) KPFU ITIS diploma work 2022</sup>

**Architecture analyze toolkit**

- calculate architectural metrics (Instability & Abstractness)
- clusterize modules and search architectural issues
- provides interactive UI with issues details

![screen-ui](https://raw.githubusercontent.com/azinit/archpolisher/master/assets/screen-ui.png)

## Get Started

1. Setup user config `.archpolisherrc`

    ```js
    {
        /** modules | files */
        "strategy": "modules",
        /** Analysis options (files filter, module graph rollout depth) */
        "analyzer": {
            "extensions": ["tsx", "ts", "jsx", "js"],
            "abstractnessDepth": 5,
            "root": "./src/index.ts",
        },
        /** Clustering options (neares neighbours num and neighbours nums) */
        "clustering": {
            "neighNum": 1,
            "neighRadius": 0.05
            "spread": 0.00,
            "withFSDist": true,
        },
        /** Refactor options (dists, ui) */
        "refactorer": {
            "onlyIssues": false,
            "minDist": 1,
            "minDiff": 3,
        },
    }
    ```

2. Run toolkit

    ```sh
    $ npx archpolisher
    ```

<!-- 
## Roadmap

WIP...

## See also

WIP... -->
