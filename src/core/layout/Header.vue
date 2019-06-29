<template>
  <header>
    <div class="container">
      <div class="app-header">
        <div class="app-header-logo">
          <img src="@i/logo_transparent.png" alt="">
        </div>
        <div class="app-header-menu">
          <ul class="menu">
            <li class="menu__item menu__item--active"><a href="">Home</a></li>
            <li class="menu__item"><a href="">SignUp</a></li>
            <li class="menu__item"><a href="">Login</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
header {
  background-color: whitesmoke;  
}

.app-header {
  display: flex;
  padding: 10px 0;
}

.app-header-logo {
  display: flex;

 > img {
   height: auto;
   width: 100%;
   max-width: 80px;
   min-width: 40px;
 }
}

.app-header-menu {
  flex-grow: 1;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
}

.menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: end;
  align-items: stretch;

  &__item {
    align-self: center;
    min-width: 80px;
    padding: 10px 15px;
    margin-left: 15px;
    text-align: center;
    border: 1px solid black;
    border-radius: 2px;

    > a {
      text-decoration: none;
    }
    &:first-child {
      margin-left: 0px;
    }

    &--active {

    }
  }
}

.container {
  max-width: 1004px;
  padding: 0 10px;
  margin: 0 auto;
}
</style>
