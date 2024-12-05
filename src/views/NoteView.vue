<template>
<div>
  <ImageUploader />
  <div v-for="image in images" :key="image.name">
    <ImageClassifier :image="image" />
    </div>
  </div>
</template>
<script>
import ImageUploader from '@/components/modules/ImageUploader.vue';
import ImageClassifier from '@/components/modules/ImageClassifier.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    ImageUploader,
    ImageClassifier
  },
  computed: {
    ...mapGetters(['allImages'])
  }
};
</script>
