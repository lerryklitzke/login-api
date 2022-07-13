<template>
  <div>
    <div class="container tx-center">
      <h2 class="mg-4">You are logged.</h2>
      <form action="http://localhost:3000/auth/logout" method="POST">
        <button type="submit" class="btn btn-transparent">Logout</button>
      </form>
    </div>
  </div>
</template>