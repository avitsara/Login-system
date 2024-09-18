<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header text-center">
                        <h2>Login</h2>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="login">
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email"
                                       id="email"
                                       v-model="email"
                                       class="form-control"
                                       required />
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password"
                                       id="password"
                                       v-model="password"
                                       class="form-control"
                                       required />
                            </div>
                            <div class="d-grid gap-2">
                                <button type="submit" class="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer text-center">
                        <p>
                            Don't have an account?
                            <router-link to="/register">Register here</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const email = ref('');
    const password = ref('');
    const router = useRouter();

    const login = () => {
        // Perform login logic (e.g., API calls)
        if (email.value && password.value) {
            alert('Login successful!');
            // Redirect to home page upon successful login
            router.push('/home');
        } else {
            alert('Invalid login credentials');
        }
    };
</script>

<style scoped>
    .card {
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    }
</style>
