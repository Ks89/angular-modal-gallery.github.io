// GITHUB => use deploy config for github
const helpers                      = require('./helpers');

const GITHUB                       = helpers.hasNpmFlag('github');
const GITHUB_PATH                  = '/angular-modal-gallery.github.io';

exports.GITHUB                     = GITHUB;
exports.GITHUB_PATH                = GITHUB_PATH;
exports.IMAGE_PATH_PREFIX          = GITHUB ? GITHUB_PATH : '';