<template>
     <div class="nav-container" tabindex="0">
            <div class="nav-toggle" @click="checkSidebarVisibility"></div>
             <v-navigation-drawer v-if="showSidebar"
      id="app-drawer"
      v-model="drawer"
      app
      dark
      :color="colors.menu_background_color"
      floating
      persistent
      mobile-break-point="960"
      width="280"
    >
      <div>
        <v-layout
          class="fill-height"
          tag="v-list"
          column
        >
          <v-list>
            <v-list-item v-on:click="showSidebar=false">
              <v-toolbar-title><v-icon class="mr-2">fas fa-bars</v-icon>댕댕마켓</v-toolbar-title>
            </v-list-item>
            <hr class="mt-2 mb-2"/>
            <v-list-item-group active-class="white--text">
              <template v-for="menu in menus">
                <template v-if="menu.childrens">
                  <v-list-group
                    :prepend-icon="menu.icon" 
                    :key="menu.id" 
                  >
                    <template v-slot:activator>
                      <v-list-item-title>{{menu.title}}</v-list-item-title>
                    </template>
                    <template v-for="children in menu.childrens">
                      <v-list-item 
                        @click="movePage(children.target);" 
                        :key="children.id" 
                        class="ml-2" 
                        :active-class="`${colors.menu_selected_color} accent-4 white--text`"
                      >
                        <v-list-item-icon :active-class="`${colors.menu_selected_color} accent-4`">
                          <v-icon>{{children.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                          {{children.title}}
                        </v-list-item-title>
                      </v-list-item>
                    </template>
                  </v-list-group>
                </template>
                <template v-else> 
                  <v-list-item 
                    @click="movePage(menu.target);" 
                    :key="menu.id" 
                  >
                    <v-list-item-icon>
                      <v-icon>{{menu.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{menu.title}}</v-list-item-title>
                  </v-list-item>
                </template>
              </template>
            </v-list-item-group>
          </v-list>
        </v-layout>
      </div>
    </v-navigation-drawer>
    </div>
   
</template>

<script>
// import { mapState } from "vuex";
// import _ from "lodash";
// export default {
//   components: {
//   },
//   data: () => ({
//     drawer: null,
//     color: 'success',
//     responsive: false,
//     showSidebar:false,
//   }),
//   computed: _.extend(
//     mapState(["menus", "colors"]),
//   ),
//   mounted(){
//     this.onResponsiveInverted()
//     window.addEventListener('resize', this.onResponsiveInverted)

//      document.addEventListener("click", function(event) {
    
//       // If the click inside the element, do nothing
//       if (event.target.closest(".nav-container")) return;
//       // If the clicks outside the element, hide it!
//       this.showSidebar = false;
//     }.bind(this));
//   },
//   methods: {
//     movePage(target){
//       // this.showSidebar=false;
//       this.$router.push({ name: target });
//     },
//     onResponsiveInverted () {
//       if (window.innerWidth < 1000) {
//         this.responsive = true
//       } else {
//         this.responsive = false
//       }
//     },
//     checkSidebarVisibility(){
//           this.showSidebar=true
//     }
//   },
// }
// </script>
