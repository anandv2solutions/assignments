// vite.config.ts
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/vite@4.0.4_@types+node@18.11.18_sass@1.57.1/node_modules/vite/dist/node/index.js";
import Vue from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/@vitejs+plugin-vue@4.0.0_vite@4.0.4_vue@3.2.45/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueRouter from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/unplugin-vue-router@0.3.0_rollup@3.9.1_vue-router@4.1.6_vue@3.2.45/node_modules/unplugin-vue-router/dist/vite.mjs";
import { VueRouterAutoImports } from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/unplugin-vue-router@0.3.0_rollup@3.9.1_vue-router@4.1.6_vue@3.2.45/node_modules/unplugin-vue-router/dist/index.mjs";
import Components from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/unplugin-vue-components@0.22.12_rollup@3.9.1_vue@3.2.45/node_modules/unplugin-vue-components/dist/vite.mjs";
import AutoImport from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/unplugin-auto-import@0.12.1_@vueuse+core@9.10.0_rollup@3.9.1/node_modules/unplugin-auto-import/dist/vite.js";
import { VitePluginFonts } from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/vite-plugin-fonts@0.7.0_vite@4.0.4/node_modules/vite-plugin-fonts/dist/index.js";
import { VitePluginRadar } from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/vite-plugin-radar@0.6.0_vite@4.0.4/node_modules/vite-plugin-radar/dist/index.js";
import PurgeIcons from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/vite-plugin-purge-icons@0.9.2_vite@4.0.4/node_modules/vite-plugin-purge-icons/dist/index.mjs";
import ImageMin from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/vite-plugin-imagemin@0.6.1_vite@4.0.4/node_modules/vite-plugin-imagemin/dist/index.mjs";
import VueI18nPlugin from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/@intlify+unplugin-vue-i18n@0.8.1_vue-i18n@9.3.0-beta.12/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import { VitePWA } from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/vite-plugin-pwa@0.14.1_vite@4.0.4_workbox-build@6.5.4_workbox-window@6.5.4/node_modules/vite-plugin-pwa/dist/index.mjs";
import purgecss from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/rollup-plugin-purgecss@5.0.0/node_modules/rollup-plugin-purgecss/lib/rollup-plugin-purgecss.js";

// vite-plugin-vuero-doc/index.ts
import { join, basename } from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/pathe@1.0.0/node_modules/pathe/dist/index.mjs";
import { compileTemplate, parse } from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/@vue+compiler-sfc@3.2.45/node_modules/@vue/compiler-sfc/dist/compiler-sfc.cjs.js";

// vite-plugin-vuero-doc/markdown.ts
import yaml from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/js-yaml@4.1.0/node_modules/js-yaml/dist/js-yaml.mjs";
import remarkShiki from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/@stefanprobst+remark-shiki@2.2.0/node_modules/@stefanprobst/remark-shiki/src/index.js";
import rehypeExternalLinks from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/rehype-external-links@2.0.1/node_modules/rehype-external-links/index.js";
import rehypeRaw from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/rehype-raw@6.1.1/node_modules/rehype-raw/index.js";
import rehypeSlug from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/rehype-slug@5.1.0/node_modules/rehype-slug/index.js";
import rehypeAutolinkHeadings from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/rehype-autolink-headings@6.1.1/node_modules/rehype-autolink-headings/index.js";
import rehypeStringify from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/rehype-stringify@9.0.3/node_modules/rehype-stringify/index.js";
import remarkParse from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/remark-parse@10.0.1/node_modules/remark-parse/index.js";
import remarkGfm from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/remark-gfm@3.0.1/node_modules/remark-gfm/index.js";
import remarkRehype from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/remark-rehype@10.1.0/node_modules/remark-rehype/index.js";
import remarkFrontmatter from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/remark-frontmatter@4.0.1/node_modules/remark-frontmatter/index.js";
import { getHighlighter } from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/shiki-es@0.1.2/node_modules/shiki-es/dist/shiki.node.mjs";
import { unified } from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/unified@10.1.2/node_modules/unified/index.js";
var langs = ["vue", "vue-html", "typescript", "bash", "scss"];
async function createProcessor(theme) {
  const highlighter = await getHighlighter({
    theme,
    langs
  });
  return unified().use(remarkParse).use(remarkFrontmatter).use(() => (tree, file) => {
    if (tree.children[0].type === "yaml") {
      file.data.frontmatter = yaml.load(tree.children[0].value);
    }
  }).use(remarkGfm).use(remarkShiki, { highlighter }).use(remarkRehype, { allowDangerousHtml: true }).use(rehypeRaw).use(rehypeExternalLinks, { rel: ["nofollow"], target: "_blank" }).use(rehypeSlug).use(rehypeAutolinkHeadings, {
    behavior: "append",
    content: {
      type: "element",
      tagName: "i",
      properties: {
        className: ["iconify toc-link-anchor"],
        dataIcon: "feather:link"
      },
      children: []
    }
  }).use(rehypeStringify);
}
async function createProcessors(theme) {
  return {
    light: await createProcessor(typeof theme === "string" ? theme : theme.light),
    dark: await createProcessor(typeof theme === "string" ? theme : theme.dark)
  };
}

// vite-plugin-vuero-doc/transform.ts
import { kebabCase } from "file:///C:/Users/anand.kumar/Desktop/assignments/node_modules/.pnpm/scule@1.0.0/node_modules/scule/dist/index.mjs";
var SELF_CLOSING_TAG_REGEX = /<([^\s></]+)([^>]+)\/>/g;
var OPEN_TAG_REGEX = /<([^\s></]+)/g;
var CLOSE_TAG_REGEX = /<\/([^\s></]+)/g;
function transformExampleMarkup(raw) {
  let output = raw;
  let content = null;
  if (content = raw.match(/<!--example-->([\s\S]*?)<!--\/example-->/)) {
    const kebabContent = content[1].replaceAll(SELF_CLOSING_TAG_REGEX, (substring, tag) => {
      return substring.replace("/>", `></${tag.trim()}>`);
    }).replaceAll(OPEN_TAG_REGEX, (substring) => {
      return `<${kebabCase(substring.substring(1).trim())}`;
    }).replaceAll(CLOSE_TAG_REGEX, (substring) => {
      return `</${kebabCase(substring.substring(2).trim())}`;
    }).replaceAll("&#x27;", "'");
    output = output.replace(content[1], kebabContent);
  }
  return output;
}
function transformSlots(source, condition = "") {
  if (source.includes("<!--code-->") && source.includes("<!--example-->")) {
    return `<template ${condition} #default>${source}`.replace(
      `<!--code-->`,
      `</template><template ${condition} #code>
<slot name="code"><div v-pre>`
    ).replace(`<!--/code-->`, `</div></slot>
</template>`).replace(
      `<!--example-->`,
      `<template ${condition} #example>
<slot name="example">`
    ).replace(`<!--/example-->`, `</slot>
</template>`);
  }
  if (source.includes("<!--code-->")) {
    return `<template ${condition} #default>${source}`.replace(
      `<!--code-->`,
      `</template><template ${condition} #code>
<slot name="code"><div v-pre>`
    ).replace(`<!--/code-->`, `</div></slot>
</template>`);
  }
  if (source.includes("<!--example-->")) {
    return `<template ${condition} #default>${source}`.replace(
      `<!--example-->`,
      `</template><template ${condition} #example>
<slot name="example">`
    ).replace(`<!--/example-->`, `</slot>
</template>`);
  }
  return `<template ${condition} #default>${source}</template>`;
}

// vite-plugin-vuero-doc/index.ts
function parseId(id) {
  const index = id.indexOf("?");
  if (index < 0)
    return id;
  else
    return id.slice(0, index);
}
function VitePluginVueroDoc(options) {
  let config;
  let processors;
  const cwd = process.cwd();
  const pathPrefix = options.pathPrefix ? join(cwd, options.pathPrefix) : cwd;
  async function markdownToVue(id, raw) {
    var _a, _b;
    const path = parseId(id);
    const input = transformExampleMarkup(raw);
    if (!processors)
      processors = await createProcessors(options.shiki.theme);
    const [vFileLight, vFileDark] = await Promise.all([
      processors.light.process(input),
      processors.dark.process(input)
    ]);
    const contentLight = vFileLight.toString();
    const contentDark = vFileDark.toString();
    const frontmatter = ((_a = vFileLight.data) == null ? void 0 : _a.frontmatter) ?? {};
    const slotLight = transformSlots(contentLight, 'v-if="!darkmode.isDark"');
    const slotDark = transformSlots(contentDark, 'v-if="darkmode.isDark"');
    const sfc = [
      `<template>`,
      `  <${options.wrapperComponent} :frontmatter="frontmatter" :source-meta="sourceMeta">`,
      `    ${slotLight}`,
      `    ${slotDark}`,
      `  </${options.wrapperComponent}>`,
      `</template>`
    ].join("\n");
    const result = parse(sfc, {
      filename: path,
      sourceMap: true
    });
    if (result.errors.length || result.descriptor.template === null) {
      console.error(result.errors);
      throw new Error(`Markdown: unable to parse virtual file generated for "${id}"`);
    }
    const { code, errors } = compileTemplate({
      filename: path,
      id: path,
      source: result.descriptor.template.content,
      preprocessLang: result.descriptor.template.lang,
      transformAssetUrls: false
    });
    if (errors.length) {
      console.error(errors);
      throw new Error(`Markdown: unable to compile virtual file "${id}"`);
    }
    let sourceMeta = "undefined";
    if ((_b = options.sourceMeta) == null ? void 0 : _b.enabled) {
      sourceMeta = JSON.stringify({
        relativePath: path.substring(cwd.length),
        basename: basename(path),
        path: (config == null ? void 0 : config.isProduction) ? "" : path,
        editProtocol: (config == null ? void 0 : config.isProduction) ? "" : options.sourceMeta.editProtocol
      });
    }
    const output = [
      `import { reactive } from 'vue'`,
      `import { useDarkmode } from '/@src/stores/darkmode'`,
      code.replace("export function render", "function render"),
      `const __frontmatter = ${JSON.stringify(frontmatter)};`,
      `const setup = () => ({`,
      `  frontmatter: reactive(__frontmatter),`,
      `  darkmode: useDarkmode(),`,
      `  sourceMeta: ${sourceMeta},`,
      `});`,
      `const __script = { render, setup };`,
      (config == null ? void 0 : config.isProduction) ? "" : `__script.__hmrId = ${JSON.stringify(path)};`,
      `export default __script;`
    ].join("\n");
    return output;
  }
  return {
    name: "vite-plugin-vuero-doc",
    enforce: "pre",
    configResolved(_config) {
      config = _config;
    },
    async transform(raw, id) {
      if (id.endsWith(".md") && id.startsWith(pathPrefix)) {
        return await markdownToVue(id, raw);
      }
    }
  };
}

// vite.config.ts
var __vite_injected_original_import_meta_url = "file:///C:/Users/anand.kumar/Desktop/assignments/vite.config.ts";
var MINIFY_IMAGES = process.env.MINIFY ? process.env.MINIFY === "true" : false;
var vite_config_default = defineConfig({
  root: process.cwd(),
  base: "/",
  publicDir: "public",
  logLevel: "info",
  server: {
    port: 3e3
  },
  optimizeDeps: {
    include: [
      "@ckeditor/ckeditor5-vue",
      "@ckeditor/ckeditor5-build-classic",
      "@iconify/iconify",
      "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js",
      "@vee-validate/zod",
      "@vueuse/core",
      "@vueuse/head",
      "@vueform/multiselect",
      "@vueform/slider",
      "axios",
      "billboard.js",
      "dayjs",
      "dropzone",
      "dragula",
      "defu",
      "filepond",
      "filepond-plugin-file-validate-size",
      "filepond-plugin-file-validate-type",
      "filepond-plugin-image-exif-orientation",
      "filepond-plugin-image-crop",
      "filepond-plugin-image-edit",
      "filepond-plugin-image-preview",
      "filepond-plugin-image-resize",
      "filepond-plugin-image-transform",
      "imask",
      "nprogress",
      "notyf",
      "mapbox-gl",
      "photoswipe/lightbox",
      "photoswipe",
      "plyr",
      "v-calendar",
      "vee-validate",
      "vue",
      "vue-scrollto",
      "vue3-apexcharts",
      "vue-tippy",
      "vue-i18n",
      "vue-router",
      "unplugin-vue-router/runtime",
      "simplebar",
      "simple-datatables",
      "tiny-slider/src/tiny-slider",
      "vue-accessible-color-picker",
      "zod",
      "@stefanprobst/remark-shiki",
      "rehype-external-links",
      "rehype-raw",
      "rehype-sanitize",
      "rehype-stringify",
      "rehype-slug",
      "rehype-autolink-headings",
      "remark-gfm",
      "remark-parse",
      "remark-rehype",
      "shiki-es",
      "unified",
      "workbox-window",
      "textarea-markdown-editor/dist/esm/bootstrap"
    ],
    disabled: false
  },
  resolve: {
    alias: [
      {
        find: "/@src/",
        replacement: `/src/`
      }
    ]
  },
  build: {
    minify: "terser",
    assetsInlineLimit: 4096 * 2,
    commonjsOptions: { include: [] }
  },
  plugins: [
    Vue({
      include: [/\.vue$/]
    }),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(__vite_injected_original_import_meta_url)), "./src/locales/**"),
      fullInstall: false,
      compositionOnly: true
    }),
    VueRouter({
      routesFolder: "src/pages",
      dataFetching: true
    }),
    AutoImport({
      dts: true,
      imports: ["vue", "@vueuse/core", VueRouterAutoImports]
    }),
    VitePluginVueroDoc({
      pathPrefix: "documentation",
      wrapperComponent: "DocumentationItem",
      shiki: {
        theme: {
          light: "min-light",
          dark: "github-dark"
        }
      },
      sourceMeta: {
        enabled: true,
        editProtocol: "vscode://vscode-remote/wsl+Ubuntu"
      }
    }),
    Components({
      dirs: ["documentation", "src/components", "src/layouts"],
      extensions: ["vue", "md"],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    }),
    PurgeIcons(),
    VitePluginFonts({
      google: {
        families: [
          {
            name: "Fira Code",
            styles: "wght@400;600"
          },
          {
            name: "Montserrat",
            styles: "wght@500;600;700;800;900"
          },
          {
            name: "Roboto",
            styles: "wght@300;400;500;600;700"
          }
        ]
      }
    }),
    !process.env.GTM_ID ? void 0 : VitePluginRadar({
      gtm: {
        id: process.env.GTM_ID
      }
    }),
    VitePWA({
      base: "/",
      includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Vuero - A complete Vue 3 design system",
        short_name: "Vuero",
        start_url: "/?utm_source=pwa",
        display: "standalone",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    purgecss({
      output: false,
      content: [`./src/**/*.vue`],
      variables: false,
      safelist: {
        standard: [
          /(autv|lnil|lnir|fas?)/,
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!(|.*?:)cursor-move).+-move$/,
          /^router-link(|-exact)-active$/,
          /data-v-.*/
        ]
      },
      defaultExtractor(content) {
        const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, "");
        return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
      }
    }),
    !MINIFY_IMAGES ? void 0 : ImageMin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 60
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
            active: false
          },
          {
            name: "removeEmptyAttrs",
            active: false
          }
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidml0ZS1wbHVnaW4tdnVlcm8tZG9jL2luZGV4LnRzIiwgInZpdGUtcGx1Z2luLXZ1ZXJvLWRvYy9tYXJrZG93bi50cyIsICJ2aXRlLXBsdWdpbi12dWVyby1kb2MvdHJhbnNmb3JtLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYW5hbmQua3VtYXJcXFxcRGVza3RvcFxcXFxhc3NpZ25tZW50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYW5hbmQua3VtYXJcXFxcRGVza3RvcFxcXFxhc3NpZ25tZW50c1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvYW5hbmQua3VtYXIvRGVza3RvcC9hc3NpZ25tZW50cy92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IHJlc29sdmUsIGRpcm5hbWUgfSBmcm9tICdub2RlOnBhdGgnXHJcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICdub2RlOnVybCdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IFZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlci92aXRlJ1xyXG5pbXBvcnQgeyBWdWVSb3V0ZXJBdXRvSW1wb3J0cyB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXInXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXHJcbmltcG9ydCB7IFZpdGVQbHVnaW5Gb250cyB9IGZyb20gJ3ZpdGUtcGx1Z2luLWZvbnRzJ1xyXG5pbXBvcnQgeyBWaXRlUGx1Z2luUmFkYXIgfSBmcm9tICd2aXRlLXBsdWdpbi1yYWRhcidcclxuaW1wb3J0IFB1cmdlSWNvbnMgZnJvbSAndml0ZS1wbHVnaW4tcHVyZ2UtaWNvbnMnXHJcbmltcG9ydCBJbWFnZU1pbiBmcm9tICd2aXRlLXBsdWdpbi1pbWFnZW1pbidcclxuaW1wb3J0IFZ1ZUkxOG5QbHVnaW4gZnJvbSAnQGludGxpZnkvdW5wbHVnaW4tdnVlLWkxOG4vdml0ZSdcclxuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSdcclxuaW1wb3J0IHB1cmdlY3NzIGZyb20gJ3JvbGx1cC1wbHVnaW4tcHVyZ2Vjc3MnXHJcblxyXG4vLyBsb2NhbCB2aXRlIHBsdWdpblxyXG5pbXBvcnQgeyBWaXRlUGx1Z2luVnVlcm9Eb2MgfSBmcm9tICcuL3ZpdGUtcGx1Z2luLXZ1ZXJvLWRvYydcclxuXHJcbi8vIG9wdGlvbnMgdmlhIGVudiB2YXJpYWJsZXNcclxuY29uc3QgTUlOSUZZX0lNQUdFUyA9IHByb2Nlc3MuZW52Lk1JTklGWSA/IHByb2Nlc3MuZW52Lk1JTklGWSA9PT0gJ3RydWUnIDogZmFsc2VcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIHRoZSBtYWluIGNvbmZpZ3VyYXRpb24gZmlsZSBmb3Igdml0ZWpzXHJcbiAqXHJcbiAqIEBzZWUgaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZ1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAvLyBQcm9qZWN0IHJvb3QgZGlyZWN0b3J5ICh3aGVyZSBpbmRleC5odG1sIGlzIGxvY2F0ZWQpLlxyXG4gIHJvb3Q6IHByb2Nlc3MuY3dkKCksXHJcbiAgLy8gQmFzZSBwdWJsaWMgcGF0aCB3aGVuIHNlcnZlZCBpbiBkZXZlbG9wbWVudCBvciBwcm9kdWN0aW9uLlxyXG4gIC8vIFlvdSBhbHNvIG5lZWQgdG8gYWRkIHRoaXMgYmFzZSBsaWtlIGBoaXN0b3J5OiBjcmVhdGVXZWJIaXN0b3J5KCdteS1zdWJkaXJlY3RvcnknKWBcclxuICAvLyBpbiAuL3NyYy9yb3V0ZXIudHNcclxuICAvLyBiYXNlOiAnL215LXN1YmRpcmVjdG9yeS8nLFxyXG4gIGJhc2U6ICcvJyxcclxuICAvLyBEaXJlY3RvcnkgdG8gc2VydmUgYXMgcGxhaW4gc3RhdGljIGFzc2V0cy5cclxuICBwdWJsaWNEaXI6ICdwdWJsaWMnLFxyXG4gIC8vIEFkanVzdCBjb25zb2xlIG91dHB1dCB2ZXJib3NpdHkuXHJcbiAgbG9nTGV2ZWw6ICdpbmZvJyxcclxuICAvLyBkZXZlbG9wbWVudCBzZXJ2ZXIgY29uZmlndXJhdGlvblxyXG4gIHNlcnZlcjoge1xyXG4gICAgLy8gVml0ZSA0IGRlZmF1bHRzIHRvIDUxNzMsIGJ1dCB5b3UgY2FuIG92ZXJyaWRlIGl0IHdpdGggdGhlIHBvcnQgb3B0aW9uLlxyXG4gICAgcG9ydDogMzAwMCxcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIEJ5IGRlZmF1bHQsIFZpdGUgd2lsbCBjcmF3bCB5b3VyIGluZGV4Lmh0bWwgdG8gZGV0ZWN0IGRlcGVuZGVuY2llcyB0aGF0XHJcbiAgICogbmVlZCB0byBiZSBwcmUtYnVuZGxlZC4gSWYgYnVpbGQucm9sbHVwT3B0aW9ucy5pbnB1dCBpcyBzcGVjaWZpZWQsXHJcbiAgICogVml0ZSB3aWxsIGNyYXdsIHRob3NlIGVudHJ5IHBvaW50cyBpbnN0ZWFkLlxyXG4gICAqXHJcbiAgICogQHNlZSBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnLyNvcHRpbWl6ZWRlcHMtZW50cmllc1xyXG4gICAqL1xyXG4gIG9wdGltaXplRGVwczoge1xyXG4gICAgaW5jbHVkZTogW1xyXG4gICAgICAnQGNrZWRpdG9yL2NrZWRpdG9yNS12dWUnLFxyXG4gICAgICAnQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljJyxcclxuICAgICAgJ0BpY29uaWZ5L2ljb25pZnknLFxyXG4gICAgICAnQG1hcGJveC9tYXBib3gtZ2wtZ2VvY29kZXIvZGlzdC9tYXBib3gtZ2wtZ2VvY29kZXIubWluLmpzJyxcclxuICAgICAgJ0B2ZWUtdmFsaWRhdGUvem9kJyxcclxuICAgICAgJ0B2dWV1c2UvY29yZScsXHJcbiAgICAgICdAdnVldXNlL2hlYWQnLFxyXG4gICAgICAnQHZ1ZWZvcm0vbXVsdGlzZWxlY3QnLFxyXG4gICAgICAnQHZ1ZWZvcm0vc2xpZGVyJyxcclxuICAgICAgJ2F4aW9zJyxcclxuICAgICAgJ2JpbGxib2FyZC5qcycsXHJcbiAgICAgICdkYXlqcycsXHJcbiAgICAgICdkcm9wem9uZScsXHJcbiAgICAgICdkcmFndWxhJyxcclxuICAgICAgJ2RlZnUnLFxyXG4gICAgICAnZmlsZXBvbmQnLFxyXG4gICAgICAnZmlsZXBvbmQtcGx1Z2luLWZpbGUtdmFsaWRhdGUtc2l6ZScsXHJcbiAgICAgICdmaWxlcG9uZC1wbHVnaW4tZmlsZS12YWxpZGF0ZS10eXBlJyxcclxuICAgICAgJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1leGlmLW9yaWVudGF0aW9uJyxcclxuICAgICAgJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1jcm9wJyxcclxuICAgICAgJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1lZGl0JyxcclxuICAgICAgJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3JyxcclxuICAgICAgJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1yZXNpemUnLFxyXG4gICAgICAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXRyYW5zZm9ybScsXHJcbiAgICAgICdpbWFzaycsXHJcbiAgICAgICducHJvZ3Jlc3MnLFxyXG4gICAgICAnbm90eWYnLFxyXG4gICAgICAnbWFwYm94LWdsJyxcclxuICAgICAgJ3Bob3Rvc3dpcGUvbGlnaHRib3gnLFxyXG4gICAgICAncGhvdG9zd2lwZScsXHJcbiAgICAgICdwbHlyJyxcclxuICAgICAgJ3YtY2FsZW5kYXInLFxyXG4gICAgICAndmVlLXZhbGlkYXRlJyxcclxuICAgICAgJ3Z1ZScsXHJcbiAgICAgICd2dWUtc2Nyb2xsdG8nLFxyXG4gICAgICAndnVlMy1hcGV4Y2hhcnRzJyxcclxuICAgICAgJ3Z1ZS10aXBweScsXHJcbiAgICAgICd2dWUtaTE4bicsXHJcbiAgICAgICd2dWUtcm91dGVyJyxcclxuICAgICAgJ3VucGx1Z2luLXZ1ZS1yb3V0ZXIvcnVudGltZScsXHJcbiAgICAgICdzaW1wbGViYXInLFxyXG4gICAgICAnc2ltcGxlLWRhdGF0YWJsZXMnLFxyXG4gICAgICAndGlueS1zbGlkZXIvc3JjL3Rpbnktc2xpZGVyJyxcclxuICAgICAgJ3Z1ZS1hY2Nlc3NpYmxlLWNvbG9yLXBpY2tlcicsXHJcbiAgICAgICd6b2QnLFxyXG4gICAgICAnQHN0ZWZhbnByb2JzdC9yZW1hcmstc2hpa2knLFxyXG4gICAgICAncmVoeXBlLWV4dGVybmFsLWxpbmtzJyxcclxuICAgICAgJ3JlaHlwZS1yYXcnLFxyXG4gICAgICAncmVoeXBlLXNhbml0aXplJyxcclxuICAgICAgJ3JlaHlwZS1zdHJpbmdpZnknLFxyXG4gICAgICAncmVoeXBlLXNsdWcnLFxyXG4gICAgICAncmVoeXBlLWF1dG9saW5rLWhlYWRpbmdzJyxcclxuICAgICAgJ3JlbWFyay1nZm0nLFxyXG4gICAgICAncmVtYXJrLXBhcnNlJyxcclxuICAgICAgJ3JlbWFyay1yZWh5cGUnLFxyXG4gICAgICAnc2hpa2ktZXMnLFxyXG4gICAgICAndW5pZmllZCcsXHJcbiAgICAgICd3b3JrYm94LXdpbmRvdycsXHJcbiAgICAgICd0ZXh0YXJlYS1tYXJrZG93bi1lZGl0b3IvZGlzdC9lc20vYm9vdHN0cmFwJyxcclxuICAgIF0sXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgfSxcclxuICAvLyBXaWxsIGJlIHBhc3NlZCB0byBAcm9sbHVwL3BsdWdpbi1hbGlhcyBhcyBpdHMgZW50cmllcyBvcHRpb24uXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGZpbmQ6ICcvQHNyYy8nLFxyXG4gICAgICAgIHJlcGxhY2VtZW50OiBgL3NyYy9gLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBtaW5pZnk6ICd0ZXJzZXInLFxyXG4gICAgLy8gRG8gbm90IHdhcm4gYWJvdXQgbGFyZ2UgY2h1bmtzXHJcbiAgICAvLyBjaHVua1NpemVXYXJuaW5nTGltaXQ6IEluZmluaXR5LFxyXG4gICAgLy8gRG91YmxlIHRoZSBkZWZhdWx0IHNpemUgdGhyZXNob2xkIGZvciBpbmxpbmVkIGFzc2V0c1xyXG4gICAgLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9idWlsZC1vcHRpb25zLmh0bWwjYnVpbGQtYXNzZXRzaW5saW5lbGltaXRcclxuICAgIGFzc2V0c0lubGluZUxpbWl0OiA0MDk2ICogMixcclxuICAgIGNvbW1vbmpzT3B0aW9uczogeyBpbmNsdWRlOiBbXSB9LFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgLyoqXHJcbiAgICAgKiBwbHVnaW4tdnVlIHBsdWdpbiBpbmplY3QgdnVlIGxpYnJhcnkgYW5kIGFsbG93IHNmYyBmaWxlcyB0byB3b3JrICgqLnZ1ZSlcclxuICAgICAqXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS92aXRlanMvdml0ZS90cmVlL21haW4vcGFja2FnZXMvcGx1Z2luLXZ1ZVxyXG4gICAgICovXHJcbiAgICBWdWUoe1xyXG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvXSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdml0ZS1wbHVnaW4tdnVlLWkxOG4gcGx1Z2luIGRvZXMgaTE4biByZXNvdXJjZXMgcHJlLWNvbXBpbGF0aW9uIC8gb3B0aW1pemF0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ludGxpZnkvYnVuZGxlLXRvb2xzL3RyZWUvbWFpbi9wYWNrYWdlcy92aXRlLXBsdWdpbi12dWUtaTE4blxyXG4gICAgICovXHJcbiAgICBWdWVJMThuUGx1Z2luKHtcclxuICAgICAgaW5jbHVkZTogcmVzb2x2ZShkaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSksICcuL3NyYy9sb2NhbGVzLyoqJyksXHJcbiAgICAgIGZ1bGxJbnN0YWxsOiBmYWxzZSxcclxuICAgICAgY29tcG9zaXRpb25Pbmx5OiB0cnVlLFxyXG4gICAgfSksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB1bnBsdWdpbi12dWUtcm91dGVyIHBsdWdpbiBnZW5lcmF0ZSByb3V0ZXMgYmFzZWQgb24gZmlsZSBzeXN0ZW1cclxuICAgICAqIGFsbG93IHRvIHVzZSB0eXBlZCByb3V0ZXMgYW5kIHVzYWdlIG9mIGRlZmluZUxvYWRlclxyXG4gICAgICpcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3Bvc3ZhL3VucGx1Z2luLXZ1ZS1yb3V0ZXJcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3JmY3MvYmxvYi9hZDY5ZGEyYWVlOTI0MmVmODhmMDM2NzEzZGI2OGYzZWYyNzRiYjFiL2FjdGl2ZS1yZmNzLzAwMDAtcm91dGVyLXVzZS1sb2FkZXIubWRcclxuICAgICAqL1xyXG4gICAgVnVlUm91dGVyKHtcclxuICAgICAgcm91dGVzRm9sZGVyOiAnc3JjL3BhZ2VzJyxcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBEYXRhIEZldGNoaW5nIGlzIGFuIGV4cGVyaW1lbnRhbCBmZWF0dXJlIGZyb20gdnVlICYgdnVlLXJvdXRlclxyXG4gICAgICAgKlxyXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy9yZmNzL2Rpc2N1c3Npb25zLzQ2MFxyXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3N2YS91bnBsdWdpbi12dWUtcm91dGVyL3RyZWUvbWFpbi9zcmMvZGF0YS1mZXRjaGluZ1xyXG4gICAgICAgKi9cclxuICAgICAgZGF0YUZldGNoaW5nOiB0cnVlLFxyXG4gICAgfSksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB1bnBsdWdpbi1hdXRvLWltcG9ydCBhbGxvdyB0byBhdXRvbWF0aWNhbHkgaW1wb3J0IG1vZHVsZXMvY29tcG9uZW50c1xyXG4gICAgICpcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0XHJcbiAgICAgKi9cclxuICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICBkdHM6IHRydWUsXHJcbiAgICAgIGltcG9ydHM6IFsndnVlJywgJ0B2dWV1c2UvY29yZScsIFZ1ZVJvdXRlckF1dG9JbXBvcnRzXSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBpcyBhbiBpbnRlcm5hbCB2aXRlIHBsdWdpbiB0aGF0IGxvYWQgbWFya2Rvd24gZmlsZXMgYXMgdnVlIGNvbXBvbmVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQHNlZSAvZG9jdW1lbnRhdGlvblxyXG4gICAgICogQHNlZSAvdml0ZS1wbHVnaW4tdnVlcm8tZG9jXHJcbiAgICAgKiBAc2VlIC9zcmMvY29tcG9uZW50cy9wYXJ0aWFscy9kb2N1bWVudGF0aW9uL0RvY3VtZW50YXRpb25JdGVtLnZ1ZVxyXG4gICAgICogQHNlZSAvc3JjL2NvbXBvc2FibGUvdXNlTWFya2Rvd25Ub2MudHNcclxuICAgICAqL1xyXG4gICAgVml0ZVBsdWdpblZ1ZXJvRG9jKHtcclxuICAgICAgcGF0aFByZWZpeDogJ2RvY3VtZW50YXRpb24nLFxyXG4gICAgICB3cmFwcGVyQ29tcG9uZW50OiAnRG9jdW1lbnRhdGlvbkl0ZW0nLFxyXG4gICAgICBzaGlraToge1xyXG4gICAgICAgIHRoZW1lOiB7XHJcbiAgICAgICAgICBsaWdodDogJ21pbi1saWdodCcsXHJcbiAgICAgICAgICBkYXJrOiAnZ2l0aHViLWRhcmsnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHNvdXJjZU1ldGE6IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIGVkaXRQcm90b2NvbDogJ3ZzY29kZTovL3ZzY29kZS1yZW1vdGUvd3NsK1VidW50dScsIC8vIG9yICd2c2NvZGU6Ly9maWxlJ1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB1bnBsdWdpbi12dWUtY29tcG9uZW50cyBwbHVnaW4gaXMgcmVzcG9uc2libGUgb2YgYXV0b2xvYWRpbmcgY29tcG9uZW50c1xyXG4gICAgICogZG9jdW1lbnRhdGlvbiBhbmQgbWQgZmlsZSBhcmUgbG9hZGVkIGZvciBlbGVtZW50cyBhbmQgY29tcG9uZW50cyBzZWN0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzXHJcbiAgICAgKi9cclxuICAgIENvbXBvbmVudHMoe1xyXG4gICAgICBkaXJzOiBbJ2RvY3VtZW50YXRpb24nLCAnc3JjL2NvbXBvbmVudHMnLCAnc3JjL2xheW91dHMnXSxcclxuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnLCAnbWQnXSxcclxuICAgICAgZHRzOiB0cnVlLFxyXG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgL1xcLm1kJC9dLFxyXG4gICAgfSksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB2aXRlLXBsdWdpbi1wdXJnZS1pY29ucyBwbHVnaW4gaXMgcmVzcG9uc2libGUgb2YgYXV0b2xvYWRpbmcgaWNvbmVzIGZyb20gbXVsdGlwbGVzIHByb3ZpZGVyc1xyXG4gICAgICpcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9pY29uZXMubmV0bGlmeS5hcHAvXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS9wdXJnZS1pY29ucy90cmVlL21haW4vcGFja2FnZXMvdml0ZS1wbHVnaW4tcHVyZ2UtaWNvbnNcclxuICAgICAqL1xyXG4gICAgUHVyZ2VJY29ucygpLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdml0ZS1wbHVnaW4tZm9udHMgcGx1Z2luIGluamVjdCB3ZWJmb250cyBmcm9tIGRpZmZlcmVudHMgcHJvdmlkZXJzXHJcbiAgICAgKlxyXG4gICAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vc3RhZnluaWFrc2FjaGEvdml0ZS1wbHVnaW4tZm9udHNcclxuICAgICAqL1xyXG4gICAgVml0ZVBsdWdpbkZvbnRzKHtcclxuICAgICAgZ29vZ2xlOiB7XHJcbiAgICAgICAgZmFtaWxpZXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0ZpcmEgQ29kZScsXHJcbiAgICAgICAgICAgIHN0eWxlczogJ3dnaHRANDAwOzYwMCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnTW9udHNlcnJhdCcsXHJcbiAgICAgICAgICAgIHN0eWxlczogJ3dnaHRANTAwOzYwMDs3MDA7ODAwOzkwMCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnUm9ib3RvJyxcclxuICAgICAgICAgICAgc3R5bGVzOiAnd2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdml0ZS1wbHVnaW4tcmFkYXIgcGx1Z2luIGluamVjdCBzbmlwcGV0cyBmcm9tIGFuYWx5dGljcyBwcm92aWRlcnNcclxuICAgICAqXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zdGFmeW5pYWtzYWNoYS92aXRlLXBsdWdpbi1yYWRhclxyXG4gICAgICovXHJcbiAgICAhcHJvY2Vzcy5lbnYuR1RNX0lEXHJcbiAgICAgID8gdW5kZWZpbmVkXHJcbiAgICAgIDogVml0ZVBsdWdpblJhZGFyKHtcclxuICAgICAgICAgIGd0bToge1xyXG4gICAgICAgICAgICBpZDogcHJvY2Vzcy5lbnYuR1RNX0lELFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIHZpdGUtcGx1Z2luLXB3YSBnZW5lcmF0ZSBtYW5pZmVzdC5qc29uIGFuZCByZWdpc3RlciBzZXJ2aWNlcyB3b3JrZXIgdG8gZW5hYmxlIFBXQVxyXG4gICAgICpcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLXB3YVxyXG4gICAgICovXHJcbiAgICBWaXRlUFdBKHtcclxuICAgICAgYmFzZTogJy8nLFxyXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbJ2Zhdmljb24uc3ZnJywgJ2Zhdmljb24uaWNvJywgJ3JvYm90cy50eHQnLCAnYXBwbGUtdG91Y2gtaWNvbi5wbmcnXSxcclxuICAgICAgbWFuaWZlc3Q6IHtcclxuICAgICAgICBuYW1lOiAnVnVlcm8gLSBBIGNvbXBsZXRlIFZ1ZSAzIGRlc2lnbiBzeXN0ZW0nLFxyXG4gICAgICAgIHNob3J0X25hbWU6ICdWdWVybycsXHJcbiAgICAgICAgc3RhcnRfdXJsOiAnLz91dG1fc291cmNlPXB3YScsXHJcbiAgICAgICAgZGlzcGxheTogJ3N0YW5kYWxvbmUnLFxyXG4gICAgICAgIHRoZW1lX2NvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgYmFja2dyb3VuZF9jb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgIGljb25zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogJ3B3YS0xOTJ4MTkyLnBuZycsXHJcbiAgICAgICAgICAgIHNpemVzOiAnMTkyeDE5MicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiAncHdhLTUxMng1MTIucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICdwd2EtNTEyeDUxMi5wbmcnLFxyXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSBtYXNrYWJsZScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIHJvbGx1cC1wbHVnaW4tcHVyZ2Vjc3MgcGx1Z2luIGlzIHJlc3BvbnNpYmxlIG9mIHB1cmdpbmcgY3NzIHJ1bGVzXHJcbiAgICAgKiB0aGF0IGFyZSBub3QgdXNlZCBpbiB0aGUgYnVuZGxlXHJcbiAgICAgKlxyXG4gICAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vRnVsbEh1bWFuL3B1cmdlY3NzL3RyZWUvbWFpbi9wYWNrYWdlcy9yb2xsdXAtcGx1Z2luLXB1cmdlY3NzXHJcbiAgICAgKi9cclxuICAgIHB1cmdlY3NzKHtcclxuICAgICAgb3V0cHV0OiBmYWxzZSxcclxuICAgICAgY29udGVudDogW2AuL3NyYy8qKi8qLnZ1ZWBdLFxyXG4gICAgICB2YXJpYWJsZXM6IGZhbHNlLFxyXG4gICAgICBzYWZlbGlzdDoge1xyXG4gICAgICAgIHN0YW5kYXJkOiBbXHJcbiAgICAgICAgICAvKGF1dHZ8bG5pbHxsbmlyfGZhcz8pLyxcclxuICAgICAgICAgIC8tKGxlYXZlfGVudGVyfGFwcGVhcikofC0odG98ZnJvbXxhY3RpdmUpKSQvLFxyXG4gICAgICAgICAgL14oPyEofC4qPzopY3Vyc29yLW1vdmUpListbW92ZSQvLFxyXG4gICAgICAgICAgL15yb3V0ZXItbGluayh8LWV4YWN0KS1hY3RpdmUkLyxcclxuICAgICAgICAgIC9kYXRhLXYtLiovLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZmF1bHRFeHRyYWN0b3IoY29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRXaXRob3V0U3R5bGVCbG9ja3MgPSBjb250ZW50LnJlcGxhY2UoLzxzdHlsZVteXSs/PFxcL3N0eWxlPi9naSwgJycpXHJcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRXaXRob3V0U3R5bGVCbG9ja3MubWF0Y2goL1tBLVphLXowLTktXy86XSpbQS1aYS16MC05LV8vXSsvZykgfHwgW11cclxuICAgICAgfSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdml0ZS1wbHVnaW4taW1hZ2VtaW4gb3B0aW1pemUgYWxsIGltYWdlcyBzaXplcyBmcm9tIHB1YmxpYyBvciBhc3NldCBmb2xkZXJcclxuICAgICAqXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbm5jd2Ivdml0ZS1wbHVnaW4taW1hZ2VtaW5cclxuICAgICAqL1xyXG4gICAgIU1JTklGWV9JTUFHRVNcclxuICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgOiBJbWFnZU1pbih7XHJcbiAgICAgICAgICBnaWZzaWNsZToge1xyXG4gICAgICAgICAgICBvcHRpbWl6YXRpb25MZXZlbDogNyxcclxuICAgICAgICAgICAgaW50ZXJsYWNlZDogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgb3B0aXBuZzoge1xyXG4gICAgICAgICAgICBvcHRpbWl6YXRpb25MZXZlbDogNyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtb3pqcGVnOiB7XHJcbiAgICAgICAgICAgIHF1YWxpdHk6IDYwLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHBuZ3F1YW50OiB7XHJcbiAgICAgICAgICAgIHF1YWxpdHk6IFswLjgsIDAuOV0sXHJcbiAgICAgICAgICAgIHNwZWVkOiA0LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN2Z286IHtcclxuICAgICAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdyZW1vdmVWaWV3Qm94JyxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAncmVtb3ZlRW1wdHlBdHRycycsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLFxyXG4gIF0sXHJcbn0pXHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYW5hbmQua3VtYXJcXFxcRGVza3RvcFxcXFxhc3NpZ25tZW50c1xcXFx2aXRlLXBsdWdpbi12dWVyby1kb2NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGFuYW5kLmt1bWFyXFxcXERlc2t0b3BcXFxcYXNzaWdubWVudHNcXFxcdml0ZS1wbHVnaW4tdnVlcm8tZG9jXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9hbmFuZC5rdW1hci9EZXNrdG9wL2Fzc2lnbm1lbnRzL3ZpdGUtcGx1Z2luLXZ1ZXJvLWRvYy9pbmRleC50c1wiO2ltcG9ydCB0eXBlIHsgUGx1Z2luLCBSZXNvbHZlZENvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB0eXBlIHsgUHJvY2Vzc29yIH0gZnJvbSAndW5pZmllZCdcclxuaW1wb3J0IHR5cGUgeyBUaGVtZSB9IGZyb20gJ3NoaWtpLWVzJ1xyXG5cclxuaW1wb3J0IHsgam9pbiwgYmFzZW5hbWUgfSBmcm9tICdwYXRoZSdcclxuaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBwYXJzZSB9IGZyb20gJ0B2dWUvY29tcGlsZXItc2ZjJ1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlUHJvY2Vzc29ycyB9IGZyb20gJy4vbWFya2Rvd24nXHJcbmltcG9ydCB7IHRyYW5zZm9ybUV4YW1wbGVNYXJrdXAsIHRyYW5zZm9ybVNsb3RzIH0gZnJvbSAnLi90cmFuc2Zvcm0nXHJcblxyXG5mdW5jdGlvbiBwYXJzZUlkKGlkOiBzdHJpbmcpIHtcclxuICBjb25zdCBpbmRleCA9IGlkLmluZGV4T2YoJz8nKVxyXG4gIGlmIChpbmRleCA8IDApIHJldHVybiBpZFxyXG4gIGVsc2UgcmV0dXJuIGlkLnNsaWNlKDAsIGluZGV4KVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBsdWdpbk9wdGlvbnMge1xyXG4gIHBhdGhQcmVmaXg/OiBzdHJpbmdcclxuICB3cmFwcGVyQ29tcG9uZW50OiBzdHJpbmdcclxuICBzaGlraToge1xyXG4gICAgdGhlbWU6XHJcbiAgICAgIHwgVGhlbWVcclxuICAgICAgfCB7XHJcbiAgICAgICAgICBsaWdodDogVGhlbWVcclxuICAgICAgICAgIGRhcms6IFRoZW1lXHJcbiAgICAgICAgfVxyXG4gIH1cclxuICBzb3VyY2VNZXRhPzoge1xyXG4gICAgZW5hYmxlZD86IGJvb2xlYW5cclxuICAgIGVkaXRQcm90b2NvbD86IHN0cmluZ1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZpdGVQbHVnaW5WdWVyb0RvYyhvcHRpb25zOiBQbHVnaW5PcHRpb25zKSB7XHJcbiAgbGV0IGNvbmZpZzogUmVzb2x2ZWRDb25maWcgfCB1bmRlZmluZWRcclxuICBsZXQgcHJvY2Vzc29yczogeyBsaWdodDogUHJvY2Vzc29yOyBkYXJrOiBQcm9jZXNzb3IgfSB8IHVuZGVmaW5lZFxyXG5cclxuICBjb25zdCBjd2QgPSBwcm9jZXNzLmN3ZCgpXHJcbiAgY29uc3QgcGF0aFByZWZpeCA9IG9wdGlvbnMucGF0aFByZWZpeCA/IGpvaW4oY3dkLCBvcHRpb25zLnBhdGhQcmVmaXgpIDogY3dkXHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG1hcmtkb3duVG9WdWUoaWQ6IHN0cmluZywgcmF3OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHBhdGggPSBwYXJzZUlkKGlkKVxyXG5cclxuICAgIC8vIHRyYW5zZm9ybSBleGFtcGxlIG1hcmt1cCB0byB1c2Uga2ViYWItY2FzZSB3aXRob3V0IHNlbGYtY2xvc2luZyBlbGVtZW50cy5cclxuICAgIC8vIHRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgcmVoeXBlLXJhdyByZXF1aXJlcyB2YWxpZCBodG1sIChvbmx5IHNvbWUgdGFncyBhcmUgc2VsZi1jbG9zYWJsZSlcclxuICAgIGNvbnN0IGlucHV0ID0gdHJhbnNmb3JtRXhhbXBsZU1hcmt1cChyYXcpXHJcblxyXG4gICAgLy8gcHJvY2VzcyBtYXJrZG93biB3aXRoIHJlbWFya1xyXG4gICAgaWYgKCFwcm9jZXNzb3JzKSBwcm9jZXNzb3JzID0gYXdhaXQgY3JlYXRlUHJvY2Vzc29ycyhvcHRpb25zLnNoaWtpLnRoZW1lKVxyXG5cclxuICAgIGNvbnN0IFt2RmlsZUxpZ2h0LCB2RmlsZURhcmtdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICBwcm9jZXNzb3JzLmxpZ2h0LnByb2Nlc3MoaW5wdXQpLFxyXG4gICAgICBwcm9jZXNzb3JzLmRhcmsucHJvY2VzcyhpbnB1dCksXHJcbiAgICBdKVxyXG5cclxuICAgIGNvbnN0IGNvbnRlbnRMaWdodCA9IHZGaWxlTGlnaHQudG9TdHJpbmcoKVxyXG4gICAgY29uc3QgY29udGVudERhcmsgPSB2RmlsZURhcmsudG9TdHJpbmcoKVxyXG4gICAgY29uc3QgZnJvbnRtYXR0ZXIgPSB2RmlsZUxpZ2h0LmRhdGE/LmZyb250bWF0dGVyID8/IHt9XHJcblxyXG4gICAgLy8gcmVwbGFjZSBjb2RlL2V4YW1wbGUgc2xvdHMgcGxhY2Vob2xkZXJzXHJcbiAgICBjb25zdCBzbG90TGlnaHQgPSB0cmFuc2Zvcm1TbG90cyhjb250ZW50TGlnaHQsICd2LWlmPVwiIWRhcmttb2RlLmlzRGFya1wiJylcclxuICAgIGNvbnN0IHNsb3REYXJrID0gdHJhbnNmb3JtU2xvdHMoY29udGVudERhcmssICd2LWlmPVwiZGFya21vZGUuaXNEYXJrXCInKVxyXG5cclxuICAgIC8vIHdyYXAgY29udGVudCBpbiB3cmFwcGVyIGNvbXBvbmVudCBkZWZhdWx0IHNsb3RcclxuICAgIGNvbnN0IHNmYyA9IFtcclxuICAgICAgYDx0ZW1wbGF0ZT5gLFxyXG4gICAgICBgICA8JHtvcHRpb25zLndyYXBwZXJDb21wb25lbnR9IDpmcm9udG1hdHRlcj1cImZyb250bWF0dGVyXCIgOnNvdXJjZS1tZXRhPVwic291cmNlTWV0YVwiPmAsXHJcbiAgICAgIGAgICAgJHtzbG90TGlnaHR9YCxcclxuICAgICAgYCAgICAke3Nsb3REYXJrfWAsXHJcbiAgICAgIGAgIDwvJHtvcHRpb25zLndyYXBwZXJDb21wb25lbnR9PmAsXHJcbiAgICAgIGA8L3RlbXBsYXRlPmAsXHJcbiAgICBdLmpvaW4oJ1xcbicpXHJcblxyXG4gICAgLy8gcGFyc2UgdGVtcGxhdGUgd2l0aCB2dWUgc2ZjIGNvbXBpbGVyXHJcbiAgICBjb25zdCByZXN1bHQgPSBwYXJzZShzZmMsIHtcclxuICAgICAgZmlsZW5hbWU6IHBhdGgsXHJcbiAgICAgIHNvdXJjZU1hcDogdHJ1ZSxcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKHJlc3VsdC5lcnJvcnMubGVuZ3RoIHx8IHJlc3VsdC5kZXNjcmlwdG9yLnRlbXBsYXRlID09PSBudWxsKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0LmVycm9ycylcclxuXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWFya2Rvd246IHVuYWJsZSB0byBwYXJzZSB2aXJ0dWFsIGZpbGUgZ2VuZXJhdGVkIGZvciBcIiR7aWR9XCJgKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbXBpbGUgdGVtcGxhdGUgd2l0aCB2dWUgc2ZjIGNvbXBpbGVyXHJcbiAgICBjb25zdCB7IGNvZGUsIGVycm9ycyB9ID0gY29tcGlsZVRlbXBsYXRlKHtcclxuICAgICAgZmlsZW5hbWU6IHBhdGgsXHJcbiAgICAgIGlkOiBwYXRoLFxyXG4gICAgICBzb3VyY2U6IHJlc3VsdC5kZXNjcmlwdG9yLnRlbXBsYXRlLmNvbnRlbnQsXHJcbiAgICAgIHByZXByb2Nlc3NMYW5nOiByZXN1bHQuZGVzY3JpcHRvci50ZW1wbGF0ZS5sYW5nLFxyXG4gICAgICB0cmFuc2Zvcm1Bc3NldFVybHM6IGZhbHNlLFxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoZXJyb3JzLmxlbmd0aCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9ycylcclxuXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWFya2Rvd246IHVuYWJsZSB0byBjb21waWxlIHZpcnR1YWwgZmlsZSBcIiR7aWR9XCJgKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNvdXJjZSBpcyB1c2VkIHRvIGRpc3BsYXkgZWRpdCBzb3VyY2UgbGluayBpbiB0aGUgZG9jc1xyXG4gICAgbGV0IHNvdXJjZU1ldGEgPSAndW5kZWZpbmVkJ1xyXG4gICAgaWYgKG9wdGlvbnMuc291cmNlTWV0YT8uZW5hYmxlZCkge1xyXG4gICAgICBzb3VyY2VNZXRhID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHJlbGF0aXZlUGF0aDogcGF0aC5zdWJzdHJpbmcoY3dkLmxlbmd0aCksXHJcbiAgICAgICAgYmFzZW5hbWU6IGJhc2VuYW1lKHBhdGgpLFxyXG4gICAgICAgIHBhdGg6IGNvbmZpZz8uaXNQcm9kdWN0aW9uID8gJycgOiBwYXRoLFxyXG4gICAgICAgIGVkaXRQcm90b2NvbDogY29uZmlnPy5pc1Byb2R1Y3Rpb24gPyAnJyA6IG9wdGlvbnMuc291cmNlTWV0YS5lZGl0UHJvdG9jb2wsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gaW5qZWN0IGZyb250bWF0dGVyL2Rhcmttb2RlIGFuZCBobXJJZCBpbnRvIHRoZSBjb21waWxlZCByZW5kZXIgZnVuY3Rpb25cclxuICAgIGNvbnN0IG91dHB1dCA9IFtcclxuICAgICAgYGltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSAndnVlJ2AsXHJcbiAgICAgIGBpbXBvcnQgeyB1c2VEYXJrbW9kZSB9IGZyb20gJy9Ac3JjL3N0b3Jlcy9kYXJrbW9kZSdgLFxyXG5cclxuICAgICAgY29kZS5yZXBsYWNlKCdleHBvcnQgZnVuY3Rpb24gcmVuZGVyJywgJ2Z1bmN0aW9uIHJlbmRlcicpLFxyXG5cclxuICAgICAgYGNvbnN0IF9fZnJvbnRtYXR0ZXIgPSAke0pTT04uc3RyaW5naWZ5KGZyb250bWF0dGVyKX07YCxcclxuICAgICAgYGNvbnN0IHNldHVwID0gKCkgPT4gKHtgLFxyXG4gICAgICBgICBmcm9udG1hdHRlcjogcmVhY3RpdmUoX19mcm9udG1hdHRlciksYCxcclxuICAgICAgYCAgZGFya21vZGU6IHVzZURhcmttb2RlKCksYCxcclxuICAgICAgYCAgc291cmNlTWV0YTogJHtzb3VyY2VNZXRhfSxgLFxyXG4gICAgICBgfSk7YCxcclxuICAgICAgYGNvbnN0IF9fc2NyaXB0ID0geyByZW5kZXIsIHNldHVwIH07YCxcclxuXHJcbiAgICAgIGNvbmZpZz8uaXNQcm9kdWN0aW9uID8gJycgOiBgX19zY3JpcHQuX19obXJJZCA9ICR7SlNPTi5zdHJpbmdpZnkocGF0aCl9O2AsXHJcbiAgICAgIGBleHBvcnQgZGVmYXVsdCBfX3NjcmlwdDtgLFxyXG4gICAgXS5qb2luKCdcXG4nKVxyXG5cclxuICAgIHJldHVybiBvdXRwdXRcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiAndml0ZS1wbHVnaW4tdnVlcm8tZG9jJyxcclxuICAgIGVuZm9yY2U6ICdwcmUnLFxyXG4gICAgY29uZmlnUmVzb2x2ZWQoX2NvbmZpZykge1xyXG4gICAgICBjb25maWcgPSBfY29uZmlnXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgdHJhbnNmb3JtKHJhdywgaWQpIHtcclxuICAgICAgaWYgKGlkLmVuZHNXaXRoKCcubWQnKSAmJiBpZC5zdGFydHNXaXRoKHBhdGhQcmVmaXgpKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IG1hcmtkb3duVG9WdWUoaWQsIHJhdylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9IHNhdGlzZmllcyBQbHVnaW5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVml0ZVBsdWdpblZ1ZXJvRG9jXHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYW5hbmQua3VtYXJcXFxcRGVza3RvcFxcXFxhc3NpZ25tZW50c1xcXFx2aXRlLXBsdWdpbi12dWVyby1kb2NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGFuYW5kLmt1bWFyXFxcXERlc2t0b3BcXFxcYXNzaWdubWVudHNcXFxcdml0ZS1wbHVnaW4tdnVlcm8tZG9jXFxcXG1hcmtkb3duLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9hbmFuZC5rdW1hci9EZXNrdG9wL2Fzc2lnbm1lbnRzL3ZpdGUtcGx1Z2luLXZ1ZXJvLWRvYy9tYXJrZG93bi50c1wiO2ltcG9ydCB5YW1sIGZyb20gJ2pzLXlhbWwnXHJcbmltcG9ydCByZW1hcmtTaGlraSBmcm9tICdAc3RlZmFucHJvYnN0L3JlbWFyay1zaGlraSdcclxuaW1wb3J0IHJlaHlwZUV4dGVybmFsTGlua3MgZnJvbSAncmVoeXBlLWV4dGVybmFsLWxpbmtzJ1xyXG5pbXBvcnQgcmVoeXBlUmF3IGZyb20gJ3JlaHlwZS1yYXcnXHJcbmltcG9ydCByZWh5cGVTbHVnIGZyb20gJ3JlaHlwZS1zbHVnJ1xyXG5pbXBvcnQgcmVoeXBlQXV0b2xpbmtIZWFkaW5ncyBmcm9tICdyZWh5cGUtYXV0b2xpbmstaGVhZGluZ3MnXHJcbmltcG9ydCByZWh5cGVTdHJpbmdpZnkgZnJvbSAncmVoeXBlLXN0cmluZ2lmeSdcclxuaW1wb3J0IHJlbWFya1BhcnNlIGZyb20gJ3JlbWFyay1wYXJzZSdcclxuaW1wb3J0IHJlbWFya0dmbSBmcm9tICdyZW1hcmstZ2ZtJ1xyXG5pbXBvcnQgcmVtYXJrUmVoeXBlIGZyb20gJ3JlbWFyay1yZWh5cGUnXHJcbmltcG9ydCByZW1hcmtGcm9udG1hdHRlciBmcm9tICdyZW1hcmstZnJvbnRtYXR0ZXInXHJcbmltcG9ydCB7IGdldEhpZ2hsaWdodGVyLCB0eXBlIElUaGVtZVJlZ2lzdHJhdGlvbiwgdHlwZSBMYW5nLCB0eXBlIFRoZW1lIH0gZnJvbSAnc2hpa2ktZXMnXHJcbmltcG9ydCB7IHVuaWZpZWQsIHR5cGUgUHJvY2Vzc29yIH0gZnJvbSAndW5pZmllZCdcclxuXHJcbmNvbnN0IGxhbmdzID0gWyd2dWUnLCAndnVlLWh0bWwnLCAndHlwZXNjcmlwdCcsICdiYXNoJywgJ3Njc3MnXSBzYXRpc2ZpZXMgTGFuZ1tdXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvY2Vzc29yKHRoZW1lOiBJVGhlbWVSZWdpc3RyYXRpb24pOiBQcm9taXNlPFByb2Nlc3Nvcj4ge1xyXG4gIGNvbnN0IGhpZ2hsaWdodGVyID0gYXdhaXQgZ2V0SGlnaGxpZ2h0ZXIoe1xyXG4gICAgdGhlbWUsXHJcbiAgICBsYW5ncyxcclxuICB9KVxyXG5cclxuICByZXR1cm4gdW5pZmllZCgpXHJcbiAgICAudXNlKHJlbWFya1BhcnNlKVxyXG4gICAgLnVzZShyZW1hcmtGcm9udG1hdHRlcilcclxuICAgIC51c2UoKCkgPT4gKHRyZWUsIGZpbGUpID0+IHtcclxuICAgICAgaWYgKHRyZWUuY2hpbGRyZW5bMF0udHlwZSA9PT0gJ3lhbWwnKSB7XHJcbiAgICAgICAgLy8gc3RvcmUgZnJvbnRtYXR0ZXIgaW4gdmZpbGVcclxuICAgICAgICBmaWxlLmRhdGEuZnJvbnRtYXR0ZXIgPSB5YW1sLmxvYWQodHJlZS5jaGlsZHJlblswXS52YWx1ZSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC51c2UocmVtYXJrR2ZtKVxyXG4gICAgLnVzZShyZW1hcmtTaGlraSwgeyBoaWdobGlnaHRlciB9KVxyXG4gICAgLnVzZShyZW1hcmtSZWh5cGUsIHsgYWxsb3dEYW5nZXJvdXNIdG1sOiB0cnVlIH0pXHJcbiAgICAudXNlKHJlaHlwZVJhdylcclxuICAgIC51c2UocmVoeXBlRXh0ZXJuYWxMaW5rcywgeyByZWw6IFsnbm9mb2xsb3cnXSwgdGFyZ2V0OiAnX2JsYW5rJyB9KVxyXG4gICAgLnVzZShyZWh5cGVTbHVnKVxyXG4gICAgLnVzZShyZWh5cGVBdXRvbGlua0hlYWRpbmdzLCB7XHJcbiAgICAgIGJlaGF2aW9yOiAnYXBwZW5kJyxcclxuICAgICAgY29udGVudDoge1xyXG4gICAgICAgIHR5cGU6ICdlbGVtZW50JyxcclxuICAgICAgICB0YWdOYW1lOiAnaScsXHJcbiAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgY2xhc3NOYW1lOiBbJ2ljb25pZnkgdG9jLWxpbmstYW5jaG9yJ10sXHJcbiAgICAgICAgICBkYXRhSWNvbjogJ2ZlYXRoZXI6bGluaycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgLnVzZShyZWh5cGVTdHJpbmdpZnkpXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9jZXNzb3JzKFxyXG4gIHRoZW1lOlxyXG4gICAgfCBUaGVtZVxyXG4gICAgfCB7XHJcbiAgICAgICAgbGlnaHQ6IFRoZW1lXHJcbiAgICAgICAgZGFyazogVGhlbWVcclxuICAgICAgfVxyXG4pOiBQcm9taXNlPHsgbGlnaHQ6IFByb2Nlc3NvcjsgZGFyazogUHJvY2Vzc29yIH0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgbGlnaHQ6IGF3YWl0IGNyZWF0ZVByb2Nlc3Nvcih0eXBlb2YgdGhlbWUgPT09ICdzdHJpbmcnID8gdGhlbWUgOiB0aGVtZS5saWdodCksXHJcbiAgICBkYXJrOiBhd2FpdCBjcmVhdGVQcm9jZXNzb3IodHlwZW9mIHRoZW1lID09PSAnc3RyaW5nJyA/IHRoZW1lIDogdGhlbWUuZGFyayksXHJcbiAgfVxyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYW5hbmQua3VtYXJcXFxcRGVza3RvcFxcXFxhc3NpZ25tZW50c1xcXFx2aXRlLXBsdWdpbi12dWVyby1kb2NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGFuYW5kLmt1bWFyXFxcXERlc2t0b3BcXFxcYXNzaWdubWVudHNcXFxcdml0ZS1wbHVnaW4tdnVlcm8tZG9jXFxcXHRyYW5zZm9ybS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvYW5hbmQua3VtYXIvRGVza3RvcC9hc3NpZ25tZW50cy92aXRlLXBsdWdpbi12dWVyby1kb2MvdHJhbnNmb3JtLnRzXCI7aW1wb3J0IHsga2ViYWJDYXNlIH0gZnJvbSAnc2N1bGUnXHJcblxyXG5jb25zdCBTRUxGX0NMT1NJTkdfVEFHX1JFR0VYID0gLzwoW15cXHM+PC9dKykoW14+XSspXFwvPi9nXHJcbmNvbnN0IE9QRU5fVEFHX1JFR0VYID0gLzwoW15cXHM+PC9dKykvZ1xyXG5jb25zdCBDTE9TRV9UQUdfUkVHRVggPSAvPFxcLyhbXlxccz48L10rKS9nXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtRXhhbXBsZU1hcmt1cChyYXc6IHN0cmluZykge1xyXG4gIGxldCBvdXRwdXQgPSByYXdcclxuICBsZXQgY29udGVudDogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGwgPSBudWxsXHJcbiAgaWYgKChjb250ZW50ID0gcmF3Lm1hdGNoKC88IS0tZXhhbXBsZS0tPihbXFxzXFxTXSo/KTwhLS1cXC9leGFtcGxlLS0+LykpKSB7XHJcbiAgICBjb25zdCBrZWJhYkNvbnRlbnQgPSBjb250ZW50WzFdXHJcbiAgICAgIC5yZXBsYWNlQWxsKFNFTEZfQ0xPU0lOR19UQUdfUkVHRVgsIChzdWJzdHJpbmcsIHRhZykgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdWJzdHJpbmcucmVwbGFjZSgnLz4nLCBgPjwvJHt0YWcudHJpbSgpfT5gKVxyXG4gICAgICB9KVxyXG4gICAgICAucmVwbGFjZUFsbChPUEVOX1RBR19SRUdFWCwgKHN1YnN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiBgPCR7a2ViYWJDYXNlKHN1YnN0cmluZy5zdWJzdHJpbmcoMSkudHJpbSgpKX1gXHJcbiAgICAgIH0pXHJcbiAgICAgIC5yZXBsYWNlQWxsKENMT1NFX1RBR19SRUdFWCwgKHN1YnN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiBgPC8ke2tlYmFiQ2FzZShzdWJzdHJpbmcuc3Vic3RyaW5nKDIpLnRyaW0oKSl9YFxyXG4gICAgICB9KVxyXG4gICAgICAucmVwbGFjZUFsbCgnJiN4Mjc7JywgXCInXCIpXHJcblxyXG4gICAgb3V0cHV0ID0gb3V0cHV0LnJlcGxhY2UoY29udGVudFsxXSwga2ViYWJDb250ZW50KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG91dHB1dFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtU2xvdHMoc291cmNlOiBzdHJpbmcsIGNvbmRpdGlvbjogc3RyaW5nID0gJycpIHtcclxuICBpZiAoc291cmNlLmluY2x1ZGVzKCc8IS0tY29kZS0tPicpICYmIHNvdXJjZS5pbmNsdWRlcygnPCEtLWV4YW1wbGUtLT4nKSkge1xyXG4gICAgcmV0dXJuIGA8dGVtcGxhdGUgJHtjb25kaXRpb259ICNkZWZhdWx0PiR7c291cmNlfWBcclxuICAgICAgLnJlcGxhY2UoXHJcbiAgICAgICAgYDwhLS1jb2RlLS0+YCxcclxuICAgICAgICBgPC90ZW1wbGF0ZT48dGVtcGxhdGUgJHtjb25kaXRpb259ICNjb2RlPlxcbjxzbG90IG5hbWU9XCJjb2RlXCI+PGRpdiB2LXByZT5gXHJcbiAgICAgIClcclxuICAgICAgLnJlcGxhY2UoYDwhLS0vY29kZS0tPmAsIGA8L2Rpdj48L3Nsb3Q+XFxuPC90ZW1wbGF0ZT5gKVxyXG4gICAgICAucmVwbGFjZShcclxuICAgICAgICBgPCEtLWV4YW1wbGUtLT5gLFxyXG4gICAgICAgIGA8dGVtcGxhdGUgJHtjb25kaXRpb259ICNleGFtcGxlPlxcbjxzbG90IG5hbWU9XCJleGFtcGxlXCI+YFxyXG4gICAgICApXHJcbiAgICAgIC5yZXBsYWNlKGA8IS0tL2V4YW1wbGUtLT5gLCBgPC9zbG90PlxcbjwvdGVtcGxhdGU+YClcclxuICB9XHJcblxyXG4gIGlmIChzb3VyY2UuaW5jbHVkZXMoJzwhLS1jb2RlLS0+JykpIHtcclxuICAgIHJldHVybiBgPHRlbXBsYXRlICR7Y29uZGl0aW9ufSAjZGVmYXVsdD4ke3NvdXJjZX1gXHJcbiAgICAgIC5yZXBsYWNlKFxyXG4gICAgICAgIGA8IS0tY29kZS0tPmAsXHJcbiAgICAgICAgYDwvdGVtcGxhdGU+PHRlbXBsYXRlICR7Y29uZGl0aW9ufSAjY29kZT5cXG48c2xvdCBuYW1lPVwiY29kZVwiPjxkaXYgdi1wcmU+YFxyXG4gICAgICApXHJcbiAgICAgIC5yZXBsYWNlKGA8IS0tL2NvZGUtLT5gLCBgPC9kaXY+PC9zbG90PlxcbjwvdGVtcGxhdGU+YClcclxuICB9XHJcblxyXG4gIGlmIChzb3VyY2UuaW5jbHVkZXMoJzwhLS1leGFtcGxlLS0+JykpIHtcclxuICAgIHJldHVybiBgPHRlbXBsYXRlICR7Y29uZGl0aW9ufSAjZGVmYXVsdD4ke3NvdXJjZX1gXHJcbiAgICAgIC5yZXBsYWNlKFxyXG4gICAgICAgIGA8IS0tZXhhbXBsZS0tPmAsXHJcbiAgICAgICAgYDwvdGVtcGxhdGU+PHRlbXBsYXRlICR7Y29uZGl0aW9ufSAjZXhhbXBsZT5cXG48c2xvdCBuYW1lPVwiZXhhbXBsZVwiPmBcclxuICAgICAgKVxyXG4gICAgICAucmVwbGFjZShgPCEtLS9leGFtcGxlLS0+YCwgYDwvc2xvdD5cXG48L3RlbXBsYXRlPmApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gYDx0ZW1wbGF0ZSAke2NvbmRpdGlvbn0gI2RlZmF1bHQ+JHtzb3VyY2V9PC90ZW1wbGF0ZT5gXHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvVCxTQUFTLFNBQVMsZUFBZTtBQUNyVixTQUFTLHFCQUFxQjtBQUM5QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxlQUFlO0FBQ3RCLFNBQVMsNEJBQTRCO0FBQ3JDLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMsdUJBQXVCO0FBQ2hDLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sY0FBYztBQUNyQixPQUFPLG1CQUFtQjtBQUMxQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxjQUFjOzs7QUNWckIsU0FBUyxNQUFNLGdCQUFnQjtBQUMvQixTQUFTLGlCQUFpQixhQUFhOzs7QUNMMlUsT0FBTyxVQUFVO0FBQ25ZLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8seUJBQXlCO0FBQ2hDLE9BQU8sZUFBZTtBQUN0QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLDRCQUE0QjtBQUNuQyxPQUFPLHFCQUFxQjtBQUM1QixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGVBQWU7QUFDdEIsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyx1QkFBdUI7QUFDOUIsU0FBUyxzQkFBc0U7QUFDL0UsU0FBUyxlQUErQjtBQUV4QyxJQUFNLFFBQVEsQ0FBQyxPQUFPLFlBQVksY0FBYyxRQUFRLE1BQU07QUFFOUQsZUFBc0IsZ0JBQWdCLE9BQStDO0FBQ25GLFFBQU0sY0FBYyxNQUFNLGVBQWU7QUFBQSxJQUN2QztBQUFBLElBQ0E7QUFBQSxFQUNGLENBQUM7QUFFRCxTQUFPLFFBQVEsRUFDWixJQUFJLFdBQVcsRUFDZixJQUFJLGlCQUFpQixFQUNyQixJQUFJLE1BQU0sQ0FBQyxNQUFNLFNBQVM7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
