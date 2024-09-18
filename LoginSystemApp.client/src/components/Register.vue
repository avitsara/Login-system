<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header text-center">
                        <h2>Register</h2>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="register">
                            <div class="mb-3">
                                <label for="username" class="form-label">Username</label>
                                <input type="text"
                                       id="username"
                                       v-model="username"
                                       class="form-control"
                                       placeholder="Enter your username"
                                       required />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email"
                                       id="email"
                                       v-model="email"
                                       class="form-control"
                                       placeholder="Enter your email"
                                       required />
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password"
                                       id="password"
                                       v-model="password"
                                       class="form-control"
                                       placeholder="Enter your password"
                                       required />
                            </div>
                            <div class="mb-3">
                                <label for="confirmPassword" class="form-label">Confirm Password</label>
                                <input type="password"
                                       id="confirmPassword"
                                       v-model="confirmPassword"
                                       class="form-control"
                                       placeholder="Confirm your password"
                                       required />
                            </div>
                            <div class="d-grid gap-2">
                                <button type="submit" class="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer text-center">
                        <p>
                            Already have an account?
                            <router-link to="/login">Login here</router-link>
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

    const username = ref('');
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const router = useRouter();

    const register = () => {
        if (password.value !== confirmPassword.value) {
            alert('Passwords do not match!');
            return;
        }

       
        alert('Registration successful!');
        router.push('/login');
    };
</script>

<style scoped>
    .card {
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    }
</style>

