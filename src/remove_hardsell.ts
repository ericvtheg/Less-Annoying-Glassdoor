function init () {
    $("#ContentWallHardsell").remove();
    window.onscroll = null;
    $("body").css({"height": "unset", "overflow": "unset"});
}

init();

setTimeout(init, 2000);