class CalcController{

    constructor()
    {
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
        
    }

    initialize()
    {

        let displayCalcEl = document.querySelector('#display');
        let dateEl = document.querySelector('#data');
        let timeEl = document.querySelector('#hora')

        displayCalcEl.innerHTML = this.displayCalc;
        dateEl.innerHTML = '19/05/2020';
        timeEl.innerHTML = '18:00'
    }

    get displayCalc()
    {

        return this._displayCalc;
    }

    set displayCalc(arg)
    {

        this._displayCalc = arg;
    }

    get currentDate()
    {

        return this._currentDate;
    }

    set currentDate(arg)
    {
        
        this._currentDate = arg;
    }
}