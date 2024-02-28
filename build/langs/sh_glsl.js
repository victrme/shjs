var sh_glsl = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var glsl_exports = {};
  __export(glsl_exports, {
    default: () => glsl_default
  });
  var glsl_default = [
    [
      [/\/\/\//g, "sh_comment", 1],
      [/\/\//g, "sh_comment", 7],
      [/\/\*\*/g, "sh_comment", 8],
      [/\/\*/g, "sh_comment", 9],
      [/^[ \t]*#(?:[ \t]*include)/g, "sh_preproc", 10, 1],
      [/^[ \t]*#(?:[ \t]*[A-Za-z0-9_]*)/g, "sh_preproc", -1],
      [
        /\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
        "sh_number",
        -1
      ],
      [/"/g, "sh_string", 13],
      [/'/g, "sh_string", 14],
      [
        /\b(?:attribute|const|uniform|varying|centroid|break|continue|do|for|while|if|else|in|out|inout|invariant|discard|return|struct)\b/g,
        "sh_keyword",
        -1
      ],
      [
        /gl_BackColor|gl_BackLightModelProduct|gl_BackLightProduct|gl_BackMaterial|gl_BackSecondaryColor|gl_ClipPlane|gl_ClipVertex|gl_Color|gl_DepthRange|gl_DepthRangeParameters|gl_EyePlaneQ|gl_EyePlaneR|gl_EyePlaneS|gl_EyePlaneT|gl_Fog|gl_FogColor|gl_FogFragCoord|gl_FogParameters|gl_FragColor|gl_FragCoord|gl_FragData|gl_FragDepth|gl_FragFacing|gl_FrontColor|gl_FrontLightModelProduct|gl_FrontLightProduct|gl_FrontMaterial|gl_FrontSecondaryColor|gl_LightModel|gl_LightModelParameters|gl_LightModelProducts|gl_LightProducts|gl_LightSource|gl_LightSourceParameters|gl_MaterialParameters|gl_MaxClipPlanes|gl_MaxCombinedTextureImageUnits|gl_MaxDrawBuffers|gl_MaxFragmentUniformComponents|gl_MaxLights|gl_MaxTextureCoords|gl_MaxTextureImageUnits|gl_MaxTextureUnits|gl_MaxVaryingFloats|gl_MaxVertexAttributes|gl_MaxVertexTextureImageUnits|gl_MaxVertexUniformComponents|gl_ModelViewMatrix|gl_ModelViewMatrixInverse|gl_ModelViewMatrixInverseTranspose|gl_ModelViewMatrixTranspose|gl_ModelViewProjectionMatrix|gl_ModelViewProjectionMatrixInverse|gl_ModelViewProjectionMatrixInverseTranspose|gl_ModelViewProjectionMatrixTranspose|gl_MultiTexCoord0|gl_MultiTexCoord1|gl_MultiTexCoord2|gl_MultiTexCoord2|gl_MultiTexCoord3|gl_MultiTexCoord4|gl_MultiTexCoord5|gl_MultiTexCoord6|gl_MultiTexCoord7|gl_NormScale|gl_Normal|gl_NormalMatrix|gl_ObjectPlaneQ|gl_ObjectPlaneR|gl_ObjectPlaneS|gl_ObjectPlaneT|gl_Point|gl_PointParameters|gl_PointSize|gl_Position|gl_ProjectionMatrix|gl_ProjectionMatrixInverse|gl_ProjectionMatrixInverseTranspose|gl_ProjectionMatrixTranspose|gl_SecondaryColor|gl_SecondaryColor|gl_TexCoord|gl_TextureEnvColor|gl_TextureMatrix|gl_TextureMatrixInverse|gl_TextureMatrixInverseTranspose|gl_TextureMatrixTranspose|gl_Vertex|\.(ambient|diffuse|specular|position|halfVector|spotDirection|spotExponent|spotCutoff|spotCosCutoff)|\.(constantAttenuation|linearAttenuation|quadraticAttenuation|sceneColor|emission|shininess)|\.(fadeThresholdSize|distanceConstantAttenuation|distanceLinearAttenuation|distanceQuadraticAttenuation)|\.([xyzw]{1,4}|[rgba]{1,4}|[stpq]{1,4}|near|far|diff|color|density|start|end|scale|size|sizeMin|sizeMax)/g,
        "sh_predef_var",
        -1
      ],
      [
        /\b(?:radians|degrees|sin|cos|tan|asin|acos|atan|pow|exp|log|exp2|log2|sqrt|inversesqrt|abs|sign|floor|ceil|fract|mod|min|max|clamp|mix|step|smoothstep|length|distance|dot|cross|normalize|ftransform|faceforward|reflect|refract|matrixCompMult|lessThan|lessThenEqual|greaterThan|greaterThanEqual|equal|notEqual|any|all|not|texture1D|texture1DProj|texture1DLod|texture1DProjLod|texture2D|texture2DProj|texture2DLod|texture2DProjLod|texture3D|texture3DProj|texture3DLod|texture3DProjLod|textureCube|textureCubeLod|shadow1D|shadow1DProj|shadow1DLod|shadow1DProjLod|shadow2D|shadow2DProj|shadow2DLod|shadow2DProjLod|dFdx|dFdy|fwidth|noise1|noise2|noise3|noise4)\b/g,
        "sh_predef_func",
        -1
      ],
      [
        /\b(?:float|int|void|bool|true|false|mat2|mat3|mat4|mat2x2|mat2x3|mat2x4|mat3x2|mat3x3|mat3x4|mat4x2|mat4x3|mat4x4|vec2|vec3|vec4|ivec2|ivec3|ivec4|bvec2|bvec3|bvec4|sampler1D|sampler2D|sampler3D|samplercube|sampler1Dshadow|sampler2Dshadow)\b/g,
        "sh_type",
        -1
      ],
      [/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g, "sh_symbol", -1],
      [/\{|\}/g, "sh_cbracket", -1],
      [/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g, "sh_function", -1]
    ],
    [
      [/$/g, null, -2],
      [
        /(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
        "sh_url",
        -1
      ],
      [/<\?xml/g, "sh_preproc", 2, 1],
      [/<!DOCTYPE/g, "sh_preproc", 4, 1],
      [/<!--/g, "sh_comment", 5],
      [/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g, "sh_keyword", -1],
      [/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g, "sh_keyword", 6, 1],
      [/&(?:[A-Za-z0-9]+);/g, "sh_preproc", -1],
      [/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g, "sh_keyword", -1],
      [/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g, "sh_keyword", 6, 1],
      [/@[A-Za-z]+/g, "sh_type", -1],
      [/(?:TODO|FIXME|BUG)(?:[:]?)/g, "sh_todo", -1]
    ],
    [
      [/\?>/g, "sh_preproc", -2],
      [/([^=" \t>]+)([ \t]*)(=?)/g, ["sh_type", "sh_normal", "sh_symbol"], -1],
      [/"/g, "sh_string", 3]
    ],
    [
      [/\\(?:\\|")/g, null, -1],
      [/"/g, "sh_string", -2]
    ],
    [
      [/>/g, "sh_preproc", -2],
      [/([^=" \t>]+)([ \t]*)(=?)/g, ["sh_type", "sh_normal", "sh_symbol"], -1],
      [/"/g, "sh_string", 3]
    ],
    [
      [/-->/g, "sh_comment", -2],
      [/<!--/g, "sh_comment", 5]
    ],
    [
      [/(?:\/)?>/g, "sh_keyword", -2],
      [/([^=" \t>]+)([ \t]*)(=?)/g, ["sh_type", "sh_normal", "sh_symbol"], -1],
      [/"/g, "sh_string", 3]
    ],
    [[/$/g, null, -2]],
    [
      [/\*\//g, "sh_comment", -2],
      [
        /(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
        "sh_url",
        -1
      ],
      [/<\?xml/g, "sh_preproc", 2, 1],
      [/<!DOCTYPE/g, "sh_preproc", 4, 1],
      [/<!--/g, "sh_comment", 5],
      [/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g, "sh_keyword", -1],
      [/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g, "sh_keyword", 6, 1],
      [/&(?:[A-Za-z0-9]+);/g, "sh_preproc", -1],
      [/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g, "sh_keyword", -1],
      [/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g, "sh_keyword", 6, 1],
      [/@[A-Za-z]+/g, "sh_type", -1],
      [/(?:TODO|FIXME|BUG)(?:[:]?)/g, "sh_todo", -1]
    ],
    [
      [/\*\//g, "sh_comment", -2],
      [
        /(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
        "sh_url",
        -1
      ],
      [/(?:TODO|FIXME|BUG)(?:[:]?)/g, "sh_todo", -1]
    ],
    [
      [/$/g, null, -2],
      [/</g, "sh_string", 11],
      [/"/g, "sh_string", 12],
      [/\/\/\//g, "sh_comment", 1],
      [/\/\//g, "sh_comment", 7],
      [/\/\*\*/g, "sh_comment", 8],
      [/\/\*/g, "sh_comment", 9]
    ],
    [
      [/$/g, null, -2],
      [/>/g, "sh_string", -2]
    ],
    [
      [/$/g, null, -2],
      [/\\(?:\\|")/g, null, -1],
      [/"/g, "sh_string", -2]
    ],
    [
      [/"/g, "sh_string", -2],
      [/\\./g, "sh_specialchar", -1]
    ],
    [
      [/'/g, "sh_string", -2],
      [/\\./g, "sh_specialchar", -1]
    ]
  ];
  return __toCommonJS(glsl_exports);
})();
