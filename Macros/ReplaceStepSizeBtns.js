// replace step size inch buttons with .001, .01, .1 and 1.  We are replacing functions here, so need to be careful with updates

function mmMode() {
  unit = "mm";
  localStorage.setItem('unitsMode', unit);
  $('#dist01label').html('0.1mm')
  $('#dist1label').html('1mm')
  $('#dist10label').html('10mm')
  $('#dist100label').html('100mm')
  if (jogdist == 0.0254) {
    jogdist = 0.1
  }
  if (jogdist == .254) {
    jogdist = 1
  }
  if (jogdist == 2.54) {
    jogdist = 10
  }
  if (jogdist == 25.4) {
    jogdist = 100
  }
  $('#jogratemmdiv').show()
  $('#jograteinchdiv').hide()
  inchtommrate();
}

function inMode() {
  unit = "in";
  localStorage.setItem('unitsMode', unit);
  $('#dist01label').html('0.001"')
  $('#dist1label').html('0.01"')
  $('#dist10label').html('.1"')
  $('#dist100label').html('1"')
  if (jogdist == 0.1) {
    jogdist = .0254
  }
  if (jogdist == 1) {
    jogdist = .254
  }
  if (jogdist == 10) {
    jogdist = 2.54
  }
  if (jogdist == 100) {
    jogdist = 25.4
  }
  $('#jogratemmdiv').hide()
  $('#jograteinchdiv').show()
  mmtoinchrate()
}


 if (localStorage.getItem('unitsMode')) {
    if (localStorage.getItem('unitsMode') == "mm") {
      mmMode()
      $('#mmMode').click()
    } else if (localStorage.getItem('unitsMode') == "in") {
      inMode();
      $('#inMode').click()
    }
  } else {
    // default to inches
    inMode();
    $('#inMode').click()
  }


$('#dist01').on('click', function(ev) {
    if (unit == "mm") {
      jogdist = 0.1;
    } else if (unit == "in") {
      jogdist = .0254;
    }
    $('.distbtn').removeClass('bd-openbuilds')
    $('#dist01').addClass('bd-openbuilds')
    $('.jogdist').removeClass('fg-openbuilds')
    $('.jogdist').addClass('fg-gray')
    $('#dist01label').removeClass('fg-gray')
    $('#dist01label').addClass('fg-openbuilds')
  })

  $('#dist1').on('click', function(ev) {
    if (unit == "mm") {
      jogdist = 1;
    } else if (unit == "in") {
      jogdist = .254;
    }
    $('.distbtn').removeClass('bd-openbuilds')
    $('#dist1').addClass('bd-openbuilds')
    $('.jogdist').removeClass('fg-openbuilds')
    $('.jogdist').addClass('fg-gray')
    $('#dist1label').removeClass('fg-gray')
    $('#dist1label').addClass('fg-openbuilds')
  })

  $('#dist10').on('click', function(ev) {
    if (unit == "mm") {
      jogdist = 10;
    } else if (unit == "in") {
      jogdist = 2.54;
    }
    $('.distbtn').removeClass('bd-openbuilds')
    $('#dist10').addClass('bd-openbuilds')
    $('.jogdist').removeClass('fg-openbuilds')
    $('.jogdist').addClass('fg-gray')
    $('#dist10label').removeClass('fg-gray')
    $('#dist10label').addClass('fg-openbuilds')
  })

  $('#dist100').on('click', function(ev) {
    if (unit == "mm") {
      jogdist = 100;
    } else if (unit == "in") {
      jogdist = 25.4;
    }
    $('.distbtn').removeClass('bd-openbuilds')
    $('#dist100').addClass('bd-openbuilds')
    $('.jogdist').removeClass('fg-openbuilds')
    $('.jogdist').addClass('fg-gray')
    $('#dist100label').removeClass('fg-gray')
    $('#dist100label').addClass('fg-openbuilds')
  })

function changeStepSize(dir) {
  if (jogdist == 0.1 || jogdist == .0254) {
    if (dir == 1) {
      jogdist = 1;
      $('.distbtn').removeClass('bd-openbuilds')
      $('#dist1').addClass('bd-openbuilds')
      $('.jogdist').removeClass('fg-openbuilds')
      $('.jogdist').addClass('fg-gray')
      $('#dist1label').removeClass('fg-gray')
      $('#dist1label').addClass('fg-openbuilds')
    }
    if (dir == -1) {
      // do nothing
    }
  } else if (jogdist == 1 || jogdist == .254) {
    if (dir == 1) {
      jogdist = 10;
      $('.distbtn').removeClass('bd-openbuilds')
      $('#dist10').addClass('bd-openbuilds')
      $('.jogdist').removeClass('fg-openbuilds')
      $('.jogdist').addClass('fg-gray')
      $('#dist10label').removeClass('fg-gray')
      $('#dist10label').addClass('fg-openbuilds')
    }
    if (dir == -1) {
      jogdist = 0.1;
      $('.distbtn').removeClass('bd-openbuilds')
      $('#dist01').addClass('bd-openbuilds')
      $('.jogdist').removeClass('fg-openbuilds')
      $('.jogdist').addClass('fg-gray')
      $('#dist01label').removeClass('fg-gray')
      $('#dist01label').addClass('fg-openbuilds')
    }
  } else if (jogdist == 10 || jogdist == 2.54) {
    if (dir == 1) {
      jogdist = 100;
      $('.distbtn').removeClass('bd-openbuilds')
      $('#dist100').addClass('bd-openbuilds')
      $('.jogdist').removeClass('fg-openbuilds')
      $('.jogdist').addClass('fg-gray')
      $('#dist100label').removeClass('fg-gray')
      $('#dist100label').addClass('fg-openbuilds')
    }
    if (dir == -1) {
      jogdist = 1;
      $('.distbtn').removeClass('bd-openbuilds')
      $('#dist1').addClass('bd-openbuilds')
      $('.jogdist').removeClass('fg-openbuilds')
      $('.jogdist').addClass('fg-gray')
      $('#dist1label').removeClass('fg-gray')
      $('#dist1label').addClass('fg-openbuilds')
    }
  } else if (jogdist == 100 || jogdist == 25.4) {
    if (dir == 1) {
      // do nothing
    }
    if (dir == -1) {
      jogdist = 10;
      $('.distbtn').removeClass('bd-openbuilds')
      $('#dist10').addClass('bd-openbuilds')
      $('.jogdist').removeClass('fg-openbuilds')
      $('.jogdist').addClass('fg-gray')
      $('#dist10label').removeClass('fg-gray')
      $('#dist10label').addClass('fg-openbuilds')
    }
  }

}
