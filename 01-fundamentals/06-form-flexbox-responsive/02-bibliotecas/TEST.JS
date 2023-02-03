/**
 *	Pesquisa Inteligente
 *	@description Execurar buscas sem recarregar a pÃ¡gina
 *	@author Carlos Vinicius
 *	@author Edson Domingos JÃºnior
 *	@version 3.8
 *	@date 2012-10-01
 *  atualizaÃ§Ã£o pimenta
 *  v.201903291855
 *  FIXME: reload da pÃ¡gina nÃ£o carrega tags
 */
"function" !== typeof String.prototype.replaceSpecialChars && (String.prototype.replaceSpecialChars = function () {
  var r = {
    "\u00e7": "c",
    "\u00e6": "ae",
    "\u0153": "oe",
    "\u00e1": "a",
    "\u00e9": "e",
    "\u00ed": "i",
    "\u00f3": "o",
    "\u00fa": "u",
    "\u00e0": "a",
    "\u00e8": "e",
    "\u00ec": "i",
    "\u00f2": "o",
    "\u00f9": "u",
    "\u00e4": "a",
    "\u00eb": "e",
    "\u00ef": "i",
    "\u00f6": "o",
    "\u00fc": "u",
    "\u00ff": "y",
    "\u00e2": "a",
    "\u00ea": "e",
    "\u00ee": "i",
    "\u00f4": "o",
    "\u00fb": "u",
    "\u00e5": "a",
    "\u00e3": "a",
    "\u00f8": "o",
    "\u00f5": "o",
    u: "u",
    "\u00c1": "A",
    "\u00c9": "E",
    "\u00cd": "I",
    "\u00d3": "O",
    "\u00da": "U",
    "\u00ca": "E",
    "\u00d4": "O",
    "\u00dc": "U",
    "\u00c3": "A",
    "\u00d5": "O",
    "\u00c0": "A",
    "\u00c7": "C"
  };
  return this.replace(/[\u00e0-\u00fa]/g, function (e) {
    return "undefined" != typeof r[e] ? r[e] : e
  })
});
"function" !== typeof String.prototype.trim && (String.prototype.trim = function () {
  return this.replace(/^\s+|\s+$/g, "")
});
jQuery.fn.vtexSmartResearch = function (r) {
  $this = jQuery(this);
  var e = function (a, b) {
      "object" == typeof console && console.log("[Smart Research - " + (b || "Erro") + "] " + a)
    },
    B = {
      pageLimit: null,
      loadContent: ".prateleira[id^=ResultItems]",
      shelfClass: ".prateleira ",
      filtersMenu: ".search-multiple-navigator",
      linksMenu: ".search-single-navigator",
      menuDepartament: ".navigation .menu-departamento",
      insertMenuAfter: ".search-multiple-navigator h3:first",
      emptySearchElem: jQuery('<div class="vtexsr-emptySearch"></div>'),
      elemLoading: '<div id="scrollLoading"><img src="/arquivos/loading.gif"/></div>',
      // returnTopText: '<span class="text">voltar ao</span><span class="text2">TOPO</span>',
      emptySearchMsg: "<h3>Esta combina\u00e7\u00e3o de filtros n\u00e3o retornou nenhum resultado!</h3>",
      filterErrorMsg: "Houve um erro ao tentar filtrar a p\u00e1gina!",
      searchUrl: null,
      mergeMenu: !0,
      usePopup: !1,
      showLinks: !0,
      popupAutoCloseSeconds: 3,
      filterScrollTop: function (a) {
        return a.top - 20
      },
      callback: function () {},
      getShelfHeight: function (a) {
        return a.scrollTop() + a.height()
      },
      shelfCallback: function () {},
      ajaxCallback: function () {},
      emptySearchCallback: function () {},
      authorizeScroll: function () {
        return !0
      },
      authorizeUpdate: function () {
        return !0
      },
      labelCallback: function () {}
    },
    b = jQuery.extend(B, r),
    C = jQuery(""),
    x = jQuery(b.elemLoading),
    p = 2,
    t = !0,
    m = jQuery(window);
  jQuery(document);
  var y = jQuery("html,body"),
    j = jQuery("body"),
    n = "",
    d = "",
    u = "",
    v = !1,
    h = jQuery(b.loadContent),
    k = jQuery(b.filtersMenu),
    f = {
      requests: 0,
      filters: 0,
      isEmpty: !1
    },
    l = {},
    i = {
      getUrl: function (a) {

        console.log((u + d).replace(/PageNumber=[0-9]*/, "PageNumber=" + D));
        return a ? n.replace(/PageNumber=[0-9]*/, "PageNumber=" + p) : (u + d).replace(/PageNumber=[0-9]*/, "PageNumber=" +
          D)

      },
      getSearchUrl: function () {
        var a, b, c;
        jQuery("script:not([src])").each(function () {
          b = jQuery(this)[0].innerHTML;
          c = /\/buscapagina\?.+&PageNumber=/i;
          if (-1 < b.search(/\/buscapagina\?/i)) return a = c.exec(b), !1
        });
        if ("undefined" !== typeof a && "undefined" !== typeof a[0]) return a[0];
        e("N\u00e3o foi poss\u00edvel localizar a url de busca da p\u00e1gina.\n Tente adicionar o .js ao final da p\u00e1gina. \n[M\u00e9todo: getSearchUrl]");
        return ""
      },
      scrollToTop: function () {
        var a = j.find("#returnToTop");
        1 > a.length && (a = jQuery('<div id="returnToTop"><a href="#">' +
          b.returnTopText + '<span class="arrowToTop"></span></a></div>'), j.append(a));
        var g = m.height();
        m.bind("resize", function () {
          g = m.height()
        });
        m.bind("scroll", function () {
          m.scrollTop() > g ? a.stop(!0).fadeTo(300, 1, function () {
            a.show()
          }) : a.stop(!0).fadeTo(300, 0, function () {
            a.hide()
          })
        });
        a.bind("click", function () {
          y.animate({
            scrollTop: 0
          }, "slow");
          return !1
        })
      },
      infinitScroll: function () {
        var a, g, c;
        c = (j.find(".pager:first").attr("id") || "").split("_").pop();
        a = null !== b.pageLimit ? b.pageLimit : window["pagecount_" + c];
        g = !0;
        "undefined" ===
        typeof a && (a = 99999999);
        m.bind("scroll", function () {
          var c = jQuery(this);
          if (!v && p <= a && t && b.authorizeScroll(f)) {
            if (c.scrollTop() + c.height() >= b.getShelfHeight(h) && g) {
              var d = h.find(b.shelfClass).filter(":last");
              d.after(x);
              g = !1;
              w = jQuery.ajax({
                url: i.getUrl(!0),
                success: function (a) {
                  1 > a.trim().length ? (t = !1, e("N\u00e3o existem mais resultados a partir da p\u00e1gina: " + (p - 1), "Aviso")) : d.after(a);
                  g = !0;
                  x.remove();
                  f.requests++;
                  b.ajaxCallback(f)
                }
              });
              p++
            }
          } else return !1
        })
      }
    },
    n = null !== b.searchUrl ? u = b.searchUrl : u = i.getSearchUrl();
  if (1 > $this.length) return e("Nenhuma op\u00e7\u00e3o de filtro encontrada", "Aviso"), b.showLinks && jQuery(b.linksMenu).css("visibility", "visible").show(), i.infinitScroll(), i.scrollToTop(), $this;
  if (1 > h.length) return e("Elemento para destino da requisi\u00e7\u00e3o n\u00e3o foi encontrado \n (" + h.selector + ")"), !1;
  1 > k.length && e("O menu de filtros n\u00e3o foi encontrado \n (" + k.selector + ")");
  var z = jQuery(b.linksMenu),
    q = jQuery('<div class="vtexSr-overlay"></div>'),
    A = jQuery(b.menuDepartament),
    E = h.offset(),
    D = 1,
    s = null,
    w = null;
  b.emptySearchElem.append(b.emptySearchMsg);
  h.before(q);
  var c = {
    exec: function () {
      c.setFilterMenu();
      c.fieldsetFormat();
      $this.each(function () {
        var a = jQuery(this),
          b = a.parent();
        a.is(":checked") && (d += "&" + (a.attr("rel") || ""), b.addClass("sr_selected"));
        c.adjustText(a);
        b.append('<span class="sr_box"></span><span class="sr_box2"></span>');
        a.bind("change", function () {
          c.inputAction();
          a.is(":checked") ? c.addFilter(a) : c.removeFilter(a);
          f.filters = $this.filter(":checked").length
        })
      });
      "" !== d && c.addFilter(C)
    },
    mergeMenu: function () {
      if (!b.mergeMenu) return !1;
      A.insertAfter(b.insertMenuAfter);
      c.departamentMenuFormat(A)
    },
    mergeMenuList: function () {
      var a = 0;
      k.find("h3,h4").each(function () {
        var b = z.find("h3,h4").eq(a).next("ul");
        b.insertAfter(jQuery(this));
        c.departamentMenuFormat(b);
        a++
      })
    },
    departamentMenuFormat: function (a) {
      a.find("a").each(function () {
        var a = jQuery(this);
        a.text(c.removeCounter(a.text()))
      })
    },
    fieldsetFormat: function () {
      l.fieldsetCount = 0;
      l.tmpCurrentLabel = {};
      k.find("fieldset").each(function () {
        var a = jQuery(this),
          c = a.find("label"),
          d = "filtro_" + (a.find("h5:first").text() || "").toLowerCase().replaceSpecialChars().replace(/\s/g, "-");
        l[d] = {};
        1 > c.length ? a.hide() : (a.addClass(d), c.each(function (c) {
          var g = jQuery(this),
            e = g.find("input").val() || "",
            f = "sr_" + e.toLowerCase().replaceSpecialChars().replace(/\s/g, "-");
          l.tmpCurrentLabel = {
            fieldsetParent: [a, d],
            elem: g
          };
          l[d][c.toString()] = {
            className: f,
            title: e
          };
          g.addClass(f).attr({
            title: e,
            index: c
          });
          b.labelCallback(l)
        }), l.fieldsetCount++)
      })
    },
    inputAction: function () {
      null !== w && w.abort();
      null !== s && s.abort();
      p = 2;
      t = !0
    },
    addFilter: function (a) {
      d += "&" + (a.attr("rel") || "");
      q.fadeTo(300, 0.6);
      n = i.getUrl();
      s = jQuery.ajax({
        url: n,
        success: c.filterAjaxSuccess,
        error: c.filterAjaxError
      });
      a.parent().addClass("sr_selected");
      var clone = a.parent().clone();
      if ($(window).width() > 750) {
        $("#selected-filters").append(clone);
        clone.click(function () {
          c.removeFilter(a);
          a.attr("checked", false);
          this.remove();
        });
        a.parent().css("display", "none");
      }
    },
    removeFilter: function (a) {
      var b = a.attr("rel") || "";
      q.fadeTo(300, 0.6);
      "" !== b && (d = d.replace("&" + b, ""));
      n = i.getUrl();
      s = jQuery.ajax({
        url: n,
        success: c.filterAjaxSuccess,
        error: c.filterAjaxError
      });
      a.parent().css("display", "block").removeClass("sr_selected");
    },
    filterAjaxSuccess: function (a) {
      a = jQuery(a);
      q.fadeTo(300,
        0,
        function () {
          jQuery(this).hide()
        });
      c.updateContent(a);
      f.requests++;
      b.ajaxCallback(f);
      // y.animate({
      //   scrollTop: b.filterScrollTop(E || {
      //     top: 0,
      //     left: 0
      //   })
      // }, 600)
    },
    filterAjaxError: function () {
      q.fadeTo(300, 0, function () {
        jQuery(this).hide()
      });
      alert(b.filterErrorMsg);
      e("Houve um erro ao tentar fazer a requisi\u00e7\u00e3o da p\u00e1gina com filtros.")
    },
    updateContent: function (a) {
      v = !0;
      if (!b.authorizeUpdate(f)) return !1;
      var c = a.filter(b.shelfClass),
        a = h.find(b.shelfClass);
      (0 < a.length ? a : b.emptySearchElem).slideUp(600, function () {
        filterCleaner();
        jQuery(this).remove();
        b.usePopup ? j.find(".boxPopUp2").vtexPopUp2() : b.emptySearchElem.remove();
        0 < c.length ? (c.hide(), h.append(c), b.shelfCallback(), c.slideDown(2000, function () {
          v = !1
        }), f.isEmpty = !1) : (f.isEmpty = !0, b.usePopup ? b.emptySearchElem.addClass("freeContent autoClose ac_" + b.popupAutoCloseSeconds).vtexPopUp2().stop(!0).show() : (h.append(b.emptySearchElem), b.emptySearchElem.show().css("height", "auto").fadeTo(300, 0.2, function () {
          b.emptySearchElem.fadeTo(300, 1)
        })), b.emptySearchCallback(f))
      })
    },
    adjustText: function (a) {
      var b = a.parent(),
        d = b.text();
      qtt = "";
      d = c.removeCounter(d);
      b.text(d).prepend(a)
    },
    removeCounter: function (a) {
      return a.replace(/\([0-9]+\)/ig, function (a) {
        qtt = a.replace(/\(|\)/, "");
        return ""
      })
    },
    setFilterMenu: function () {
      0 < k.length && (z.hide(), k.show())
    }
  };
  j.hasClass("departamento") ? c.mergeMenu() : (j.hasClass("categoria") || j.hasClass("resultado-busca")) && c.mergeMenuList();
  c.exec();
  i.infinitScroll();
  i.scrollToTop();
  b.callback();
  k.css("visibility", "visible")
};


function filterCleaner() {
  //LIMPA FILTROS
  var urlInicio = '/api/catalog_system/pub/products/search',
    urlFinal = '?map=c',
    pathname = window.location.pathname,
    categoriaCount = pathname.split("/").length - 2;
  urlInicio += pathname;
  for (var i = 0; i < categoriaCount; i++) {
    urlFinal += ',c';
  }
  $('#selected-filters label').each(function () {
    var rel = $(this).find('input').attr('rel'),
      relName = '/' + $(this).find('input').attr('value');
    if (rel != undefined) {
      rel = rel.split(':');
      urlFinal += rel[0].replace('fq=', ',');
      urlInicio += relName;
    }
  });
  $('.search-multiple-navigator fieldset label').each(function () {
    var $this = $(this),
      rel = $(this).find("input").attr("rel"),
      realName = $(this).find('input').attr("value"),
      sr_name = "." + $(this).attr("class");

    if (realName != undefined) {
      var relName = "/" + realName.replace("/", "@slash@").replace("(", "&#40;").replace(")", "&#41;").replace("'", "@squo@");

    }
    // ".sr_" + retira_acentos(joinURL(realName));
    if (rel != undefined) {
      rel = rel.split(":");
      var relCode = rel[0].replace("fq=", ",");
      if (realName.includes("[")) {
        var priceRange = (realName.substring(realName.indexOf('[') + 1, realName.lastIndexOf(']'))).split('TO');
        relName = "/de-" + (priceRange[0]).replace(' ', '') + "-a-" + priceRange[1].replace(' ', '');
        relCode = ",priceFrom";
      }
    }

    // verificador(relName, relCode, sr_name)
    $.getJSON(urlInicio + relName + urlFinal + relCode, function (searchResult) {
      if (!searchResult.length > 0) {
        if (!$this.hasClass('emptySearch')) {
          $this.addClass('emptySearch');
        }
      } else {
        $this.removeClass('emptySearch');
      }
    })
  });

  function verificador(relName, relCode, sr_name) {
    $.getJSON(urlInicio + relName + urlFinal + relCode, function (searchResult) {
      if (!searchResult.length > 0) {
        if (!$(sr_name).hasClass('emptySearch')) {
          $(sr_name).addClass('emptySearch');
        }
      } else {
        $(sr_name).removeClass('emptySearch');
      }
    })
  }

}

function retira_acentos(str) {
  com_acento = "Ã€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃÅ”ÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿Å•&";
  sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyre";
  novastr = "";
  for (i = 0; i < str.length; i++) {
    troca = false;
    for (a = 0; a < com_acento.length; a++) {
      if (str.substr(i, 1) == com_acento.substr(a, 1)) {
        novastr += sem_acento.substr(a, 1);
        troca = true;
        break;
      }
    }
    if (troca == false) {
      novastr += str.substr(i, 1);
    }
  }
  return novastr.toLowerCase();
}

function joinURL(str) {
  com_espaco = " ";
  sem_espaco = "-";
  novastr = "";
  for (i = 0; i < str.length; i++) {
    troca = false;
    for (a = 0; a < com_espaco.length; a++) {
      if (str.substr(i, 1) == com_espaco.substr(a, 1)) {
        novastr += sem_espaco.substr(a, 1);
        troca = true;
        break;
      }
    }
    if (troca == false) {
      novastr += str.substr(i, 1);
    }
  }
  return novastr;
}

;
! function () {
  function e(t, e) {
    return "function" != typeof t || t.replaced ? t : (e.replaced = !0, e)
  }
  var n, r, o, u = 0;
  if ("undefined" != typeof CustomEvent && "function" == typeof window.dispatchEvent) {
    function s(t) {
      try {
        if ("object" == typeof t && (t = JSON.stringify(t)), "string" == typeof t) return window.dispatchEvent(new CustomEvent("lprequeststart", {
          detail: {
            data: t,
            requestID: ++u
          }
        })), u
      } catch (t) {}
    }

    function c(t) {
      try {
        window.dispatchEvent(new CustomEvent("lprequestend", {
          detail: t
        }))
      } catch (t) {}
    }
    "undefined" != typeof XMLHttpRequest && XMLHttpRequest.prototype && XMLHttpRequest.prototype.send && (XMLHttpRequest.prototype.send = e(XMLHttpRequest.prototype.send, (o = XMLHttpRequest.prototype.send, function (t) {
      var e = this,
        n = s(t);
      return n && e.addEventListener("loadend", function () {
        c({
          requestID: n,
          statusCode: e.status
        })
      }), o.apply(e, arguments)
    }))), "function" == typeof fetch && (fetch = e(fetch, (r = fetch, function (t, e) {
      var n = s(e),
        o = r.apply(this, arguments);
      if (n) {
        function u(t) {
          c({
            requestID: n,
            statusCode: t && t.status
          })
        }
        o.then(u).catch(u)
      }
      return o
    })));

    function i(t) {
      return e(t, function () {
        try {
          this.dispatchEvent(new CustomEvent("lpsubmit"))
        } catch (t) {}
        return t.apply(this, arguments)
      })
    }

    function t() {
      if (document && document.forms && 0 < document.forms.length)
        for (var t = 0; t < document.forms.length; ++t) document.forms[t].submit = i(document.forms[t].submit)
    }
    document && "interactive" === document.readyState || "complete" === document.readyState ? t() : window.addEventListener("DOMContentLoaded", t, !0), Document.prototype.createElement = e(Document.prototype.createElement, (n = Document.prototype.createElement, function () {
      var t = n.apply(this, arguments);
      return t && "FORM" === t.nodeName && t.submit && (t.submit = i(t.submit)), t
    }))
  }
}();