"use strict";
exports.__esModule = true;
exports.getEntryAsync = exports.getEntry = void 0;
var fs = require('fs');
var path = require('path');
var isFile = require('./fsTool').isFile;
var isAppointFile = require('./fsTool').isAppointFile;
var getFilesName = require('./fsTool').getFilesName;
var entry = {};
var filePath = 'html';
var htmlTemplateAttribute = [];
function getEntry(paths) {
    fs.readdir(paths, { withFileTypes: true }, function (err, files) {
        if (err)
            throw console.error('reddir');
        files.forEach(function (val) {
            if (!isFile(val.name)) {
                getEntry(path.resolve(paths, val.name));
            }
            else if (isAppointFile(val.name, 'html')) {
                var fileName = getFilesName(val.name);
                if (fileName) {
                    entry[fileName] = val.name;
                }
            }
        });
    });
}
exports.getEntry = getEntry;
/**
 * 同步方法更新path
 * @param p path
 */
function getEntryAsync(p) {
    try {
        var dirent_1 = fs.readdirSync(p, { withFileTypes: true });
        dirent_1.forEach(function (val) {
            if (!isFile(val.name)) {
                getEntryAsync(path.resolve(p, val.name));
            }
            else if (isAppointFile(val.name, 'js')) {
                var fileName = getFilesName(val.name);
                if (fileName) {
                    var fileLastName = p.split('/');
                    if (fileLastName.length > 1) {
                        var prefixFile = fileLastName[fileLastName.length - 1];
                        entry[prefixFile + '_' + fileName] = p + '/' + val.name;
                    }
                }
            }
            else if (isAppointFile(val.name, 'ts')) {
                var fileName_1 = getFilesName(val.name);
                if (fileName_1) {
                    var fileLastName = p.split('/');
                    if (fileLastName.length > 1) {
                        var prefixFile = fileLastName[fileLastName.length - 1];
                        entry[prefixFile + '_' + fileName_1] = p + '/' + val.name;
                        var index = dirent_1.findIndex(function (val) { return val.name === [fileName_1, filePath].join('.'); });
                        if (index > -1) {
                            htmlTemplateAttribute.push({
                                template: p + '/' + val.name.replace('ts', filePath),
                                filename: prefixFile + '_' + fileName_1 + '.' + filePath,
                                chunks: [prefixFile + '_' + fileName_1]
                            });
                        }
                    }
                }
            }
        });
    }
    catch (e) {
        console.error(e);
    }
}
exports.getEntryAsync = getEntryAsync;
getEntryAsync('./src/demo');
console.log(htmlTemplateAttribute);
module.exports = {
    entry: entry
};
