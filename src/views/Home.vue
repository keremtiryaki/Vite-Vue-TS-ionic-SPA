<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-menu-button></ion-menu-button>
				</ion-buttons>
				<ion-title>Home</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<ion-list>...</ion-list>

			<ion-fab vertical="bottom" horizontal="end" slot="fixed">
				<ion-fab-button @click="() => router.push('/new')">
					<ion-icon name="add"></ion-icon>
				</ion-fab-button>
			</ion-fab>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
// setInterval(() => {
// 	console.log("Hello from Home.vue");
// }, 1000);
</script>
