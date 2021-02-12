export default{
    name: 'MostraClima',
    data(){
        return{
            clima: ""
        }
    },
    template: `
        <div>
            <hr>
                <p>Hoje a mínima é de {{clima}} graus em Brasília!</p>
            <hr>
        </div>
    `,
    beforeCreate(){
        console.log('tá rodando')
        fetch("https://www.metaweather.com/api/location/455819/")
            .then(e => e.json())
            .then(e => this.clima = e.consolidated_weather[0].min_temp)
    }
}