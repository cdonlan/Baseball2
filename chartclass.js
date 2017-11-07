class Chart {
    constructor(category, color, type) {
      this._category = category;
      this._color = color;
      this._type = type;
      this._data = null; 
      }

      get Category() {
          return this._category;
      }
    
      set Category(newCategory) {
          this._category = newCategory;
      }
      
    get Color() {
        return this._color;
    }
  
    set Color(newColor) {
        this._color = newColor;
    }

    get Type() {
        return this._type;
    }
  
    set Type(newType) {
        this._type = newType;
    }

    get Data() {
        return this._data;
    }
  
    set Data(newData) {
        this._data = newData;
    }
  }