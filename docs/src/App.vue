<template>
  <main class="fk-page">
    <div class="fk-tabs">
      <div class="fk-title clickable">Fronkk UI Library</div>

      <nav class="fk-tab"></nav>

      <footer class="fk-tab--bottom">
        <a href="https://github.com/fronkker/fronkk" target="_blank">
          <img class="github-icon" src="./assets/img/github-mark-white.png" alt="깃헙 바로가기 아이콘" />
        </a>
      </footer>
    </div>

    <section class="fk-guide--section">
      <FkBtn label="Button" dense outlined />
    </section>
  </main>
</template>

<script setup>
import {ref} from 'vue'
import {FkBtn} from '../../src/main'

const selected = ref()
</script>

<style lang="scss" scoped>
.fk-page {
  width: 90%;

  height: 85vh;

  border: 1px solid #cfd8dc;
  border-radius: 15px;

  background: white;
  box-shadow: 3px 3px 10px #cfd8dc;

  margin: auto auto auto auto;

  display: flex;
  flex-direction: row;

  .fk-tabs {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-image: linear-gradient(to top, #00f2fe 0%, #4facfe 100%);

    border-right: 1px solid #eaeaea;
    box-shadow: 5px 0 5px #eaeaea5f;
    border-radius: 16px 0 0 16px;

    .fk-title {
      font-size: 18px;
      font-weight: 800;
      text-align: center;
      color: #009efd;

      width: 100%;
      padding-top: 20px;
      padding-bottom: 20px;

      background: white;
      border-radius: 16px 0 0 0;
      border-bottom: 1px solid #eaeaea;

      margin-bottom: 25px;
    }

    .fk-tab {
      font-size: 16px;
      color: white;

      width: 55%;
      height: 80%;
      font-weight: 300;

      display: flex;
      flex-direction: column;
      gap: 20px;

      .selected--left-menu {
        font-weight: 700;
      }
    }

    .fk-tab--bottom > a {
      display: flex;
      justify-content: center;
      margin-bottom: 16px;

      .github-icon {
        width: 12%;
      }
    }
  }

  .fk-guide--section {
    min-width: 40%;
    width: 80%;
    max-width: 80%;
    height: 100%;
    border-radius: 0 15px 15px 0;
    padding: 16px;

    display: flex;
    flex-direction: column;

    .fk-guide--title {
      font-size: 20px;
      font-weight: 700;
      color: #009efd;

      text-align: left;
      margin: 10px 0 10px 10px;

      overflow: hidden;
    }

    > .fk-guide--docs {
      font-size: 15px;

      margin-left: 20px;
      width: calc(100% - 40px);
      height: calc(100% - 45px - 0px);

      overflow-y: scroll;
      -ms-overflow-style: none; /*IE, Edge*/
      scrollbar-width: none; /*Firefox*/

      &::-webkit-scrollbar {
        width: 7px;
      }

      &::-webkit-scrollbar-thumb {
        height: 30%;
        background: #ace0f9;

        border-radius: 10px;
      }

      &::-webkit-scrollbar-track {
        background: #ffffff00; /*스크롤바 뒷 배경 색상*/
      }
    }

    > .fk-guide--component {
      margin: 20px 0 20px 20px;
    }

    .fk-guide--label {
      font-size: 20px;
      text-align: left;
      font-weight: bolder;
    }

    .fk-guide--content {
      text-align: left;

      border: 3px solid #3918d9;
      border-radius: 5px;
      background: #222;
      color: white;

      width: 100%;
      height: 200px;

      .fk-guide--tabs {
        display: flex;

        .fk-guide--tab {
          width: 80px;
          height: 30px;
          text-align: center;

          &.selected {
            border-bottom: 3px solid #3918d9;
          }
        }
      }

      .fk-guide--tab-section {
        display: flex;
        flex-direction: row;

        height: calc(200px - 30px - 3px);

        border-top: 1px solid white;

        .fk-guide--tab-section--left {
          padding-top: 20px;
          padding-left: 20px;

          border-right: 1px solid white;

          width: 150px;

          > div {
            padding-left: 12px;

            &.selected {
              border-left: 2px solid #184c87;

              font-weight: bold;
            }
          }
        }

        .fk-guide--tab-section--right {
          width: 100%;

          padding-top: 20px;
          padding-left: 20px;
        }
      }
    }
  }

  .page-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    margin-top: auto;
    margin-bottom: auto;

    .title {
      font-size: 36px;
      font-weight: bolder;
      color: dimgray;
    }

    .description {
      font-size: 14px;
      font-weight: lighter;
      color: dimgray;
    }
  }
}

// 외부에서 input Style 조정할때 선택자
:deep(#fk-input) {
  width: 200px;
}
</style>
