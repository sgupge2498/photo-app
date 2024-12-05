<template>
    <div>
      <input type="file" @change="onFileChange" />
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      onFileChange(e) {
        const file = e.target.files[0];
        this.$store.dispatch('uploadImage', file);
      }
    }
  };
  </script>
  