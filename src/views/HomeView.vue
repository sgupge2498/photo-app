<template>
  <div class="home">
    <div class="content-wrapper">
      <header>
        <h1>My App</h1>
      </header>
      <main>
        <div class="button-container">
          <router-link to="/Folder">
            <button>Folder</button>
          </router-link>

          <router-link to="/Note">            
            <button>Note</button>
          </router-link>
       </div>
      </main>
    </div>
    <!-- <router-view /> -->
  </div>
</template>

<script>
// export default {
//   name: 'Home'
// }
</script>

<style scoped>
header {
  width: 100%;
  background-color: #92e0ff;
  padding: 1rem 0;
  text-align: center;
}
.home {
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

.content-wrapper {
  width: 100%;
  /* max-width: 1280px; */
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
}

.button-container {
  display: flex;
  gap: 2rem;
}

button {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}
</style>