<template>
    <div>
        <p>{{first}}</p>
        <slot name="firstSlot"></slot>
        <p>{{betweenSlots}}</p>
        <slot name="lastSlot"></slot>
    </div>
</template>

<script>
export default {
    name: "VariosSlots",
    data(){
        return{
            first: "Its the first <p> tag",
            betweenSlots: "This one is between the two slots!"
        }
    }
}
</script>

<style scoped>
    div{
        border: 3px solid red;
    }
</style>