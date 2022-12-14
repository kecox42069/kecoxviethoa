$(document).ready(function() {

    /*Code for ambient video play/pause button*/

    $(".m-ambient-video.pp-button").each(function(index) {
        var isIOS = /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        var videoStateClass = "";
        var aria_label = "";
        var toggled_label = "";
        var video = $(this).find("video")[0];
        if (!video.controls) {
            video.addEventListener("ended", function() {
                var curButton = $(this).parent().parent().find(".vidPlayPause")[0];
                aria_label = locStrings.locales[urlRegion].keyPlaypressed;
                $(curButton).removeClass("glyph-pause").addClass("glyph-play");
                $(curButton).attr("aria-label", aria_label);
            });
            if (isPlaying(video) || video.autoplay) {
                videoStateClass = "glyph-pause";
                aria_label = locStrings.locales[urlRegion].keyPause;
                toggled_label = "play was pressed";
            } else {
                videoStateClass = "glyph-play";
                aria_label = locStrings[urlRegion].keyPlay;
                toggled_label = "pause button was pressed";
            }
            var button = document.createElement("BUTTON");
            button.classList.add("c-glyph");
            button.classList.add("f-toggle");
            button.classList.add("vidPlayPause");
            button.classList.add(videoStateClass);
            button.setAttribute('data-toggled-label', toggled_label);
            button.setAttribute('aria-label', aria_label);
            button.setAttribute('aria-pressed', true);

         if (!isIOS) {
            if ($(this).children().length === 1) {
                var buttonDiv = document.createElement("div");
                buttonDiv.appendChild(button);
                $(this)[0].appendChild(buttonDiv);
            } else {
                var wholeContainer = $(this).children().eq(1);
                var content = wholeContainer.children().eq(0)[0];
                wholeContainer.children().remove();
                var wholeContainerInstance = wholeContainer[0];
                wholeContainerInstance.appendChild(button);
                wholeContainerInstance.appendChild(content);
            }
          }
        }
    });

    $(".vidPlayPause").click(function() {
        var curVideo = $(this).parent().parent().find("video")[0];
        var aria_label = "";
        if ($(this).hasClass("glyph-pause")) {
            aria_label = locStrings.locales[urlRegion].keyPausepressed;
            $(this).removeClass("glyph-pause").addClass("glyph-play");
            $(this).attr("aria-label", aria_label);
            $(this).attr("data-toggled-label", "paused");
            curVideo.pause();
        } else {
            aria_label = locStrings.locales[urlRegion].keyPlaypressed;
            $(this).removeClass("glyph-play").addClass("glyph-pause");
            $(this).attr("aria-label", aria_label);
            $(this).attr("data-toggled-label", "play");
            curVideo.play();
        }
    });

    function isPlaying(video) {
        return (video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2)
    }
    /*END Code for ambient video play/pause button*/

    // all the following works only with newer browsers
    var userAgentString = navigator.userAgent;
    if (userAgentString.indexOf("Trident") === -1) {

      // code for video play upon scroll into viewport 
    $(".viewport-play").each(function (index) {
      // pause any autoplay videos
      $(this).find("video")[0].pause();
    });
    var videlements = document.querySelectorAll(".viewport-play");

    if (navigator.userAgent.indexOf("Edge") >= 0) {
      // for Edge browser
      var imgOptions = {
        threshold: 1,
        rootMargin: "-360px 0px -360px 0px"
      };
      var imgObserver = new IntersectionObserver(function (entries, imgObserver) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          } else {
            // console.log("viewport play - playing video " + entry.target)
            $(entry.target).find("video")[0].play();
            imgObserver.unobserve(entry.target);
          }
        });
      }, imgOptions);
      videlements.forEach(function (vid) {
        imgObserver.observe(vid);
      });
    } else {
      var _imgOptions = {
        threshold: 1,
        rootMargin: "140px 0px 140px 0px"
      };

      var _imgObserver = new IntersectionObserver(function (entries, imgObserver) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          } else {
            // console.log("viewport play - playing video " + entry.target)
            $(entry.target).find("video")[0].play();
            imgObserver.unobserve(entry.target);
          }
        });
      }, _imgOptions);

      videlements.forEach(function (vid) {
        _imgObserver.observe(vid);
      });
    } // end code for video play upon scroll into viewport
    // code for Minecraft-like text scoot


    if ($(".textscoot").length > 0) {
      $("body").append('<style>' + '.textscoot {transition: 500ms all !important; top: 50% !important;}' + '.textscoot.scooted {top: 70% !important;}' + 
        '@media only screen and (min-width: 1084px) { .m-feature.f-align-right.f-image-priority>div.textscoot {left: 64.5%;}}' +
        '</style>');
      $(".textscoot").addClass("scooted");
      var txtelements = document.querySelectorAll(".textscoot");

      if (navigator.userAgent.indexOf("Edge") >= 0) {
        // for Edge browser
        var txtOptions = {
          threshold: 1,
          rootMargin: "-120px 0px -120px 0px"
        };
        var txtObserver = new IntersectionObserver(function (entries, txtObserver) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
              return;
            } else {
              // console.log("text scooting " + entry.target)
              $(entry.target).removeClass("scooted");
              txtObserver.unobserve(entry.target);
            }
          });
        }, txtOptions);
        txtelements.forEach(function (txt) {
          txtObserver.observe(txt);
        });
      } else {
        var _txtOptions = {
          threshold: 1,
          rootMargin: "-20px 0px -20px 0px"
        };

        var _txtObserver = new IntersectionObserver(function (entries, txtObserver) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
              return;
            } else {
              // console.log("text scooting " + entry.target)
              $(entry.target).removeClass("scooted");
              txtObserver.unobserve(entry.target);
            }
          });
        }, _txtOptions);

        txtelements.forEach(function (txt) {
          _txtObserver.observe(txt);
        });
      }
    } // end code for Minecraft-like text scoot

    // sliding green jump-g
    if ($(".jump-g.jumpganimate").length > 0) {
      $(".jump-g.jumpganimate").addClass("jumpgoffleft");
      $("body").append('<style>' + 
                        '.jump-g.jumpganimate.jumpgoffleft {right: 150px;opacity: 0;}' + 
                        '.jump-g.jumpganimate {position: relative;transition:700ms all;right:0}' + 
                      '</style>');
      var jumpgelements = document.querySelectorAll(".jumpgcontainer");

      if (navigator.userAgent.indexOf("Edge") >= 0) {
        // for Edge browser
        var imgOptions = {
          threshold: .98,
          rootMargin: "-120px 0px -120px 0px"
        };
        var imgObserver = new IntersectionObserver(function (entries, imgObserver) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
              return;
            } else {
              //console.log("animating jump-g " + entry.target)
              var jdelay = 0;
              if ($(entry.target).find(".jumpgoffleft").attr("data-flyin-delay") !== undefined && 
                  $(entry.target).find(".jumpgoffleft").attr("data-flyin-delay").length > 0) {
                jdelay = parseInt($(entry.target).find(".jumpgoffleft").attr("data-flyin-delay"));
              }
              setTimeout(function() {
                $(entry.target).find(".jumpgoffleft").removeClass("jumpgoffleft");
              }, jdelay)
              imgObserver.unobserve(entry.target);
            }
          });
        }, imgOptions);
        jumpgelements.forEach(function (ele) {
          imgObserver.observe(ele);
        });
      } else {
         var imgOptions = {
          threshold: .98,
          rootMargin: "0px 0px 0px 0px"
        };
        var imgObserver = new IntersectionObserver(function (entries, imgObserver) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
              return;
            } else {
              //console.log("animating jump-g " + entry.target)
              var jdelay = 0;
              if ($(entry.target).find(".jumpgoffleft").attr("data-flyin-delay") !== undefined && 
                  $(entry.target).find(".jumpgoffleft").attr("data-flyin-delay").length > 0) {
                jdelay = parseInt($(entry.target).find(".jumpgoffleft").attr("data-flyin-delay"));
              }
              setTimeout(function() {
                $(entry.target).find(".jumpgoffleft").removeClass("jumpgoffleft");
              }, jdelay)
              
              imgObserver.unobserve(entry.target);
            }
          });
        }, imgOptions);
        jumpgelements.forEach(function (ele) {
          imgObserver.observe(ele);
        });
      }

    }
    // end sliding green jump-g

    } // end code only for newer browsers

    
// FAQ Code
if ($(".faq-mwf").length > 0 && $("[type='application/ld+json']").length === 0) {
    var popFaqStructuredData = (function() {
      var newQnum = 1;
      $(".faq-mwf .c-drawer").each(function() {
        var newId = "row-" + newQnum.toString();
        $(this).find("button").attr("aria-controls", newId);
        $(this).find("div").eq(0).attr("id", newId);
        newQnum++;
      })
      var qatext = "";
      var qnum = $(".faq-mwf .c-drawer").length;
      for (var i = 1; i <= qnum; i++) {
        var theQ = $("[aria-controls='row-" + i + "'] p").html().replace(/"/g,"'");
        var theA = $("#row-" + i + " p").html().replace(/"/g,"'");
        qatext+= '{"@type": "Question",' +
                     '"name": "' + theQ + '",' +
                     '"acceptedAnswer": {' +
                       '"@type": "Answer",' +
                       '"text": "' + theA + '"   }}'
        if (i !== qnum) { qatext+= ", ";}
      }
      $("body").append('<sc' + 'ript type="application/ld+json"> {' +
                         '"@context": "https://schema.org",' +
                         '"@type": "FAQPage",' +
                         '"mainEntity": [' + qatext + ']}' +
                        '</sc' + 'ript>')
    })();
  }
// RTL to LTR fix 
if ((urlRegion == "ar-ae") || (urlRegion == "ar-sa") || (urlRegion == "he-il")) {
 $("html").attr("dir", "ltr");
 $(".uhf-header").attr("dir", "rtl");
}


})

locStrings = {
    "locales": {
        "en-us": {
            "keyPlay": "Play",
            "keyPause": "Pause",
            "keyPlaypressed": "Play button is on",
            "keyPausepressed": "Pause button is on"
        },
        "ar-ae": {
            "keyPlay": "Play",
            "keyPause": "Pause",
            "keyPlaypressed": "Play button is on",
            "keyPausepressed": "Pause button is on"
        },
        "ar-sa": {
            "keyPlay": "Play",
            "keyPause": "Pause",
            "keyPlaypressed": "Play button is on",
            "keyPausepressed": "Pause button is on"
        },
        "cs-cz": {
            "keyPlay": "Hr??t",
            "keyPause": "Pauza",
            "keyPlaypressed": "Tla????tko p??ehr??v??n?? je zapnut??",
            "keyPausepressed": "Tla????tko pro pauzu je zapnut??"
        },
        "da-dk": {
            "keyPlay": "Spil",
            "keyPause": "Pause",
            "keyPlaypressed": "Play-knappen er t??ndt",
            "keyPausepressed": "Pause-knappen er t??ndt"
        },
        "de-at": {
            "keyPlay": "Wiedergeben",
            "keyPause": "Pause",
            "keyPlaypressed": "Play-Taste ist eingeschaltet",
            "keyPausepressed": "Pause-Taste ist eingeschaltet"
        },
        "de-ch": {
            "keyPlay": "Wiedergeben",
            "keyPause": "Pause",
            "keyPlaypressed": "Play-Taste ist eingeschaltet",
            "keyPausepressed": "Pause-Taste ist eingeschaltet"
        },
        "de-de": {
            "keyPlay": "Wiedergeben",
            "keyPause": "Pause",
            "keyPlaypressed": "Play-Taste ist eingeschaltet",
            "keyPausepressed": "Pause-Taste ist eingeschaltet"
        },
        "el-gr": {
            "keyPlay": "?????????? ????",
            "keyPause": "??????????",
            "keyPlaypressed": "???? ???????????? ???????????????????????? ?????????? ????????????????????????????",
            "keyPausepressed": "???? ???????????? ???????????? ?????????? ????????????????????????????"
        },
        "en-au": {
            "keyPlay": "Play",
            "keyPause": "Pause",
            "keyPlaypressed": "Play button is on",
            "keyPausepressed": "Pause button is on"
        },
        "en-ca": {
            "keyPlay": "Play",
            "keyPause": "Pause",
            "keyPlaypressed": "Play button is on",
            "keyPausepressed": "Pause button is on"
        },
        "en-gb": {
            "keyPlay": "Play",
            "keyPause": "Pause",
            "keyPlaypressed": "Play button is on",
            "keyPausepressed": "Pause button is on"
        },
        "en-hk": {
            "keyPlay": "Play",
            "keyPause": "Pause",
            "keyPlaypressed": "Play button is on",
            "keyPausepressed": "Pause button is on"
        },
        "en-ie": {
            "keyPlay": "Play",
            "keyPause": "Pause",
            "keyPlaypressed": "Play button is on",
            "keyPausepressed": "Pause button is on"
        },
        "en-in": {
            "keyPlay": "Play",
            "keyPause": "Pause",
            "keyPlaypressed": "Play button is on",
            "keyPausepressed": "Pause button is on"
        },
        "en-nz": {
            "keyPlay": "Play",
            "keyPause": "Pause",
            "keyPlaypressed": "Play button is on",
            "keyPausepressed": "Pause button is on"
        },
        "en-sg": {
            "keyPlay": "Play",
            "keyPause": "Pause",
            "keyPlaypressed": "Play button is on",
            "keyPausepressed": "Pause button is on"
        },
        "en-za": {
            "keyPlay": "Play",
            "keyPause": "Pause",
            "keyPlaypressed": "Play button is on",
            "keyPausepressed": "Pause button is on"
        },
        "es-ar": {
            "keyPlay": "Juega",
            "keyPause": "Pause",
            "keyPlaypressed": "El bot??n de reproducci??n est?? activado",
            "keyPausepressed": "El bot??n de pausa est?? activado"
        },
        "es-cl": {
          "keyPlay": "Juega",
          "keyPause": "Pause",
          "keyPlaypressed": "El bot??n de reproducci??n est?? activado",
          "keyPausepressed": "El bot??n de pausa est?? activado"
        },
        "es-co": {
          "keyPlay": "Juega",
          "keyPause": "Pause",
          "keyPlaypressed": "El bot??n de reproducci??n est?? activado",
          "keyPausepressed": "El bot??n de pausa est?? activado"
        },
        "es-es": {
          "keyPlay": "Juega",
          "keyPause": "Pause",
          "keyPlaypressed": "El bot??n de reproducci??n est?? activado",
          "keyPausepressed": "El bot??n de pausa est?? activado"
        },
        "es-mx": {
          "keyPlay": "Juega",
          "keyPause": "Pause",
          "keyPlaypressed": "El bot??n de reproducci??n est?? activado",
          "keyPausepressed": "El bot??n de pausa est?? activado"
        },
        "fi-fi": {
            "keyPlay": "Play",
            "keyPause": "Pys??ytys",
            "keyPlaypressed": "Toistopainike on k??yt??ss??",
            "keyPausepressed": "Pys??ytyspainike on k??yt??ss??"
        },
        "fr-be": {
            "keyPlay": "Jouez",
            "keyPause": "Pause",
            "keyPlaypressed": "Le bouton Lecture est activ??",
            "keyPausepressed": "Le bouton Pause est activ??"
        },
        "fr-ca": {
            "keyPlay": "Jouer",
            "keyPause": "Pause",
            "keyPlaypressed": "Le bouton Lecture est activ??",
            "keyPausepressed": "Le bouton Pause est activ??"
        },
        "fr-ch": {
          "keyPlay": "Jouez",
          "keyPause": "Pause",
          "keyPlaypressed": "Le bouton Lecture est activ??",
          "keyPausepressed": "Le bouton Pause est activ??"
        },
        "fr-fr": {
          "keyPlay": "Jouez",
          "keyPause": "Pause",
          "keyPlaypressed": "Le bouton Lecture est activ??",
          "keyPausepressed": "Le bouton Pause est activ??"
        },
        "he-il": {
            "keyPlay": "Play",
            "keyPause": "Pause",
            "keyPlaypressed": "Play button is on",
            "keyPausepressed": "Pause button is on"
        },
        "hu-hu": {
            "keyPlay": "Lej??tsz??s",
            "keyPause": "Sz??net",
            "keyPlaypressed": "A Lej??tsz??s gomb be van kapcsolva",
            "keyPlaypressed": "A Sz??net gomb be van kapcsolva"
        },
        "it-it": {
            "keyPlay": "Gioca",
            "keyPause": "Sospendi",
            "keyPlaypressed": "Il pulsante di riproduzione ?? attivo",
            "keyPausepressed": "Il pulsante di pausa ?? attivo"
        },
        "ja-jp": {
            "keyPlay": "?????????",
            "keyPause": "?????????",
            "keyPlaypressed": "????????? ???????????????????????????????????????",
            "keyPausepressed": "????????? ???????????????????????????????????????"
        },
        "ko-kr": {
            "keyPlay": "?????????",
            "keyPause": "?????? ??????",
            "keyPlaypressed": "?????? ????????? ?????? ????????????",
            "keyPausepressed": "?????? ?????? ????????? ?????? ????????????"
        },
        "nb-no": {
            "keyPlay": "Spill",
            "keyPause": "Pause",
            "keyPlaypressed": "Avspillingsknappen er p??",
            "keyPausepressed": "Pause-knappen er p??"
        },
        "nl-be": {
            "keyPlay": "Speel",
            "keyPause": "Pauze",
            "keyPlaypressed": "Afspeelknop staat aan",
            "keyPausepressed": "Pauzeknop staat aan"
        },
        "nl-nl": {
          "keyPlay": "Speel",
          "keyPause": "Pauze",
          "keyPlaypressed": "Afspeelknop staat aan",
          "keyPausepressed": "Pauzeknop staat aan"
        },
        "pl-pl": {
            "keyPlay": "Odtw??rz",
            "keyPause": "Pauza",
            "keyPlaypressed": "Przycisk odtwarzania jest w????czony",
            "keyPausepressed": "Przycisk pauzy jest w????czony"
        },
        "pt-br": {
          "keyPlay": "Jogar",
          "keyPause": "Pausar",
            "keyPlaypressed": "O bot??o de reprodu????o est?? ativado",
            "keyPausepressed": "O bot??o de pausa est?? ativado"
        },
        "pt-pt": {
            "keyPlay": "Reproduzir",
            "keyPause": "Pausa",
            "keyPlaypressed": "O bot??o reprodu????o est?? ligado",
            "keyPausepressed": "O bot??o de pausa est?? ativado"
        },
        "ru-ru": {
            "keyPlay": "??????????????????????????",
            "keyPause": "??????????",
            "keyPlaypressed": "???????????? ?????????????????????????????? ????????????????",
            "keyPausepressed": "???????????? ???????????????????????? ?????????????????????????????? ????????????????"
        },
        "sk-sk": {
            "keyPlay": "Prehra??",
            "keyPause": "Pozastavenie",
            "keyPlaypressed": "Tla??idlo prehr??vania je zapnut??",
            "keyPausepressed": "Tla??idlo pozastavenia prehr??vania je zapnut??"
        },
        "sv-se": {
            "keyPlay": "Spela",
            "keyPause": "Pausa",
            "keyPlaypressed": "Knappen Spela upp ??r aktiverad",
            "keyPausepressed": "Pausknappen ??r aktiverad"
        },
        "tr-tr": {
            "keyPlay": "Oynat??n",
            "keyPause": "Duraklat",
            "keyPlaypressed": "Oynat d????mesi a????k",
            "keyPausepressed": "Duraklat d????mesi a????k"
        },
        "zh-hk": {
            "keyPlay": "??????",
            "keyPause": "??????",
            "keyPlaypressed": "?????????????????????",
            "keyPausepressed": "?????????????????????"
        },
        "zh-tw": {
            "keyPlay": "??????",
            "keyPause": "??????",
            "keyPlaypressed": "?????????????????????",
            "keyPausepressed": "?????????????????????"
        }
    }
}