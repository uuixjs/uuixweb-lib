// @ts-nocheck
import {
  colorUIColorSwiftCustomTransform,
  cssCustomTransformGroup,
  customColorCss,
  iosSwiftSeparateCustomTransformGroup,
  nameTiSnakeCustomTransform,
  scssCustomTransformGroup,
} from "./transforms";
import {
  cssThemesCustomFormat,
  iosSwiftColorsCustomFormat,
  iosSwiftThemesCustomFormat,
  iosThemeProtocolCustomFormat,
  jsonAllCustomFormat,
  jsonThemeCustomFormat,
  jsonVariablesCustomFormat,
  scssColorsCustomFormat,
  scssThemesCustomFormat,
  tsCustomFormat,
  tsDictionaryCustomFormat,
} from "./formats";
import { excludeThemesCustomFilter, isThemeColor } from "./filters";

import StyleDictionary from "style-dictionary";
import { styleDictionaryConfig } from "./style-dictionary.config";

export const buildTokens = () => {
  const styleDictionary = StyleDictionary.extend(styleDictionaryConfig);

  /**
   * A special file configuration is filter, which will filter the tokens
   * before they get to the format. This allows you to re-use the same format
   * to generate multiple files with different sets of tokens.
   *
   * https://amzn.github.io/style-dictionary/#/formats?id=filtering-tokens
   */
  styleDictionary.registerFilter(excludeThemesCustomFilter);
  styleDictionary.registerFilter(isThemeColor);

  /**
   * Transforms are functions that transform a property - this enables each
   * platform to consume the property in different ways.
   *
   * https://amzn.github.io/style-dictionary/#/transforms
   */
  styleDictionary.registerTransform(nameTiSnakeCustomTransform);
  styleDictionary.registerTransform(colorUIColorSwiftCustomTransform);
  styleDictionary.registerTransform(customColorCss);

  /**
   * Transform Groups are a way to easily use multiple transforms at once. They
   * are an array of transforms.
   *
   * https://amzn.github.io/style-dictionary/#/transform_groups
   */
  styleDictionary.registerTransformGroup(cssCustomTransformGroup);
  styleDictionary.registerTransformGroup(scssCustomTransformGroup);
  styleDictionary.registerTransformGroup(iosSwiftSeparateCustomTransformGroup);

  /**
   * Formats define the output of your created files.
   *
   * https://amzn.github.io/style-dictionary/#/formats
   */
  styleDictionary.registerFormat(cssThemesCustomFormat);
  styleDictionary.registerFormat(scssThemesCustomFormat);
  styleDictionary.registerFormat(scssColorsCustomFormat);
  styleDictionary.registerFormat(iosSwiftColorsCustomFormat);
  styleDictionary.registerFormat(iosThemeProtocolCustomFormat);
  styleDictionary.registerFormat(iosSwiftThemesCustomFormat);
  styleDictionary.registerFormat(jsonAllCustomFormat);
  styleDictionary.registerFormat(jsonThemeCustomFormat);
  styleDictionary.registerFormat(jsonVariablesCustomFormat);
  styleDictionary.registerFormat(tsCustomFormat);
  styleDictionary.registerFormat(tsDictionaryCustomFormat);

  // Run the build command.
  styleDictionary.buildAllPlatforms();
};


buildTokens();