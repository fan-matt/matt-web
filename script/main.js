"use strict";

import {run} from "./introRunner.js";
import {scroll} from "./fadeInOnScroll.js";
import {runImageLoader} from "./imageLoader.js";

$(document).ready(function() {
    run();
    scroll();
    runImageLoader();
});