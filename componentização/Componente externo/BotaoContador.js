export default{
    name: "BotaoContador",
    data(){
        return{
            valor: 0
        }
    },
    template: `
        <div>
            <button @click="valor++">Adicionar</button>
            <span>{{valor}}</span>
        </div>
    `
}