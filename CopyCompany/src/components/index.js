/**
 * Glob 导入：https://cn.vitejs.dev/guide/features.html#glob-import
 */
const globComponents = import.meta.glob(['./H5*.vue', './**/H5*.vue'], {eager: true});
export function install(app) {
  for (const esm of Object.values(globComponents)) {
    for (const component of Object.values(esm)) {
      app.component(component.name, component);
    }
  }
}
