<template>
  <v-container class="grey lighten-5">
      <!-- testData를 getTest로 변경하면 json-server 없이 화면에 띄우는 것 가능 -->
        <div v-if="testData.length>0">
            <v-row>
                    <v-col 
                        v-for="item in testData"
                        v-bind:key="item"
                        sm="3"
                        xl="3"
                        lg="3"
                        xs="3"
                        md="3"
                        cols="12"
                    >
                    <div class="card">
                        <img :src="item.path" class="card-img-top" alt="image" />
                        <div class="card-body">
                            <h5 class="card-title">
                                {{item.name}}
                            </h5>
                            <p class="card-text">
                                {{item.price}}
                            </p>
                            <p class="card-text">
                                {{item.wanted_location}}
                            </p>

                            <router-link to="/productdetail">
                                <div class="card-button">
                                    <button type="button" class="btn btn-primary btn-sm">
                                        상세 정보 보기
                                    </button>
                                </div>
                            </router-link>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">{{item.time}}</small>
                        </div>	
                    </div>	
                </v-col>
            </v-row>
        </div>
        <infinite-loading @infinite="infiniteHandler" spinner="waveDots">
            <div slot="no-more" style="color: rgb(102, 102, 102); font-size: 14px; padding: 10px 0px;">목록의 끝입니다 :)</div>
        </infinite-loading>
       
    </v-container>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import axios from 'axios'
// //watchar 가 화면에 들어오면, 콜백함수를 실행하겠다
    export default {
        data:()=> ({
            testData:[],
            page:1,
            limit:12,
            max_num:0
        }),
        components:{
            InfiniteLoading
        },
        methods: {
            gettestData: function () {  
                const options = {
                    params:{
                        //limit는 무한스크롤이 진행되면서 다음에 불러올 페이지 번호 또는 아이디를 업데이트
                        _page: this.page++, // 기존값 가져와서 쓰고나서 1을 올린다//++page는 올리고 쓴다
                        _limit: 12,
                    }
                }
                this.page++ // 기존값 가져와서 쓰고나서 1을 올린다
                // json-server를 이용해 api를 띄우고 url을 매핑해주었다.
                axios.get('http://localhost:3001/test', options)
                    .then((res) => { 
                        this.testData = [...this.testData, ...res.data] 
                    }) 
                    .catch(err => console.error(err)) 
            },
            infiniteHandler($state){
                const options = {
                    params:{
                        //limit는 무한스크롤이 진행되면서 다음에 불러올 페이지 번호 또는 아이디를 업데이트
                        _limit: this.limit+12,
                    }
                }
                axios.get('http://localhost:3001/test', options)
                .then(response=>{
                    setTimeout(()=>{
                        if(response.data.length>0){
                            this.testData=this.testData.concat(response.data);
                            $state.loaded();
                            this.limit+=12
                            // 데이터를 12로 나눴을 때 12보다 작게 되면 
                            if(response.length/12<1){
                                $state.complete(); // 데이터가 없으면 로딩 끝
                            }
                        } else{
                            $state.complete();
                        }
                    },1000)
                }).catch(error=>{
                    console.error(error);
                })
            },
        },
        created: function (){
        // 초기화 이후 AJAX 요청을 보내기 좋은 Hook이 created이다.
            this.gettestData()
        },
        computed:{
            getTest(){
                return this.$store.state.test
            }
        }
    }

</script>

