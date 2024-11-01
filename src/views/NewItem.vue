<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-back-button default-href="/home"></ion-back-button>
					<ion-menu-button></ion-menu-button>
				</ion-buttons>
				<ion-title>New Item</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content ref="content">
			<ion-button @click="scrollToBottom">
				Scroll to Bottom
				<ion-icon ios="heart" md="add"></ion-icon>
			</ion-button>
			<SubComponent></SubComponent>
			<ion-list :inset="true">
				<ion-list-header>
					<ion-label>Video Games</ion-label>
				</ion-list-header>
				<ion-item v-for="item of items" :key="item.id">
					<ion-label>{{ item.name }}</ion-label>
				</ion-item>
			</ion-list>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SubComponent from "../components/SubComponent.vue";
const items = Array.from({ length: 40 }, (_, i) => ({
	id: i,
	name: `Item ${i}`,
}));
const content = ref();
const scrollToBottom = () => {
	content.value.$el.scrollToBottom(300);
};
</script>
