const { getDomain } = require("tldts");

/**
 * @param {string} domain
 * @see https://github.com/salesforce/tough-cookie/blob/25a769c5cc7f2d86c0d2d021106793ab89303312/lib/getPublicSuffix.ts#L106
 */
exports.get = (domain) =>
  getDomain(domain, {
    allowIcannDomains: true,
    allowPrivateDomains: true,
  });
