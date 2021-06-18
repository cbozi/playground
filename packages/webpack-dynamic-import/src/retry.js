const domains = ["yfd.fbcontent.cn", "yfd1.fbcontent.cn"];
/**
 *
 * @param {*} importFn () => import()
 */
export default function retry(
  importFn,
  { originalPublicPath, lastPublicPath, retryTimes } = {}
) {
  return importFn().catch((e) => {
    const publicPath = lastPublicPath || __webpack_public_path__;
    originalPublicPath = originalPublicPath || publicPath;

    let url;
    try {
      url = new URL(publicPath);
    } catch {
      url = new URL(location.origin + publicPath);
    }
    const domain = url.host;

    let index = domains.indexOf(domain);
    if (index !== -1 && index !== domains.length - 1) {
      const nextDomain = domains[index + 1];
      url.host = nextDomain;
      const nextPublicPath = url.href;
      __webpack_public_path__ = nextPublicPath;
      const retryPromise = retry(importFn, {
        originalPublicPath,
        lastPublicPath: nextPublicPath,
        retryTimes: (retryTimes || 0) + 1,
      });
      __webpack_public_path__ = originalPublicPath;
      return retryPromise;
    }

    throw e;
  });
}
