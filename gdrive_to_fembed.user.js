// ==UserScript==
// @name         Transfer Google Drive Videos to Fembed
// @namespace    https://github.com/hklcf/gdrive_to_fembed_userscript
// @version      0.1
// @description  Auto Transfer Google Drive Videos to Fembed
// @author       HKLCF
// @match        https://drive.google.com/file/d/*/view*
// @grant        GM_xmlhttpRequest
// @connect      fembed.com
// ==/UserScript==

(function() {
    'use strict';

    var ClIENT_ID = '';
    var ClIENT_SECRET = '';
    GM_xmlhttpRequest({
        method: 'POST',
        url: 'https://www.fembed.com/api/transfer',
        data: 'client_id=' + ClIENT_ID + '&client_secret=' + ClIENT_SECRET + '&links=["' + document.URL + '"]',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        onload: function(result) {
            var obj = JSON.parse(result.response);
            if(obj.success == false) {
                setTimeout(alert, 2000, obj.data); //delay 2s alert error
            }
        },
    });
})();
