// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/love.js":[function(require,module,exports) {
var blk_pitn = {
  //各小方块相对【自身中心】的位置 -- 【自身中心】确定为#div22的方块
  block1: [[0, 1], [0, 0], [-1, 0], [-1, -1]],
  block2: [[0, 1], [0, 0], [-1, 0], [0, -1]],
  block3: [[-1, 1], [0, 0], [-1, 0], [-1, -1]],
  block4: [[0, 1], [0, 0], [-1, 0], [-1, -1]],

  /* 1 */
  block5: [[-1, 1], [0, 0], [-1, 0], [0, -1]],
  block6: [[0, -1], [0, 0], [-1, 0], [1, -1]],
  block7: [[-1, -1], [0, 0], [-1, 0], [1, 0]],
  block8: [[-1, 1], [0, 0], [-1, 0], [-1, -1]],

  /* 3 */
  block9: [[0, -1], [0, 0], [-1, 0], [1, 0]],
  block10: [[-1, 1], [0, 0], [-1, 0], [1, 0]],
  block11: [[2, 0], [0, 0], [-1, 0], [1, 0]],

  /* — */
  block12: [[0, 1], [0, 0], [-1, 0], [0, -1]],

  /* 2 */
  block13: [[0, 1], [0, 0], [-1, 0], [-1, -1]],

  /* 1 */
  block14: [[1, 1], [0, 0], [-1, 0], [1, 0]],
  block15: [[1, -1], [0, 0], [-1, 0], [1, 0]],
  block16: [[-1, -1], [0, 0], [-1, 0], [1, 0]],

  /* 7 */
  block17: [[0, 1], [0, 0], [-1, 0], [0, -1]],

  /* 2 */
  block18: [[0, 1], [0, 0], [-1, 0], [-1, -1]],

  /* 1 */
  block19: [[0, -1], [0, 0], [-1, 0], [1, 0]],

  /* 9 */
  block20: [[1, -1], [0, 0], [-1, 0], [1, 0]],
  block21: [[0, 1], [0, 0], [-1, 0], [-1, -1]],

  /* 1 */
  block22: [[1, 1], [0, 0], [-1, 0], [1, 0]],

  /* 14 */
  block23: [[0, 2], [0, 0], [0, -1], [0, 1]]
  /* | */

},
    offset_pitn = {
  //各方块block相对【爱心中心】的位置
  block1: [5, 3],
  block2: [5, 1],
  block3: [3, 4],
  block4: [3, 2],
  block5: [3, -1],
  block6: [2, 5],
  block7: [2, 1],
  block8: [1, -1],
  block9: [1, -3],
  block10: [1, 2],
  block11: [0, 3],
  block12: [0, 0],

  /* 【爱心中心】*/
  block13: [-1, -4],
  block14: [0, -2],
  block15: [-2, 4],
  block16: [-2, 2],
  block17: [-2, 0],
  block18: [-3, -2],
  block19: [-4, 0],
  block20: [-3, 5],
  block21: [-5, 3],
  block22: [-4, 1],
  block23: [-6, 1]
  /* 因动画需要移动一个方块，故y轴坐标-1*/

};
var blocks = document.getElementsByClassName("block"),
    block = blocks[0],
    love = document.getElementsByClassName("love")[0],
    timer = null,
    index = 0,
    //记录拼接爱心的动画步骤
clone_block; //用于克隆方块
//1.移动方块的【自身中心】到【爱心中心】

block.style.top = "50%";
block.style.left = "50%";
block.style.margin = "-20px 0 0 -20px";
var block_left = parseFloat(window.getComputedStyle(block, null).left.slice(0, -2)),
    //【爱心中心】 左边距离父元素的距离
block_top = parseFloat(window.getComputedStyle(block, null).top.slice(0, -2)); //【爱心中心】 顶部距离父元素的距离

function Next() {
  if (++index >= 24) {
    clearInterval(timer);
    Rise(); // alert("已经是最后一个了！");

    return;
  }

  block.style.visibility = "visible"; //升空动画前允许可见
  //2.移动方块到指定的位置-即是移动【自身中心】到目标位置

  block.style.left = block_left + 40 * offset_pitn["block" + index][0] + "px";
  block.style.top = block_top - 40 * offset_pitn["block" + index][1] + "px";

  for (var i = 0; i < block.children.length; i++) {
    // block.children[1].innerText = index;    //编号便于调试
    block.children[i].style.left = blk_pitn["block" + index][i][0] * -40 + "px";
    /* -40 是因为逻辑坐标和浏览器的x，y轴方向不一样*/

    block.children[i].style.top = blk_pitn["block" + index][i][1] * -40 + "px";
  } //3.克隆方块—保存现在的位置

  /* 一共会克隆23个方块，加上原先的一个方块block，共24个方块，即多出原先的block方块*/


  clone_block = block.cloneNode(true);
  love.appendChild(clone_block);

  if (love.children.length >= 24) {
    blocks[blocks.length - 1].children[2].style.display = "none"; //去掉多余的小方块

    block.style.display = "none"; //隐藏多出的block方块
  }
}

function Rise() {
  //4.爱心升高，多出的那个小方块开始掉落
  console.log("开始升空");
  var timer2 = null,
      distance = 0;
  /* 升高时，移动的距离*/

  var target = 120,

  /* 目标距离*/
  speed = 1;
  /*移动速度*/

  var love_top = parseFloat(window.getComputedStyle(love, null).top.slice(0, -2)); //爱心盒子距离屏幕顶部的距离

  timer2 = setInterval(function () {
    distance += speed; // console.log(distance);

    if (distance >= target) {
      clearInterval(timer2);
      console.log("升空完毕");
    }

    love.style.top = love_top - distance + "px";
  }, 22);
}

window.onload = function () {
  setTimeout(function () {
    timer = setInterval(function () {
      Next();
    }, 300);
  }, 12000); //gif图播放完毕所需时间为11.73s
};
},{}],"../../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61605" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/love.js"], null)
//# sourceMappingURL=/love.ab1b4b09.js.map