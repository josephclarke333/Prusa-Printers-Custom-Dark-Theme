// ==UserScript==
// @name          Prusa Printers Custom Dark Theme
// @namespace     http://userstyles.org
// @description	  A simple customizable dark theme for Prusa Printers which allows  you to select your colors, border and navbar settings. This is still  a work in progress so please bear with me.
// @author        Joseph Clarke
// @homepage      https://userstyles.org/styles/234178
// @include       http://prusaprinters.org/*
// @include       https://prusaprinters.org/*
// @include       http://*.prusaprinters.org/*
// @include       https://*.prusaprinters.org/*
// @run-at        document-start
// @version       0.20220322125105
// ==/UserScript==
(function() {var css = [
	"/*///////// Colors /////////*/",
	"",
	":root",
	"{",
	"    --background-primary: #111111;",
	"    --background-secondary: #000000;",
	"    --background-selected: #FA6831;",
	"    --background-tertiary: #282828;",
	"    --background-navbar: #000000;",
	"    ",
	"    --text-primary: #FFFFFF;",
	"    --text-secondary: #FFFFFF;",
	"    --text-selected: #FFFFFF;",
	"    --text-navbar: #FFFFFF;",
	"    ",
	"    --highlight-primary: #FA6831;",
	"    ",
	"    --border-radius: 25px;",
	"    --border-radius-small: 5px;",
	"    --border-width: 2px;",
	"    --border-navbar-width: 52px;",
	"}",
	"",
	"/*///////// Basic /////////*/",
	"",
	"/* Primary Background */",
	".featured-prints, div .content, div .fullwidth-container, body, app-blogposts",
	"{",
	"    background: var(--background-primary) !important;",
	"}",
	"",
	"/* Secondary Backgrounds */",
	"div .print-list-item, div .accordion-item section, div .categories, .user-info-wrapper-border",
	"{",
	"    background: var(--background-secondary) !important;",
	"}",
	"",
	"/* Tertiary Background */",
	".badge-primary",
	"{",
	"    background: var(--background-tertiary) !important;",
	"}",
	"",
	"/* Background Selected */",
	".accordion-item .active a, .contests-link, .badge-dark, .nav-item .active, .info-box-wrapper, .btn",
	"{",
	"    background: var(--background-selected) !important;",
	"}",
	"",
	"/*///////// Text /////////*/",
	"",
	"/* Text Primary */",
	".print-list-item a, div .accordion-item, .dropdown-title, div .categories *, .contests-link, #print-list-header, #print-list-header div, div .content, i, .contest-card *, .nav-item *, .published-prints-header h2, .user-info-wrapper-border *",
	"{",
	"    color: var(--text-primary) !important;",
	"}",
	"",
	"/* Text Secondary */",
	".ng-select",
	"{",
	"    color: var(--text-secondary) !important;",
	"}",
	"",
	"/* Text Selected */",
	".accordion-item .active a, .nav-item .active, .info-box-wrapper, .btn",
	"{",
	"    color: var(--text-selected) !important;",
	"}",
	"",
	"/* Text Hover Secondary */",
	".contests-link:hover",
	"{",
	"    color: var(--text-secondary) !important;",
	"}",
	"",
	"/*///////// Borders  /////////*/",
	"",
	"/* Print List Items */",
	"div .print-list-item",
	"{",
	"    border-color: var(--highlight-primary) !important;",
	"    border-radius: var(--border-radius) !important;",
	"    border-width: var(--border-width) !important;",
	"}",
	"",
	"/* Side Bar */",
	".accordion-item market-filter-item , .accordion-item .categories, .accordion-item .categories *, .contests-link, .accordion-item ul, .accordion-item li a, .user-info-wrapper-border",
	"{",
	"    border-color: var(--highlight-primary) !important;",
	"    border-width: var(--border-width) !important;  ",
	"}",
	"",
	"/* Border Square */",
	".contest-card",
	"{",
	"    border-color: var(--highlight-primary) !important;",
	"    border-radius: 0px !important;",
	"    border-width: var(--border-width) !important;   ",
	"}",
	"",
	"/* Other */",
	".info-box-wrapper, .btn, .badge-primary",
	"{",
	"    border-color: var(--highlight-primary) !important;",
	"    border-radius: var(--border-radius-small) !important;",
	"    border-width: var(--border-width) !important;  ",
	"}",
	"",
	"/*///////// Overwrite Issues /////////*/",
	"/* Button Group Borders */",
	".detail-content div button",
	"{",
	"    border-color: var(--background-primary) !important;",
	"    border-radius: var(--border-radius-small) !important;",
	"    border-width: var(--border-width) !important;",
	"}",
	"",
	"/* Like Button */",
	".align-items-center .icon-like-not-liked",
	"{",
	"    border-width: 0px !important;",
	"    background: var(--background-secondary) !important;",
	"}",
	"",
	"",
	"/*/////////  NavBar /////////*/",
	"",
	"/* Main Colors */",
	".header-menu *",
	"{",
	"    background: var(--background-navbar) !important;",
	"    color: var(--text-navbar) !important;",
	"}",
	"",
	"/* Bottom Border */",
	".header-menu",
	"{",
	"    border-bottom-style: solid !important;",
	"    border-color: var(--highlight-primary) !important;",
	"    border-width: var(--border-navbar-width) !important;",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
