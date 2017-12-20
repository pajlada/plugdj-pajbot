exports.names = ['catfact'];
exports.hidden = true;
exports.enabled = true;
exports.matchStart = false;
exports.cd_all = 15;
exports.cd_user = 30;
exports.cd_manager = 10;
exports.min_role = PERMISSIONS.RDJ;
exports.handler = function (data) {
        request('https://catfact.ninja/fact', function (error, response, body) {
            try {
                chatMessage(JSON.parse(body).fact + ' :smartcat:');
            } catch (e) {
                console.log(e);
            }
        });
};
