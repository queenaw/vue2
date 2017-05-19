<template>
 <div>
  <button @click="makeActive" type="button" class="btn btn-primary">1</button>
  <button @click="makeActive" type="button" class="btn btn-primary">2</button>
  <button @click="makeActive" type="button" class="btn btn-primary">3</button>
  <button @click="makeActive" type="button" class="btn btn-primary">4</button>


 </div>
</template>

<script>
export default{
  name:'test',
  
  methods:{
    makeActive(){
      console.log(this)
    }
  }

}
</script>

