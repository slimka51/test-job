import './vendor/focus-visible.min.js';
import './_vars';
import {resizeContent} from './functions/resize';
import {scrollTo} from './functions/smooth-scroll';
import {disableScroll, enableScroll} from './functions/stop-scroll';

//disableScroll(fix) // fix -> class of element with position: fixed

var x = document.getElementById("burger");

x.addEventListener("click", function () {
  x.classList.toggle("burger--active");
});