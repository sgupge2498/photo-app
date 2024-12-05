<template>
  <div class="folder">
    <h1>This is an Folder page</h1>
  </div>
  <div class="button-container">
    <router-link to="/">
      <button>HOME</button>
    </router-link>
  </div>
</template>
  
<style>
  .folder {
    min-height: 100vh;
    display: flex;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  h1 {
  background-color: #92e0ff;
  padding: 1rem 0;
  }
  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
</style>
  