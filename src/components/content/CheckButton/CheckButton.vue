<template>
    <div class="check-button">
        <img src="../../../assets/images/checkbox/checkbox.png" alt="" v-if="isChecked">
        <img src="../../../assets/images/checkbox/checkboxActive.png" alt="" v-else>
    </div>
</template>

<script>

export default {
    name:"CheckButton",
    
    props:{
        isChecked:{
            type:Boolean,
            default:true
        }
    }
}
</script>

<style scoped>
img{
    width: 20px;
    height: 20px;
}

</style>