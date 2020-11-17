// Generated by CoffeeScript 2.5.1
var InventoryBar;

InventoryBar = class InventoryBar {
  setHp(points) {
    var i, j, k, l, lista, ref;
    lista = {};
    for (i = j = 1; j <= 10; i = ++j) {
      lista[i - 1] = "empty";
      $(".hp").eq(i - 1).removeClass("empty");
      $(".hp").eq(i - 1).removeClass("full");
      $(".hp").eq(i - 1).removeClass("half");
    }
    if (points !== 0) {
      for (i = k = 1, ref = (points + points % 2) / 2; (1 <= ref ? k <= ref : k >= ref); i = 1 <= ref ? ++k : --k) {
        lista[i - 1] = "full";
      }
      if (points % 2 === 1) {
        lista[(points + points % 2) / 2 - 1] = "half";
      }
    }
    for (i = l = 1; l <= 10; i = ++l) {
      $(".hp").eq(i - 1).addClass(lista[i - 1]);
    }
  }

  setFood(points) {
    var i, j, k, l, lista, ref;
    lista = {};
    for (i = j = 1; j <= 10; i = ++j) {
      lista[10 - i] = "empty";
      $(".food").eq(10 - i).removeClass("empty");
      $(".food").eq(10 - i).removeClass("full");
      $(".food").eq(10 - i).removeClass("half");
    }
    if (points !== 0) {
      for (i = k = 1, ref = (points + points % 2) / 2; (1 <= ref ? k <= ref : k >= ref); i = 1 <= ref ? ++k : --k) {
        lista[10 - i] = "full";
      }
      if (points % 2 === 1) {
        lista[10 - (points + points % 2) / 2] = "half";
      }
    }
    for (i = l = 1; l <= 10; i = ++l) {
      $(".food").eq(10 - i).addClass(lista[10 - i]);
    }
  }

  setXp(level, progress) {
    $(".player_xp").text(level);
    return $(".xp_bar").css("width", `${500 * progress}px`);
  }

  listen() {
    var _this;
    _this = this;
    // $(window).on 'wheel', (event) ->
    // 	if event.originalEvent.deltaY < 0
    // 		_this.moveBoxPlus()
    // 	else
    // 		_this.moveBoxMinus()
    // $(document).keydown (z) ->
    // 	_this.directBoxChange(z)
    return this;
  }

};

export {
  InventoryBar
};
