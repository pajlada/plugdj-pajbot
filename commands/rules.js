exports.names = ['rules'];
exports.hidden = false;
exports.enabled = true;
exports.matchStart = true;
exports.cd_all = 10;
exports.cd_user = 20;
exports.cd_manager = 5;
exports.handler = function (data) {
    assist(data.message, config.responses.rules);
};
