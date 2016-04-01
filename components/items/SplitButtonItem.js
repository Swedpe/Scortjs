/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	SplitButton v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.SplitButton.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
        id: "splitbutton-"+ Math.round(Math.random() * 2000),
        text: "",
        tooltip: "",
        icon: "",
        height: -1,
        width: -1,
        x: -1,
        y: -1,
        scale: 'small',
        hidden: false,
        enabled: true,
        enableToggle: false,
        menu: [],
        listeners: {
            click: function(event){}
        },
        handler: function(){},
        arrowHandler: []
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined){
            if(i == "listeners") {
                for(var j in dataObj[i]) {
                    this.config[i][j] = dataObj[i][j];
                }
            }
            else
                this.config[i] = dataObj[i];
        }
    }
    
    this.id = this.config.id;
    this.container = this.config.container;
    this.className = "splitButtonItem";
    this.pressed = false;
    this.handler = this.config.handler;
    this.arrowHandler = this.config.arrowHandler;
    this.listeners = this.config.listeners;
    
    this.btnMain = null;
    this.btnShowMenu = null;
    this.btnSet = null;
    this.menu = null;
}
//##############################################################################
Components.SplitButton.prototype.create = function() {
    Components.Component.prototype.create.call(this);
    this.divContainer.append('<div><button id="button-'+this.id+'">'+this.config.text+'</button>'+
                             '<button id="button-select">&nbsp;</button></div>');
    this.btnMain = $('#button-' + this.id, this.divContainer);
    this.btnShowMenu = $('#button-select', this.divContainer);
    
    this.btnMain.button({
        disabled: !this.config.enabled
    });
    this.btnShowMenu.button({
        text: false,
        disabled: !this.config.enabled,
        icons: {
            secondary: "ui-icon-triangle-1-s"
        }
    });
    
    this.btnSet = this.btnMain.parent();
    this.btnSet.buttonset();
    this.btnShowMenu.css("width", "20px");
    
    if(this.config.menu.length != 0) {
        this.drawMenu();
    }
    
    this.setConfig();
    this.setControls();
    
   
   
    /*
    
    $(function() {
    $( "#rerun" )
      .button()
      .click(function() {
        alert( "Running the last action" );
      })
      .next()
        .button({
          text: false,
          icons: {
            primary: "ui-icon-triangle-1-s"
          }
        })
        .click(function() {
          var menu = $( this ).parent().next().show().position({
            my: "left top",
            at: "left bottom",
            of: this
          });
          $( document ).one( "click", function() {
            menu.hide();
          });
          return false;
        })
        .parent()
          .buttonset()
          .next()
            .hide()
            .menu();
  });
    
    <div>
  <div>
    <button id="rerun">Run last action</button>
    <button id="select">Select an action</button>
  </div>
  <ul>
    <li><a href="#">Open...</a></li>
    <li><a href="#">Save</a></li>
    <li><a href="#">Delete</a></li>
  </ul>
</div>
    
    */
	return this ;
}
//##############################################################################
Components.SplitButton.prototype.setConfig = function() {
    if(this.config.icon != "") {
        this.btnMain.button("option", "icons", { primary: "iconButton"} );
        $('.iconButton', this.btnMain).css("background-image", "url("+this.config.icon+")");
    }
    if(this.config.text == "") {
        this.btnMain.button( "option", "text", false );
    }
    if(this.config.tooltip != "") {
        this.btnSet.prop("alt", this.config.tooltip);
        this.btnSet.prop("title", this.config.tooltip);
    }
    if(this.config.x != -1) {
        this.divContainer.css("left", this.config.x);
    }
    if(this.config.y != -1) {
        this.divContainer.css("top", this.config.y);
    }
    if(this.config.width != -1) {
        this.btnMain.css("width", this.config.width);
    }
}
//##############################################################################
Components.SplitButton.prototype.setControls = function() {
    this.btnMain.bind("click", {OBJ:this}, function(event) {
        var disabled = event.data.OBJ.btnMain.button( "option", "disabled" );
        if(!disabled) {
            if(event.data.OBJ.config.enableToggle) {
                event.data.OBJ.toggle();
            }
            event.data.OBJ.handler();
            event.data.OBJ.listeners.click(event);
        }   
    });
    
    if(this.arrowHandler.length != 0) {
        this.btnShowMenu.bind('click', {OBJ:this}, this.arrowHandler);
    }
    else {
        this.btnShowMenu.bind('click', {OBJ:this}, function(event) {
            event.data.OBJ.menu.setWidth($(this).parent().width());
            event.data.OBJ.btnMain.addClass('splitButtonItem-pressed');
            event.data.OBJ.btnShowMenu.addClass('splitButtonItem-pressed');
            
            var menu = $( this ).parent().next().show().position({
                my: "left top",
                at: "left bottom",
                of: $(this).parent()
            });
            $( document ).one( "click", function() {
                menu.hide();
                event.data.OBJ.btnMain.removeClass('splitButtonItem-pressed');
                event.data.OBJ.btnShowMenu.removeClass('splitButtonItem-pressed');
            });
            return false;
        });
    }
    
    this.btnSet.mouseover({OBJ:this}, function(event){
        var disabled = event.data.OBJ.btnMain.button( "option", "disabled" );
        if(!disabled) {
            event.data.OBJ.btnMain.addClass('ui-state-hover');
            event.data.OBJ.btnShowMenu.addClass('ui-state-hover');
        }
    });
    
    this.btnSet.mouseout({OBJ:this}, function(event){
        event.data.OBJ.btnMain.removeClass('ui-state-hover');
        event.data.OBJ.btnShowMenu.removeClass('ui-state-hover');
    });
}
//##############################################################################
Components.SplitButton.prototype.drawMenu = function() {
    this.config.menu.container = this.divContainer;
    this.menu = Components.create('MenuPanel', this.config.menu);
}
//##############################################################################
Components.SplitButton.prototype.toggle = function() {
    if(this.pressed) {
        this.divContainer.removeClass('buttonItem-pressed').addClass('buttonItem-enabled');
    }
    else {
        this.divContainer.addClass('buttonItem-pressed').removeClass('buttonItem-enabled');
    }
    this.pressed = !this.pressed;
}
//##############################################################################
Components.SplitButton.prototype.setText = function(text) {
    this.config.text = text;
    this.divText.html(text);
    this.divText.show();
}
//##############################################################################
Components.SplitButton.prototype.show = function() {
    if(!this.config.hidden)
        Components.Component.prototype.show.call(this);
    else
        this.hide();
	  return this;
}
//##############################################################################
Components.SplitButton.prototype.destroy = function() {
    this.menu.destroy();
    Components.Component.prototype.destroy.call(this);
}
//##############################################################################
Components.SplitButton.prototype.setVisible = function(visible) {
    if(visible == true)
        this.divContainer.show();
    else
        this.divContainer.hide();
}
//##############################################################################
Components.SplitButton.prototype.setDisabled = function(disabled) {
    disabled ? this.disable() : this.enable();
}
//##############################################################################
Components.SplitButton.prototype.disable = function() {
    this.btnMain.button( "disable" );;
    this.btnShowMenu.button( "disable" );
}
//##############################################################################
Components.SplitButton.prototype.enable = function() {
    this.btnMain.button( "enable" );
    this.btnShowMenu.button( "enable" );
}
//##############################################################################
Components.SplitButton.prototype.setIcon = function(path) {
    $('.iconButton', this.btnMain).css("background-image", "url("+path+")");
}