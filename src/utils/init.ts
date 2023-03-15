import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { loader } from '@monaco-editor/react';

export function init(version: string) {
  // sentry监控 init
  Sentry.init({
    dsn: 'https://15ccaade365742cf8adfd52b9634ba88@o4504821133148160.ingest.sentry.io/4504838823215104',
    integrations: [
      new Integrations.BrowserTracing({
        shouldCreateSpanForRequest(url) {
          return !url.includes('/api/ws') && !url.includes('/api/static');
        },
      }),
    ],
    release: version,
    tracesSampleRate: 0.1,
    beforeBreadcrumb(breadcrumb, hint?) {
      if (breadcrumb.data && breadcrumb.data.url) {
        const url = breadcrumb.data.url.replace(/token=.*/, '');
        breadcrumb.data.url = url;
      }
      return breadcrumb;
    },
  });

  // monaco 编辑器配置cdn和locale
  loader.config({
    paths: {
      vs: 'https://cdn.staticfile.org/monaco-editor/0.33.0/min/vs',
    },
    'vs/nls': {
      availableLanguages: {
        '*': 'zh-cn',
      },
    },
  });
}
