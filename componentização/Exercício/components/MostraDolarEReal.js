export default{
    name: 'MostraDolarEReal',
    data(){
        return{
            real: "3",
            dolar: "2"
        }
    },
    template: `
        <div>
            <p>Dólar:  <span>{{dolar}}</span></p>
            <p>Real:  <span>{{real}}</span></p>
        </div>
    `
    ,
    beforeCreate(){
        fetch("https://api.exchangeratesapi.io/latest?base=USD")
            .then(e => e.json())
            .then(e => {
                this.rates.real = e.BRL;
                this.rates.dolar = e.USD;
            })
    }
}