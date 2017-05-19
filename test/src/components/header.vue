<template>
    <header>
       <div class='container'>
 <ul class="nav nav-pills">
  <li role="presentation" class="active"><router-link to='/'> Home</router-link></li>
  <li role="presentation"><router-link to='/about'> about</router-link></li>
  <li role="presentation"><router-link to='/share'> share</router-link></li>
    <li role="presentation"><router-link to='/new'> new</router-link></li>
    <li role="presentation"><router-link to='/test'> test</router-link></li>
</ul>
<div v-for="item in doc">
  <h2 @click="test">{{item.title}}</h2>
  <p>{{item.tada1}}</p>
  <p>{{item.tada2}}</p>
  <p>{{item.tada3}}</p>
</div>

<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
    60%
  </div>
</div>
       </div>
    </header>

</template>

<script>
const doc=[{
  title:'产品经理',
  tada1:'PHP开发'
},{
  title:'产品经理',
  tada1:'JAVA开发'
},{
  title:'产品经理',
  tada1:'C++开发'
},{
  title:'产品经理',
  tada1:'C#开发',
  tada2:'PHP工程师',
  tada3:'JAVA开发'
}]
 export default{
  name:'header',
  data(){
    return{
      doc:doc
    }
  },
  methods:{
     test(){
      console.log('hello word')
     }
  }
 }
</script>

