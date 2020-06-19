class CalcController{

    constructor()
    {
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora')
        this._currentDate;
        this.initialize();
        
    }

    initialize()
    {
        this.setDisplayDateTime();

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);
    }

    setDisplayDateTime()
    {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime()
    {
        return this._timeEl.innerHTML;
    }

    get displayDate()
    {
        return this._dateEl.innerHTML;
    }

    set displayTime(value)
    {
        this._timeEl.innerHTML = value;
    }

    set displayDate(value)
    {
        this._dateEl.innerHTML = value;
    }

    get displayCalc()
    {

        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(arg)
    {

        this._displayCalcEl.innerHTML = arg;
    }

    get currentDate()
    {

        return new Date();
    }

    set currentDate(arg)
    {
        
        this._currentDate = arg;
    }
}