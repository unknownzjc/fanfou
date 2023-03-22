import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetIcons,
  presetTypography,
  presetWebFonts,
} from "unocss";

export function createConfig({ strict = true, dev = true } = {}) {
  return defineConfig({
    envMode: dev ? "dev" : "build",
    presets: [
      presetAttributify({strict}),
      presetUno(),
      presetIcons({
        scale: 1.2,
        extraProperties: {
          color: "inherit",
          // Avoid crushing of icons in crowded situations
          "min-width": "1.2em",
        },
      }),
      presetTypography(),
      presetWebFonts({
        provider: "none",
        fonts: {
          script: "Homemade Apple",
        },
      }),
    ],
  });
}

export default createConfig();
