<template>
    <div>
        <child v-for="item in list" :title="item" />
    </div>
</template>
<script>
    import child from './components/child.vue';
    export default {
        data() {
            return {
                list: ['test1', 'test2']
            };
        },
        components: {
            child
        }
    }
</script>