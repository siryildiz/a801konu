// ==UserScript==
// @name         Atelier801 - Konu Sayacı
// @version      0.1
// @description  Bu eklenti sayesinde forumda açtığınız konu sayısını kolayca bulabilirsiniz.
// @author       Oburiks
// @match        http://atelier801.com/*topics-started?pr=*
// @grant        none
// ==/UserScript==
/* jshint -W097 */

var sayi = $("#corps > div.row > .span12 > .cadre-sujet").length;
$(".corps.clear.container > div.row:first-child").before('<div id="ilkkonu" style="display: none;"></div>');
$(".corps.clear.container > #ilkkonu").before('<span class="cadre" style="font-weight: bold;">Açılan konu sayısı: '+sayi+'</span> <hr />');
