import { mapState } from "vuex";
import _ from "lodash";
export default {
  components: {
  },
  data: () => ({
    drawer: null,
    color: 'success',
    responsive: false,
    showSidebar:false,
  }),
  computed: _.extend(
    mapState(["menus", "colors"]),
  ),
  mounted(){
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)

     document.addEventListener("click", function(event) {
    
      // If the click inside the element, do nothing
      if (event.target.closest(".nav-container")) return;
      // If the clicks outside the element, hide it!
      this.showSidebar = false;
    }.bind(this));
  },
  methods: {
    movePage(target){
      // this.showSidebar=false;
      this.$router.push({ name: target });
    },
    onResponsiveInverted () {
      if (window.innerWidth < 1000) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    },
    checkSidebarVisibility(){
          this.showSidebar=true
    }
  },
}

// 변수 내보내기
export default sidemenu;