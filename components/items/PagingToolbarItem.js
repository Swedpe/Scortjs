/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	PagingToolbar v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.PagingToolbar.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
        id: "pagingtoolbar-"+ Math.round(Math.random() * 2000),
        fields: [],
        store: -1,
        state:'default',
		pageSize: 0,
        displayInfo: true,
        displayMsg: 'Displaying {0} - {1} de {2}',
        emptyMsg: 'No data to display',
        items: []
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined)
            this.config[i] = dataObj[i];
    }
    
    this.id = this.config.id;
    this.container = this.config.container;
    this.data = this.config.data;
    this.fields = this.config.fields;
    
    this.storeContainer = this.config.store;
    this.totalData = 0;
    this.currentPage = 1;
    this.pageSize = this.config.pageSize;
    this.toolbar = null;
    this.lastPage = 0;
}
//##############################################################################
Components.PagingToolbar.prototype.create = function() {
    if(this.storeContainer != -1) {
        if(this.config.pageSize != 0) {
            this.storeContainer.config.pageSize = this.config.pageSize;
        }
        else {
			if(this.storeContainer.config.pageSize==-1)
			{
				this.pageSize=this.storeContainer.totalData;
			}	
			else
			{
            this.pageSize = this.storeContainer.config.pageSize;
			}
        }
    }
    
    var $this = this;
    
    var itemsToolbar = [
        {
            type: 'Button',
            id: this.id + '-FirstPage',
            tooltip: 'First Page',
			icon:{
				type:'glyphicon',
				class:'glyphicon-fast-backward',
				},
			css: {
				  'margin-right': 4,
			},
            scale: 'mini',
            handler: function(){
                $this.updateToolbar(1);
            }
        },
        {
            type: 'Button',
			icon:{
				type:'glyphicon',
				class:'glyphicon-backward',
				},
			css: {
				  'margin-right': 4,
			},
            id: this.id + '-PreviousPage',
            clsIcon: 'btnsPagingToolbar btnPreviousPage',
            tooltip: 'Previous Page',
            scale: 'mini',
            handler: function() {
                $this.updateToolbar($this.currentPage - 1);
            }
        },
        {
            type: 'Label',
            text: 'Page '
        },
        {
            type: 'NumberField',
            id: this.id + '-nroPage',
            width: 150,
			css:{
				float: 'left',
			},
            hideTrigger: true,
            minValue: 0,
            value: $this.currentPage,
            listeners: {
                specialKey: function(obj, event) {
                    if(event.charCode == 13) {      // 13 = ENTER
					console.log("hola")
                        var nroPage = Math.round(event.data.OBJ.getValue());
                        if(nroPage > $this.lastPage)
                            nroPage = $this.lastPage;
                        if(nroPage <= 0) {
                            $this.textCurrentPage.setValue($this.currentPage);
                            return;
                        }
                        $this.updateToolbar(nroPage);
                    }
                }
            }
        },
        {
            type: 'Label',
            id: this.id + '-ofTotalPage'
        },
        {
            type: 'Button',
			icon:{
				type:'glyphicon',
				class:'glyphicon-forward',
				},
			css: {
				  'margin-right': 4,
				  'margin-left': 4,
			},
            id: this.id + '-NextPage',
            tooltip: 'Next Page',
            scale: 'mini',
            handler: function() {
                $this.updateToolbar($this.currentPage + 1);
            }
        },
        {
            type: 'Button',
			icon:{
				type:'glyphicon',
				class:'glyphicon-fast-forward',
				},
			css: {
				  'margin-right': 4,
			},	
			scale: 'mini',
            id: this.id + '-btnLastPage',
            
            tooltip: 'Last Page',
            handler: function() {
                $this.updateToolbar($this.lastPage);
            }
        },
        {
            type: 'Button',
			icon:{
				type:'glyphicon',
				class:'glyphicon-repeat',
				},
            id: this.id + '-RefreshPage',   // Refresh currentPage
            clsIcon: '',
            tooltip: 'Refresh',
            scale: 'mini',
            handler: function() {
                $this.updateToolbar($this.currentPage);
            }
        }
    ];
    
    itemsToolbar = itemsToolbar.concat(this.config.items, [{
        type: 'Label',
        id: this.id + '-MsgDisplay',
        text: ''
    }]);
    
    this.toolbar = Components.create('ToolBar', {
        container: this.container,
        state:this.config.state,
		height: 26,
        items: itemsToolbar
    });

    this.btnFirstPage = this.toolbar.itemsObjs[0];
    this.btnPrevPage = this.toolbar.itemsObjs[1];
    this.textCurrentPage = this.toolbar.itemsObjs[3];
    this.labelTotalPage = this.toolbar.itemsObjs[4];
    this.btnNextPage = this.toolbar.itemsObjs[5];
    this.btnLastPage = this.toolbar.itemsObjs[6];
    this.labelDisplay = this.toolbar.itemsObjs[this.toolbar.itemsObjs.length - 1];
    this.labelDisplay.divContainer.css('float', 'right');
    
    this.changeStateButtons('prev', false);
	
	if(this.storeContainer.pageSize==-1)
	{
		this.btnNextPage.setDisabled(true);
        this.btnLastPage.setDisabled(true);
	}	
	return this ;
}
//##############################################################################
Components.PagingToolbar.prototype.show = function() {
}
Components.PagingToolbar.prototype.changeStateButtons = function(type, newState) {
    switch(type) {
        case 'prev':
            this.btnFirstPage.setDisabled(!newState);
            this.btnPrevPage.setDisabled(!newState);
            break;
        case 'next':
            this.btnNextPage.setDisabled(!newState);
            this.btnLastPage.setDisabled(!newState);
            break;
    }
}
//##############################################################################
Components.PagingToolbar.prototype.updateToolbar = function(nroPage) {
    this.currentPage = nroPage;
    this.textCurrentPage.setValue(nroPage);
    
    if(this.currentPage == 1)
        this.changeStateButtons('prev', false);
    else
        this.changeStateButtons('prev', true);
    
    if(this.currentPage == this.lastPage)
        this.changeStateButtons('next', false);
    else
        this.changeStateButtons('next', true);
    
    if(this.storeContainer.config.proxy.length != 0)
		this.storeContainer.loadPage(nroPage);
	else{
		this.storeContainer.currentpage=nroPage;
		this.storeContainer.container.setTotalData(this.storeContainer.data.length);
		this.setTotalData(this.storeContainer.data.length);
		this.storeContainer.container.drawRows();
	}	
	
}
//##############################################################################
Components.PagingToolbar.prototype.setTotalData = function(totalData) {
    this.totalData = totalData;
    this.lastPage = Math.ceil(totalData / this.pageSize);
    
    this.labelTotalPage.setText(' of ' + this.lastPage);
    if(this.config.displayInfo) {
        if(this.totalData > 0) {
            var init = (this.currentPage - 1) * this.pageSize;
            this.labelDisplay.setText(Components.formatString(this.config.displayMsg, (init + 1), (init + this.pageSize), this.totalData));
        }
        else
            this.labelDisplay.setText(this.config.emptyMsg);
    }
}
