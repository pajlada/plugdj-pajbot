exports.names = ['lockskip'];
exports.hidden = true;
exports.enabled = true;
exports.matchStart = false;
exports.cd_all = 3;
exports.cd_user = 3;
exports.cd_manager = 3;
exports.min_role = PERMISSIONS.BOUNCER;
exports.handler = function (data) {
    var media = bot.getMedia();
    var dj = bot.getDJ();

    console.info('[LOCKSKIP] ' + data.from.username + ' lockskipped ' + dj.username);

    var userData = {
        type: 'lockskip',
        details: 'Skipped by ' + data.from.username,
        user_id: dj.id,
        mod_user_id: data.from.id
    };
    Karma.create(userData);

    modMessage(data, 'Lockskipped the current song.');
    lockskip(dj);
};
