<template>
    <ul class="nav nav-pills">
    <!-- exact keyword = it has to match exactly the to in order to mark it as active-->
        <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>

    </ul>
</template>