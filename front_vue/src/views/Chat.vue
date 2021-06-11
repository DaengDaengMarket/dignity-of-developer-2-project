<template>
  <div id="chatpage">
    <chat-sector>
      <div id="chatTitle">
        <h1>
          <img
            src="img/km/pawprint.png"
            style="width: 40px; height: 40px"
            alt="" />댕댕톡
        </h1>
      </div>
      <div id="chat-container">
        <chat-aside>
          <chat-header>
            <input
              type="text"
              placeholder="search" />
          </chat-header>
          <ul>
            <li>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
                alt="" />
              <div>
                <h2>Prénom Nom</h2>
                <h3>
                  <span class="status orange"></span>
                  offline
                </h3>
              </div>
            </li>
            <li>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_02.jpg"
                alt="" />
              <div>
                <h2>Prénom Nom</h2>
                <h3>
                  <span class="status green"></span>
                  online
                </h3>
              </div>
            </li>
            <li>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_03.jpg"
                alt="" />
              <div>
                <h2>Prénom Nom</h2>
                <h3>
                  <span class="status orange"></span>
                  offline
                </h3>
              </div>
            </li>
            <li>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_04.jpg"
                alt="" />
              <div>
                <h2>Prénom Nom</h2>
                <h3>
                  <span class="status green"></span>
                  online
                </h3>
              </div>
            </li>
            <li>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_05.jpg"
                alt="" />
              <div>
                <h2>Prénom Nom</h2>
                <h3>
                  <span class="status orange"></span>
                  offline
                </h3>
              </div>
            </li>
            <li>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_06.jpg"
                alt="" />
              <div>
                <h2>Prénom Nom</h2>
                <h3>
                  <span class="status green"></span>
                  online
                </h3>
              </div>
            </li>
            <li>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_07.jpg"
                alt="" />
              <div>
                <h2>Prénom Nom</h2>
                <h3>
                  <span class="status green"></span>
                  online
                </h3>
              </div>
            </li>
            <li>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_08.jpg"
                alt="" />
              <div>
                <h2>Prénom Nom</h2>
                <h3>
                  <span class="status green"></span>
                  online
                </h3>
              </div>
            </li>
            <li>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_09.jpg"
                alt="" />
              <div>
                <h2>Prénom Nom</h2>
                <h3>
                  <span class="status green"></span>
                  online
                </h3>
              </div>
            </li>
            <li>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_10.jpg"
                alt="" />
              <div>
                <h2>Prénom Nom</h2>
                <h3>
                  <span class="status orange"></span>
                  offline
                </h3>
              </div>
            </li>
          </ul>
        </chat-aside>
        <chat-main>
          <chat-header>
            <div
              class="row col-12"
              style="margin: 0; padding: 0">
              <div class="row col-3">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
                  width="50"
                  height="70"
                  alt="" />
              </div>
              <div
                class="row col-5"
                style="margin-top: 10px">
                <h2>Nickname<br />3분 전</h2>
              </div>
              <div
                class="row col-5"
                style="margin-top: 10px">
                <p style="font-size: 11px">
                  Product Name<br />price: 12000
                  <span
                    style="margin-left: 10px"><img
                    src="img/km/01.jpg"
                    style="width: 30px; height: 40px"
                    alt="" /></span>
                </p>
              </div>
            </div>
          </chat-header>

          <ul id="chat">
            <li class="you">
              <div class="entete">
                <span class="status green"></span>
                <h2>백성규</h2>
                <h3>10:12AM, Today</h3>
              </div>
              <div class="triangle"></div>
              <div class="message">
                안녕하세요 반갑습니다
              </div>
            </li>
            <li class="me">
              <div class="entete">
                <h3>10:12AM, Today</h3>
                <h2>강경민</h2>
                <span class="status blue"></span>
              </div>
              <div class="triangle"></div>
              <div class="message">
                안녕하세요 저도 반가워요
              </div>
            </li>
            <li class="me">
              <div class="entete">
                <h3>10:12AM, Today</h3>
                <h2>Vincent</h2>
                <span class="status blue"></span>
              </div>
              <div class="triangle"></div>
              <div class="message">
                OK
              </div>
            </li>
            <li class="you">
              <div class="entete">
                <span class="status green"></span>
                <h2>백성규</h2>
                <h3>10:12AM, Today</h3>
              </div>
              <div class="triangle"></div>
              <div class="message">
                반려견 목줄 구매하고 싶은데요
              </div>
            </li>
            <li class="me">
              <div class="entete">
                <h3>10:12AM, Today</h3>
                <h2>강경민</h2>
                <span class="status blue"></span>
              </div>
              <div class="triangle"></div>
              <div class="message">
                2만원입니다
              </div>
            </li>
            <li class="me">
              <div class="entete">
                <h3>10:12AM, Today</h3>
                <h2>Vincent</h2>
                <span class="status blue"></span>
              </div>
              <div class="triangle"></div>
              <div class="message">
                OK
              </div>
            </li>
          </ul>
          <chat-footer>
            <textarea placeholder="Type your message"></textarea>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png"
              alt="" />
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png"
              alt="" />
            <a href="#">Send</a>
          </chat-footer>
        </chat-main>
      </div>
    </chat-sector>
  </div>
</template>

// <script>
// export default {
//   name: 'window-portal',
//   props: {
//     open: {
//       type: Boolean,
//       default: false,
//     }
//   },
//   data() {
//     return {
//       windowRef: null,
//     }
//   },
//   watch: {
//     open(newOpen) {
//       if(newOpen) {
//         this.openPortal();
//       } else {
//         this.closePortal();
//       }
//     }
//   },
//   methods: {
//     openPortal() {
//       this.windowRef = window.open("http://localhost:2995/chat", "width=600,height=400,left=200,top=200");
//       this.windowRef.addEventListener('beforeunload', this.closePortal);
//       // magic!
//       this.windowRef.document.body.appendChild(this.$el);
//     },
//     closePortal() {
//       if(this.windowRef) {
//         this.windowRef.close();
//         this.windowRef = null;
//         this.$emit('close');
//       }
//     }
//   },
//   mounted() {
//     if(this.open) {
//       this.openPortal();
//     }
//   },
//   beforeUnmount() {
//     if (this.windowRef) {
//       this.closePortal();
//     }
//   }
// }
// </script>
// <style></style>
