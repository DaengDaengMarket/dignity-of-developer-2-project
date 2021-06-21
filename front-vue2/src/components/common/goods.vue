<template>
  <v-container class="grey lighten-5">
        <div v-if="getTest.length>0">
            <v-row>
                    <v-col 
                        v-for="item in getTest"
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
    </v-container>
</template>

<script>
    export default {
        computed:{
            getTest(){
                return this.$store.state.test
            }
        }
    }
</script>

