exports.names = ['.status', '!status'];
exports.hidden = false;
exports.enabled = true;
exports.matchStart = true;
exports.cd_all = 0;
exports.cd_user = 0;
exports.cd_manager = 0;
exports.handler = function (data) {
    if (data.from.role > 1) {
        var relevant_settings = ['autoskip', 'timeguard', 'dctimer', 'maxlength'];
        var str_array = [];
        _.each(relevant_settings, function(setting) {
            if (setting in settings && setting in setting_names) {
                str_array.push(setting_names[setting] + ': ' + setting_value_verbose(setting));
            }
        });
        modMessage(data, str_array.join(', '));
    }
};