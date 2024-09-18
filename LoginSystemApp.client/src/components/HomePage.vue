<template>
    <div class="home">
        <h1>Welcome, {{ user.name }}</h1>
        <button @click="logout">Logout</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import axios from 'axios';

    const user = ref({ name: 'John Doe' });
    const router = useRouter();

    const logout = async () => {
        try {
            
            localStorage.removeItem('token');
            await axios.post('/api/auth/logout');
            router.push('/login');
        } catch (error) {
            console.error(error);
        }
    };
</script>

<style scoped>
    .home {
        text-align: center;
    }
</style>
