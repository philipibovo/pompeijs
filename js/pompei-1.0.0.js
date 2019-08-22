/*!
 * 2018.08.01
 * pompeijs 1.0.0 (http://philipi.bovo.me/pompeijs)
 * By Philipi Bovo
 */

var deviceType;

$(document).ready(function() {
  verifyScreenPompei()
  organizePompei();
});

$(window).resize(function() {
  verifyScreenPompei()
  organizePompei();
});

function verifyScreenPompei() {
  if ($(window).innerWidth() < 576) {
    deviceType = 'sm';
  }

  if (($(window).innerWidth() >= 576) && ($(window).innerWidth() < 992)) {
    deviceType = 'md';
  }

  if ($(window).innerWidth() >= 992) {
    deviceType = 'lg';
  }
}

function organizePompei() {
	var parentWidth, numberChildsDinamic, numberChildsFixed, numberChildsSM, numberChildsMD, numberChildsLG, colspanDinamic, offsetPos, margins, borders, itemHidden;

	$('.pp-row').each(function () {
    itemHidden = false;

    if ((($(this).attr('class').indexOf("pp-hidden-sm") > -1) && (deviceType == 'sm')) ||
        (($(this).attr('class').indexOf("pp-hidden-md") > -1) && (deviceType == 'md')) ||
        (($(this).attr('class').indexOf("pp-hidden-lg") > -1) && (deviceType == 'lg'))) {
      itemHidden = true;
    }

    if (!itemHidden) {
      numberChildsDinamic = $(this).children('.pp-col').length;
      numberChildsFixed = 0;

      if (deviceType == 'lg') {
        if (($(this).children('.pp-col-lg-1').length+($(this).children('.pp-col-lg-2').length*2)+($(this).children('.pp-col-lg-3').length*3)+($(this).children('.pp-col-lg-4').length*4)+($(this).children('.pp-col-lg-5').length*5)+($(this).children('.pp-col-lg-6').length*6)+($(this).children('.pp-col-lg-7').length*7)+($(this).children('.pp-col-lg-8').length*8)+($(this).children('.pp-col-lg-9').length*9)+($(this).children('.pp-col-lg-10').length*10)) != 0) {
          numberChildsFixed = ($(this).children('.pp-col-lg-1').length+($(this).children('.pp-col-lg-2').length*2)+($(this).children('.pp-col-lg-3').length*3)+($(this).children('.pp-col-lg-4').length*4)+($(this).children('.pp-col-lg-5').length*5)+($(this).children('.pp-col-lg-6').length*6)+($(this).children('.pp-col-lg-7').length*7)+($(this).children('.pp-col-lg-8').length*8)+($(this).children('.pp-col-lg-9').length*9)+($(this).children('.pp-col-lg-10').length*10));
        }

        var countCol = 0;
        var offsetPos = 0;
        var thisColWidth = 0;
        $(this).find('.pp-col-lg-1, .pp-col-lg-2, .pp-col-lg-3, .pp-col-lg-4, .pp-col-lg-5, .pp-col-lg-6, .pp-col-lg-7, .pp-col-lg-8, .pp-col-lg-9, .pp-col-lg-10').each(function () {
          offsetPos = ($(this).attr('class').indexOf("pp-col-lg-")+10);
          if (Number.isInteger(parseInt($(this).attr('class').substring(offsetPos,(offsetPos+1))))) {
            if (Number.isInteger(parseInt($(this).attr('class').substring((offsetPos+1),(offsetPos+2))))) {
              countCol = (countCol + parseInt($(this).attr('class').substring(offsetPos,(offsetPos+2))));
              thisColWidth = parseInt($(this).attr('class').substring(offsetPos,(offsetPos+2)));
            } else {
              countCol = (countCol + parseInt($(this).attr('class').substring(offsetPos,(offsetPos+1))));
              thisColWidth = parseInt($(this).attr('class').substring(offsetPos,(offsetPos+1)));
            }
          }

          if (countCol > 12) {
            $(this).css('clear','both');
            countCol = thisColWidth;
          }
        });
      } else if (deviceType == 'md') {
        if (($(this).children('.pp-col-md-1').length+($(this).children('.pp-col-md-2').length*2)+($(this).children('.pp-col-md-3').length*3)+($(this).children('.pp-col-md-4').length*4)+($(this).children('.pp-col-md-5').length*5)+($(this).children('.pp-col-md-6').length*6)+($(this).children('.pp-col-md-7').length*7)+($(this).children('.pp-col-md-8').length*8)+($(this).children('.pp-col-md-9').length*9)+($(this).children('.pp-col-md-10').length*10)) != 0) {
          numberChildsFixed = ($(this).children('.pp-col-md-1').length+($(this).children('.pp-col-md-2').length*2)+($(this).children('.pp-col-md-3').length*3)+($(this).children('.pp-col-md-4').length*4)+($(this).children('.pp-col-md-5').length*5)+($(this).children('.pp-col-md-6').length*6)+($(this).children('.pp-col-md-7').length*7)+($(this).children('.pp-col-md-8').length*8)+($(this).children('.pp-col-md-9').length*9)+($(this).children('.pp-col-md-10').length*10));
        }

        var countCol = 0;
        var offsetPos = 0;
        var thisColWidth = 0;
        $(this).find('.pp-col-md-1, .pp-col-md-2, .pp-col-md-3, .pp-col-md-4, .pp-col-md-5, .pp-col-md-6, .pp-col-md-7, .pp-col-md-8, .pp-col-md-9, .pp-col-md-10').each(function () {
          offsetPos = ($(this).attr('class').indexOf("pp-col-md-")+10);
          if (Number.isInteger(parseInt($(this).attr('class').substring(offsetPos,(offsetPos+1))))) {
            if (Number.isInteger(parseInt($(this).attr('class').substring((offsetPos+1),(offsetPos+2))))) {
              countCol = (countCol + parseInt($(this).attr('class').substring(offsetPos,(offsetPos+2))));
              thisColWidth = parseInt($(this).attr('class').substring(offsetPos,(offsetPos+2)));
            } else {
              countCol = (countCol + parseInt($(this).attr('class').substring(offsetPos,(offsetPos+1))));
              thisColWidth = parseInt($(this).attr('class').substring(offsetPos,(offsetPos+1)));
            }
          }

          if (countCol > 12) {
            $(this).css('clear','both');
            countCol = thisColWidth;
          }
        });
      } else {
        if (($(this).children('.pp-col-sm-1').length+($(this).children('.pp-col-sm-2').length*2)+($(this).children('.pp-col-sm-3').length*3)+($(this).children('.pp-col-sm-4').length*4)+($(this).children('.pp-col-sm-5').length*5)+($(this).children('.pp-col-sm-6').length*6)+($(this).children('.pp-col-sm-7').length*7)+($(this).children('.pp-col-sm-8').length*8)+($(this).children('.pp-col-sm-9').length*9)+($(this).children('.pp-col-sm-10').length*10)) != 0) {
          numberChildsFixed = ($(this).children('.pp-col-sm-1').length+($(this).children('.pp-col-sm-2').length*2)+($(this).children('.pp-col-sm-3').length*3)+($(this).children('.pp-col-sm-4').length*4)+($(this).children('.pp-col-sm-5').length*5)+($(this).children('.pp-col-sm-6').length*6)+($(this).children('.pp-col-sm-7').length*7)+($(this).children('.pp-col-sm-8').length*8)+($(this).children('.pp-col-sm-9').length*9)+($(this).children('.pp-col-sm-10').length*10));
        }

        var countCol = 0;
        var offsetPos = 0;
        var thisColWidth = 0;
        $(this).find('.pp-col-sm-1, .pp-col-sm-2, .pp-col-sm-3, .pp-col-sm-4, .pp-col-sm-5, .pp-col-sm-6, .pp-col-sm-7, .pp-col-sm-8, .pp-col-sm-9, .pp-col-sm-10').each(function () {
          offsetPos = ($(this).attr('class').indexOf("pp-col-sm-")+10);
          if (Number.isInteger(parseInt($(this).attr('class').substring(offsetPos,(offsetPos+1))))) {
            if (Number.isInteger(parseInt($(this).attr('class').substring((offsetPos+1),(offsetPos+2))))) {
              countCol = (countCol + parseInt($(this).attr('class').substring(offsetPos,(offsetPos+2))));
              thisColWidth = parseInt($(this).attr('class').substring(offsetPos,(offsetPos+2)));
            } else {
              countCol = (countCol + parseInt($(this).attr('class').substring(offsetPos,(offsetPos+1))));
              thisColWidth = parseInt($(this).attr('class').substring(offsetPos,(offsetPos+1)));
            }
          }

          if (countCol > 12) {
            $(this).css('clear','both');
            countCol = thisColWidth;
          }
        });
      }

      parentWidth = ($(this).innerWidth()-1);
      colspanDinamic = 0;

      if (numberChildsDinamic != 0) {
        $(this).children().each(function() {
          itemHidden = false

          if ((($(this).attr('class').indexOf("pp-hidden-sm") > -1) && (deviceType == 'sm')) ||
                (($(this).attr('class').indexOf("pp-hidden-md") > -1) && (deviceType == 'md')) ||
                (($(this).attr('class').indexOf("pp-hidden-lg") > -1) && (deviceType == 'lg'))) {
              itemHidden = true;
          }

          if (!itemHidden) {
            if (((deviceType == 'sm') && ($(this).attr('class').indexOf("pp-col-sm-") == -1)) ||
              ((deviceType == 'md') && ($(this).attr('class').indexOf("pp-col-md-") == -1)) ||
              ((deviceType == 'lg') && ($(this).attr('class').indexOf("pp-col-lg-") == -1))) {

              if ($(this).attr('class').indexOf("pp-colspan-") > -1) {
                offsetPos = ($(this).attr('class').indexOf("pp-colspan-")+11);
                if (Number.isInteger(parseInt($(this).attr('class').substring(offsetPos,(offsetPos+1))))) {
                  if (Number.isInteger(parseInt($(this).attr('class').substring((offsetPos+1),(offsetPos+2))))) {
                    colspanDinamic = parseInt($(this).attr('class').substring(offsetPos,(offsetPos+2)));
                  } else {
                    colspanDinamic = parseInt($(this).attr('class').substring(offsetPos,(offsetPos+1)));
                  }
                } else if (($(this).attr('class').substring(offsetPos,(offsetPos+2)) == 'sm') ||
                           ($(this).attr('class').substring(offsetPos,(offsetPos+2)) == 'md') ||
                           ($(this).attr('class').substring(offsetPos,(offsetPos+2)) == 'lg')) {
                  offsetPos = ($(this).attr('class').indexOf("pp-colspan-"+deviceType+"-")+14);
                  if (Number.isInteger(parseInt($(this).attr('class').substring((offsetPos+1),(offsetPos+2))))) {
                    colspanDinamic = parseInt($(this).attr('class').substring(offsetPos,(offsetPos+2)));
                  } else {
                    colspanDinamic = parseInt($(this).attr('class').substring(offsetPos,(offsetPos+1)));
                  }
                }
                if ((Number.isInteger(colspanDinamic)) && (colspanDinamic != 0)) {
                  numberChildsDinamic = (numberChildsDinamic+(colspanDinamic-1));
                }
              }
            }
          } else {
            numberChildsDinamic = (numberChildsDinamic-1);
          } // else -> if (!itemHidden)
        });

        $(this).children().each(function() {

          if (((deviceType == 'sm') && ($(this).attr('class').indexOf("pp-col-sm-") == -1)) ||
              ((deviceType == 'md') && ($(this).attr('class').indexOf("pp-col-md-") == -1)) ||
              ((deviceType == 'lg') && ($(this).attr('class').indexOf("pp-col-lg-") == -1))) {

            if ($(this).attr('class').indexOf("pp-offset") > -1)  {
              $(this).append('&nbsp;');
            }

            if ($(this).attr('class').indexOf("pp-colspan-") > -1) {
              offsetPos = ($(this).attr('class').indexOf("pp-colspan-")+11);
              
              if (Number.isInteger(parseInt($(this).attr('class').substring(offsetPos,(offsetPos+1))))) {
                if (Number.isInteger(parseInt($(this).attr('class').substring((offsetPos+1),(offsetPos+2))))) {
                  colspanDinamic = parseInt($(this).attr('class').substring(offsetPos,(offsetPos+2)));
                } else {
                  colspanDinamic = parseInt($(this).attr('class').substring(offsetPos,(offsetPos+1)));
                }
              } else if (((deviceType == 'sm') && ($(this).attr('class').substring(offsetPos,(offsetPos+2)) == 'sm')) ||
                         ((deviceType == 'md') && ($(this).attr('class').substring(offsetPos,(offsetPos+2)) == 'md')) ||
                         ((deviceType == 'lg') && ($(this).attr('class').substring(offsetPos,(offsetPos+2)) == 'lg'))) {

                offsetPos = ($(this).attr('class').indexOf("pp-colspan-"+deviceType+"-")+14);

                if (Number.isInteger(parseInt($(this).attr('class').substring((offsetPos+1),(offsetPos+2))))) {
                  colspanDinamic = parseInt($(this).attr('class').substring(offsetPos,(offsetPos+2)));
                } else {
                  colspanDinamic = parseInt($(this).attr('class').substring(offsetPos,(offsetPos+1)));
                }
              }
      				if ((Number.isInteger(colspanDinamic)) && (colspanDinamic != 0)) {
                if ((parentWidth*(numberChildsFixed*0.0833333333)) >= parentWidth) {
                  $(this).css('width',((parseInt(parentWidth/numberChildsDinamic)*colspanDinamic)-parseInt($(this).css('margin-left').replace("px", ""))-parseInt($(this).css('margin-right').replace("px", "")))+'px');
                } else {
                  $(this).css('width',(((parseInt((parentWidth-(parentWidth*(numberChildsFixed*0.0833333333)))/numberChildsDinamic))*colspanDinamic)-parseInt($(this).css('margin-left').replace("px", ""))-parseInt($(this).css('margin-right').replace("px", "")))+'px');
                }
              } else {
                if ((parentWidth*(numberChildsFixed*0.0833333333)) >= parentWidth) {
                  $(this).css('width',(parseInt(parentWidth/numberChildsDinamic)-(parseInt($(this).css('margin-left').replace("px", ""))-parseInt($(this).css('margin-right').replace("px", ""))))+'px');
                } else {
                  $(this).css('width',(((parentWidth-(parentWidth*(numberChildsFixed*0.0833333333)))/numberChildsDinamic)-parseInt($(this).css('margin-left').replace('px',''))-parseInt($(this).css('margin-right').replace('px','')))+'px');
                }
              }
          	} else {
              if ((parentWidth*(numberChildsFixed*0.0833333333)) >= parentWidth) {
                $(this).css('width',(parseInt(parentWidth/numberChildsDinamic)-(parseInt($(this).css('margin-left').replace("px", ""))-parseInt($(this).css('margin-right').replace("px", ""))))+'px');
              } else {
                $(this).css('width',(((parentWidth-(parentWidth*(numberChildsFixed*0.0833333333)))/numberChildsDinamic)-parseInt($(this).css('margin-left').replace('px',''))-parseInt($(this).css('margin-right').replace('px','')))+'px');
              }
          	}
          } 
    		});
      } // end if (numberChildsDinamic != 0)
    }
	});
}