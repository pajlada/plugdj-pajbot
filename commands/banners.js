exports.names = ['banners', 'banner'];
exports.hidden = false;
exports.enabled = true;
exports.matchStart = true;
exports.cd_all = 15;
exports.cd_user = 30;
exports.cd_manager = 2;
exports.min_role = PERMISSIONS.NONE;
exports.handler = function (data) {
    chatMessage('/me Check out -Vaxom\'s banners here: http://imgur.com/a/bYuHO');
};
