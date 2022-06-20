#!/usr/bin/env node

import { parseProject } from "./analyzer/parser";
import * as archpolisher from "./run";

parseProject().then(archpolisher.run);
